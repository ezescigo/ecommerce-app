import WishlistActionTypes from './wishlist.types';

export const clearWishlist = () => ({
  type: WishlistActionTypes.CLEAR_WISHLIST,
});

export const queueForAdd = item => ({
  type: WishlistActionTypes.QUEUE_FOR_ADD,
  payload: item
});

export const queueForRemoval = item => ({
  type: WishlistActionTypes.QUEUE_FOR_REMOVAL,
  payload: item
});

export const undo = item => ({
  type: WishlistActionTypes.UNDO,
  payload: item
});

export const updateWishlist = () => ({
  type: WishlistActionTypes.UPDATE_WISHLIST
});

export const toggleItemInWishlist = item => ({
  type: WishlistActionTypes.TOGGLE_ITEM_IN_WISHLIST,
  payload: item
});

export const toggleWishlistItem = item => {
  return (dispatch, getState) => {
    const wishlist = getState().wishlist.wishlistItems;

    console.log('wishlist', wishlist);
    console.log('length', wishlist.length);
    // const test = wishlist.find(wishlistItem => wishlistItem.id === item.id)
      // console.log('test', test);
    if (wishlist.length > 0) {
      
      if (wishlist.find(wishlistItem => wishlistItem.id === item.id)) {
        dispatch(queueForRemoval(item));
      } else {
        dispatch(queueForAdd(item))
      }
    } else {
      dispatch(queueForAdd(item));
    };
  };
};