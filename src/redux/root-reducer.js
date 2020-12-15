import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import collectionsReducer from './collections/collections.reducer';
import wishlistReducer from './wishlist/wishlist.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'wishlist']
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  collections: collectionsReducer,
  wishlist: wishlistReducer,
});

export default persistReducer(persistConfig, rootReducer);