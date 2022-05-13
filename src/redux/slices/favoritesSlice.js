import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: {
		loading: false,
		favorites: [],
		error: false,
	},
	reducers: {
		addFavorite: (state, action) => {
			state.favorites = [...state.favorites, action.payload];
		},
		removeFavorite: (state, action) => {
			const updatedFavs = state.favorites.filter(
				(x) => x.placeId !== action.payload.placeId
			);
			state.favorites = updatedFavs;
		},
	},
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
