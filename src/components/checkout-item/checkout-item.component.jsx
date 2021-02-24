import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
import { addItem, removeItemFromCart, clearItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckOutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const description = 'Some description.'
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <a href='#'>
          <img src={imageUrl} alt='item' />
        </a>
      </div>
      <div className='product-info'>
        <div className='row'>
          <span className='product-name'>{name}</span>
        </div>
        <div className='row middle'>
          <span className='product-description'>{description}</span>
          <div className='quantity'>
            <button className='arrow' onClick={() => removeItem(cartItem)}>
             <HiMinusSm size={24} className='arrow-icon'/>
            </button>
            <div className='value'><p>{quantity}</p></div>
            <button className='arrow' onClick={() => addItem(cartItem)}>
              <HiPlusSm size={24} className='arrow-icon' />
            </button>
          </div>
        </div>
        <div className='footer'>
          <button className='checkout-button-icon' onClick={() => clearItem(cartItem)}>
            <RiDeleteBin7Line size={30} className='checkout-footer-icon' />
          </button>
          <button className='checkout-button-icon'>
           <AiOutlineHeart size={30} className='checkout-footer-icon' />
          </button>
          <div className='price'>
            <p className='value'>${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItemFromCart(item)),
  clearItem: item => dispatch(clearItemFromCart(item))
});

export default connect(mapStateToProps,
  mapDispatchToProps
  )(CheckOutItem);