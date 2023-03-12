import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../../redux/store';
import type Moovie from '../../entitles/Moovie';

export type FavoriteListState = {
  favorites: Moovie[];
};

const initialState: FavoriteListState = {
  favorites: []
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Moovie>) => {
      if (state.favorites.find((moovie) => moovie.imdbID === action.payload.imdbID)) {
        return;
      }
      state.favorites.push({ ...action.payload });
    },
    deleteFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter((moovie) => moovie.imdbID !== action.payload);
    },
  },
});
export const { addToFavorites, deleteFromFavorites } = favoritesSlice.actions;
export const selectFavorites= (state: RootState) => state.favorites.favorites;
export default favoritesSlice.reducer;