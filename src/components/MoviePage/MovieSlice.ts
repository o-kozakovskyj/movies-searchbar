import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../../redux/store';
import type Movie from '../../entitles/Movie';

export type FavoriteListState = {
  favorites: Movie[];
};

const initialState: FavoriteListState = {
  favorites: []
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Movie>) => {
      if (state.favorites.find((movie) => movie.imdbID === action.payload.imdbID)) {
        return;
      }
      state.favorites.push({ ...action.payload });
    },
    deleteFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter((movie) => movie.imdbID !== action.payload);
    },
  },
});
export const { addToFavorites, deleteFromFavorites } = favoritesSlice.actions;
export const selectFavorites = (state: RootState) => state.favorites.favorites;
export default favoritesSlice.reducer;