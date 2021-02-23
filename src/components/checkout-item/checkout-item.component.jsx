import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';

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
        <div className='row'>
          <span className='product-description'>{description}</span>
        </div>
        <div className='row'>
          <div>
            <span className='quantity'>
              <div className='arrow' onClick={() => removeItem(cartItem)}>&#x2770;</div>
                <span className='value'>{quantity}</span>
              <div className='arrow' onClick={() => addItem(cartItem)}>&#x2771;</div>
            </span>
          </div>
          <span className='price'>${price}</span>
          <div className='remove-button' onClick={() => clearItem(cartItem)}>
            <p>&#x2716;</p>
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

// 