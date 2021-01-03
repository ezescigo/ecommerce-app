import { createSelector } from 'reselect';

const selectWishlist = state => state.wishlist;

export const selectWishlistItems = createSelector(
  [selectWishlist],
  (wishlist) => wishlist.wishlistItems
);

export const selectAllFavItems = createSelector(
  [selectWishlist],
  (wishlist) => [...wishlist.wishlistItems, ...wishlist.toAdd]
);