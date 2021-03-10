import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import categoriesReducer from './categories/categories.reducer';
import collectionsReducer from './collections/collections.reducer';
import wishlistReducer from './wishlist/wishlist.reducer';
import appReducer from './app/app.reducer';

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['cart', 'wishlist']
}

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  collections: collectionsReducer,
  wishlist: wishlistReducer,
});

export default persistReducer(persistConfig, rootReducer);