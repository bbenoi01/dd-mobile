import { configureStore } from '@reduxjs/toolkit';
import baseStyleReducer from './slices/baseStyleSlice';
import restaurantReducer from './slices/restaurantSlice';

export default configureStore({
	reducer: {
		base: baseStyleReducer,
		restaurant: restaurantReducer,
	},
});
