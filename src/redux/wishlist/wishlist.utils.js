export const toggleItemToWishlist = (wishlistItemsIds, wishlistItemTarget) => {
  // Search first item found in our array based on condition: existing id item.
  const existingIdInWishlist = wishlistItemsIds.find(wishlistItemId => wishlistItemId.id === wishlistItemTarget.id);
  // If the item already existis on the array: Return new array with each cartItem and add quantity on the new cartItem
  if (existingIdInWishlist) {
    return wishlistItemsIds.filter(wishlistItemsId => 
      wishlistItemsId.id !== wishlistItemTarget.id)
  };

  return [ ...wishlistItemsIds, wishlistItemTarget ];
};