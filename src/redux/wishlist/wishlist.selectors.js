import { createSelector } from 'reselect';

const selectWishlist = state => state.wishlist;

export const selectWishlistItems = createSelector(
  [selectWishlist],
  (wishlist) => wishlist.wishlistItems
);

export const selectWishlistItemsForPreview = createSelector(
  [selectWishlistItems],
  (wishlist) => (wishlist ? Object.keys(wishlist).map(key => wishlist[key]) : [])
);