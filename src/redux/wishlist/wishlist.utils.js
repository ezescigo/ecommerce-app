export const updateWishlist = (wishlistItems, itemsToRemove, itemsToAdd) => {
  // Adding items pending to Add
  let updatedList = [...wishlistItems, ...itemsToAdd];
  // Removing items pending to Remove
  return updatedList.filter(item => !(itemsToRemove.some(itemToRemove => itemToRemove.id === item.id)));
};