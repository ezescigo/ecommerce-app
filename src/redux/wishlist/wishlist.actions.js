import WishlistActionTypes from './wishlist.types';

export const toggleFavWishlist = item => ({
  type: WishlistActionTypes.TOGGLE_ITEM_TO_WISHLIST,
  payload: item
});

export const clearWishlist = () => ({
  type: WishlistActionTypes.CLEAR_WISHLIST,
});