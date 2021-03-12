import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { RiShoppingCartLine, RiShoppingCartFill } from 'react-icons/ri';

import './cart-icon.styles.scss';

const CartIcon = ({ onClick, itemCount, mobile, isxsdevice }) => {
  
  const handleOnClick = () => {
    if (!mobile) {
      return onClick()
    }
  }

  return (
  <div className='cart-icon' onClick={() => handleOnClick()}>
    { itemCount > 0
      ? <RiShoppingCartFill size={30} className='shopping-icon' />
      : <RiShoppingCartLine size={30} className='shopping-icon' />
    }
    { isxsdevice
      ? null
      : <span className='cart-item-count'>{itemCount}</span>
    }
  </div>
)};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  null
)(CartIcon);

