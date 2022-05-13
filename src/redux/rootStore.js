import { configureStore } from '@reduxjs/toolkit';
import baseStyleReducer from './slices/baseStyleSlice';
import restaurantReducer from './slices/restaurantSlice';
import locationReducer from './slices/locationSlice';
import favoritesSlice from './slices/favoritesSlice';

export default configureStore({
	reducer: {
		base: baseStyleReducer,
		restaurant: restaurantReducer,
		location: locationReducer,
		favorites: favoritesSlice,
	},
});
