import { toast } from "react-toastify";

export const addItemToCart = (cartItems, cartItemToAdd) => {
  // Search first item found in our array based on condition: existing id item.
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  toast('Item added to your Shopping Cart.');
  // If the item already existis on the array: Return new array with each cartItem and add quantity on the new cartItem
  if (existingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  // If it's a new item, return array adding the item with quantity 1.
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
  
  // If quantity is 1, filter it from array.
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => 
      cartItem.id !== cartItemToRemove.id)
  }
  // If quantity is >1, reduce quantity by 1.
  return cartItems.map(cartItem => 
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
};