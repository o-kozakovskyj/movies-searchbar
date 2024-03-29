import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import favoritesReducer from '../src/components/MoviePage/MovieSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  favorites: favoritesReducer,
});
const persistConfig = {
  key: 'favoriteList',
  storage,
}
const persistedReducer = persistReducer(persistConfig, reducers)
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});
export const persistor = persistStore(store)
export type AppDispatch = typeof store.getState;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;