import React, {useRef} from 'react';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartHidden } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { useOnClickOutside } from '../../hooks';

import { CSSTransition } from 'react-transition-group';

import CheckOut from '../checkout/checkout.component';
import { CartDropdownContainer } from './cart-dropdown.styles';

const CartDropdown = ({ hidden, toggleCartHidden }) => {
  const node = useRef();
  useOnClickOutside(node, () => toggleCartHidden());

  return (
    <CartDropdownContainer hidden={hidden}>
      <CheckOut closeCheckOut={() => toggleCartHidden()} />
    </CartDropdownContainer>
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