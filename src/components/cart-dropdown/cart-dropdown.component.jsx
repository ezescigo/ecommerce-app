import React, {useEffect, useRef} from 'react';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartHidden } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch, hidden }) => {

  const ref = useRef(null);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      dispatch(toggleCartHidden);
    }
};

useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
        document.removeEventListener('click', handleClickOutside, true);
    };
});

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ?
          (cartItems.map(cartItem =>
            <CartItem key={cartItem.id} item={cartItem}/>
          )
          ) : (
            <span className='empty-cart'>Your cart is empty.</span>
          )
        }
      </div>
      <CustomButton 
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >Go To Checkout</CustomButton>
    </div>
  )
};




const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  hidden: selectCartHidden
});

export default withRouter((connect(mapStateToProps, null)(CartDropdown)));