import WishlistActionTypes from './wishlist.types';
import { updateWishlist } from './wishlist.utils';

const INITIAL_STATE = {
  wishlistItems: [],
  toAdd: [],
  toRemove: []
};

const wishlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WishlistActionTypes.QUEUE_FOR_REMOVAL:
      return {
        ...state,
        toRemove: [...state.toRemove, action.payload]
      };
    case WishlistActionTypes.QUEUE_FOR_ADD:
      return {
        ...state,
        toAdd: [...state.toAdd, action.payload]
      };
    case WishlistActionTypes.UNDO:
      return {
        ...state,
        toAdd: state.toAdd.filter(item => item.id !== action.payload.id),
        toRemove: state.toRemove.filter(item => item.id !== action.payload.id),
      };
    case WishlistActionTypes.UPDATE_WISHLIST:
      return {
        ...state,
        wishlistItems: updateWishlist(state.wishlistItems, state.toRemove, state.toAdd),
        toRemove: [],
        toAdd: []
      }
    case WishlistActionTypes.CLEAR_WISHLIST:
      return {
        ...state,
        wishlistItems: []
      };
    default:
      return state;
  }
};

export default wishlistReducer;