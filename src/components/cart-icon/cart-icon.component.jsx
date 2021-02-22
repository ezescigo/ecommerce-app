import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { RiShoppingCartLine, RiShoppingCartFill } from 'react-icons/ri';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount, mobile, isXsDevice }) => {
  const handleOnClick = () => {
    if (!mobile) {
      toggleCartHidden()
    }
  }
  return (
  <div className='cart-icon' onClick={() => handleOnClick()}>
    { itemCount > 0
      ? <RiShoppingCartFill size={30} className='shopping-icon' />
      : <RiShoppingCartLine size={30} className='shopping-icon' />
    }
    { isXsDevice
      ? null
      : <span className='cart-item-count'>{itemCount}</span>
    }
  </div>
)};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);

