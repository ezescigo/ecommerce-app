import React, {useEffect, useRef} from 'react';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartHidden } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { useOnClickOutside } from '../../hooks';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';


import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch, hidden, toggleCartHidden }) => {
  const node = useRef();
  useOnClickOutside(node, () => toggleCartHidden());

  return (
    <div ref={node} className='cart-dropdown'>
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

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});


export default withRouter((connect(mapStateToProps, mapDispatchToProps)(CartDropdown)));