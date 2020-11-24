export const addItemToWishlist = (wishlistItems, wishlistItemToAdd) => {
  // Search first item found in our array based on condition: existing id item.
  const existingWishlistItem = wishlistItems.find(wishlistItem => wishlistItem.id === wishlistItemToAdd.id);

  // If the item already existis on the array: Return new array with each cartItem and add quantity on the new cartItem
  if (existingWishlistItem) {
    return wishlistItems.map(item => 
      item.id === wishlistItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  }

  // If it's a new item, return array adding the item with quantity 1.
  return [...wishlistItems, { ...wishlistItemToAdd, quantity: 1 }];
};