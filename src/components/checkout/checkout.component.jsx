import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import CheckOutItem from '../checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { RiShoppingCartFill } from 'react-icons/ri';

import { selectCartItemsCount, selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckOut = ({ isDropdown, itemCount, cartItems, total, closeCheckOut, goToCheckOut }) => {

  return(
    <React.Fragment>
      <div className='checkout-header'>
        <div className='cart-icon'>
          <RiShoppingCartFill size={30} className='shopping-icon' />
        </div>
        <div className='checkout-header-title'>
          <span>SHOPPING CART ({itemCount})</span>
        </div>
        <div className='exit-button'>
          <span onClick={() => closeCheckOut()}>&#x2716;</span>
        </div>
      </div>
      <div className='checkout-main'>
        {cartItems.length ?
          (cartItems.map(cartItem => (
            <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
          ))
          ) : (
            <span className='empty-cart'>
              <p>Your shopping bag is empty.</p>
              <p>Check if there are any products on your wishlist and snatch them up before they're gone!</p>
              <p>You can also check out the latest arrivals ;</p>
            </span>
          )
        }
      </div>
      <div className='checkout-footer'>
        <div className='total'>
          <span className='total-text'>TOTAL</span>
          <span className='total-price'>${total}</span>
        </div>
        <div className='checkout-button-container'>
          {isDropdown
          ? <CustomButton large onClick={() => goToCheckOut()}>Go To Checkout</CustomButton>
          : <StripeCheckoutButton price={total} />}
        </div>
        <div className='test-warning'>
          *test credit card for payments*
          <br />
          4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
          <br />
        </div>
      </div>
    </React.Fragment>
  )
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps, null)(CheckOut);