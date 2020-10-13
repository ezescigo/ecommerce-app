export const addItemToCart = (cartItems, cartItemToAdd) => {
  // Search first item found in our array based on condition: existing id item.
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

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