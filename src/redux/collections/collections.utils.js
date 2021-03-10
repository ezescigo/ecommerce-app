// export const addCollection = (category, newCollection) => {
//   // Search first item found in our array based on condition: existing id item.
//   const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

//   toast('Item added to your Shopping Cart.');
//   // If the item already existis on the array: Return new array with each cartItem and add quantity on the new cartItem
//   if (existingCartItem) {
//     return cartItems.map(cartItem => 
//       cartItem.id === cartItemToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     )
//   }