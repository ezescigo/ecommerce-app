import WishlistActionTypes from './wishlist.types';

export const wishlist = item => ({
  type: WishlistActionTypes.ADD_ITEM_TO_WISHLIST,
  payload: item
});