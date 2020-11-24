import WishlistActionTypes from './wishlist.types';
import { addItemToWishlist } from './wishlist.utils';
// import { removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  wishlistItems: []
};

const wishlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WishlistActionTypes.ADD_ITEM_TO_WISHLIST:
      return {
        ...state,
        wishlistItems: addItemToWishlist(state.wishlistItems, action.payload)
      };
    // case WishlistActionTypes.REMOVE_ITEM:
    //   return {
    //     ...state,
    //     cartItems: removeItemFromCart(state.cartItems, action.payload)
    //   };
    // case WishlistActionTypes.CLEAR_ITEM_FROM_CART:
    //   return {
    //     ...state,
    //     cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id )
    //   };
    default:
      return state;
  }
};

export default wishlistReducer;