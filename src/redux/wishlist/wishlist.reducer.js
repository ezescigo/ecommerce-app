import WishlistActionTypes from './wishlist.types';
import { toggleItemToWishlist } from './wishlist.utils';
// import { removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  wishlistItems: []
};

const wishlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WishlistActionTypes.TOGGLE_ITEM_TO_WISHLIST:
      return {
        ...state,
        wishlistItems: toggleItemToWishlist(state.wishlistItems, action.payload),
        // guardar en wishlist la id del item
        // cuando se renderea el componente, chequear con la lista de favs si se renderea el heart full or empty.
      };
    case WishlistActionTypes.CLEAR_WISHLIST:
      return {
        ...state,
        wishlistItems: []
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