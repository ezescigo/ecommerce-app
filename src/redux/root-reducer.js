import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import collectionsReducer from './collections/collections.reducer';
import wishlistReducer from './wishlist/wishlist.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  collections: collectionsReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;