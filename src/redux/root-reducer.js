import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storageSession  from 'redux-persist/lib/storage/session';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import collectionsReducer from './collections/collections.reducer';
import wishlistReducer from './wishlist/wishlist.reducer';

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['cart', 'collections', 'wishlist']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  collections: collectionsReducer,
  wishlist: wishlistReducer,
});

export default persistReducer(persistConfig, rootReducer);