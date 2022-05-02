import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import camelize from 'camelize';
import { mocks, mockImages } from '../../services/restaurants/mock';

export const getRestaurants = createAsyncThunk(
	'restaurants/get',
	async (location) => {
		try {
			const res = await mocks[location];
			const mappedRes = res.results.map((item) => {
				item.photos = item.photos.map((p) => {
					return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
				});
				return {
					...item,
					isOpenNow: item.opening_hours && item.opening_hours.open_now,
					isClosedTemporarily: item.business_status === 'CLOSED_TEMPORARILY',
				};
			});

			return camelize(mappedRes);
		} catch (err) {
			console.log('Get Error', err);
		}
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
			console.log;
		},
	},
});

export default restaurantSlice.reducer;
