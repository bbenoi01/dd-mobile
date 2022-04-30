import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { mocks } from '../../services/restaurants/mock';
import axios from 'axios';

export const getRestaurants = createAsyncThunk(
	'restaurants/get',
	async (location) => {
		const res = await axios.get(mocks[location]);
		return res.data;
	}
);

export const restaurantSlice = createSlice({
	name: 'restaurant',
	initialState: {
		loading: false,
		restaurants: null,
		error: false,
	},
	reducers: {},
	extraReducers: {
		[getRestaurants.pending]: (state) => {
			state.loading = true;
			state.error = false;
		},
		[getRestaurants.fulfilled]: (state, action) => {
			state.loading = false;
			state.restaurants = action.payload;
		},
		[getRestaurants.rejected]: (state) => {
			state.loading = false;
			state.error = true;
		},
	},
});

export default restaurantSlice.reducer;
