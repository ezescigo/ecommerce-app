import React from 'react';

import './cart-item.styles.scss';

const CartItem = ( { item: { name, imageUrl, price, quantity} } ) => {
  // const { name } = cartItem;
  return (
  <div className='cart-item'>
    <img className='cart-item-image' src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>{quantity} x ${price}</span>
    </div>
  </div>
  );
}

export default CartItem;