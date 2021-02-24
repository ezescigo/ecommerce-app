import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CartItem from '../../components/cart-item/cart-item.component';
import { createUserProfileDocument } from '../../firebase/firebase.utils';

import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { RiShoppingCartFill } from 'react-icons/ri';
import { selectCartItemsCount, selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckOutPage = ({ itemCount, cartItems, total, onClose, history }) => {
  
  const closePage = () => {
    history.push('/');
  }

  return (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='cart-icon'>
        <RiShoppingCartFill size={30} className='shopping-icon' />
      </div>
      <div className='checkout-header-title'>
        <span>SHOPPING BAG ({itemCount})</span>
      </div>
      <div className='exit-button'>
        <span onClick={() => closePage()}>&#x2716;</span>
      </div>
    </div>
    <div className='checkout-main'>
    {cartItems.length ?
      (cartItems.map(cartItem => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
      ))
      ) : (
        <span className='empty-cart'>Your shopping bag is empty.
          <p>Check if there are any products on your wishlist and snatch them up before they're gone!</p>
          <p>You can also check out the latest arrivals ;</p>
        </span>
      )
    }
    </div>
    <div className='checkout-footer'>
      <div className='total'>
        <p>TOTAL: ${total}</p>
      </div>
    </div>
  
    <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
      <br />
      <StripeCheckoutButton price={total} />
    </div>
  </div>
)}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default withRouter(connect(mapStateToProps)(CheckOutPage));