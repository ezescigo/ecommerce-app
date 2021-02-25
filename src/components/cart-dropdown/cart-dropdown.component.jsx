import React, {useRef} from 'react';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartHidden } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { useOnClickOutside } from '../../hooks';

import CheckOut from '../checkout/checkout.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch, hidden, toggleCartHidden }) => {
  const node = useRef();
  useOnClickOutside(node, () => toggleCartHidden());

  return (
    <div className='cart-dropdown'>
      <CheckOut closeCheckOut={() => toggleCartHidden()} />
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