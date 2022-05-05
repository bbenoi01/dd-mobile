import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import camelize from 'camelize';
import { locations } from '../../services/location/mock/locationMock';

export const getLocation = createAsyncThunk(
	'location/get',
	async (searchTerm) => {
		if (!searchTerm.length) {
			return;
		}
		try {
			const res = await locations[searchTerm];
			const formattedRes = camelize(res);
			console.log(formattedRes);
			const { geometry } = formattedRes.results[0];
			const { lat, lng } = geometry.location;
			const locationString = `${lat},${lng}`;
			const { viewport } = geometry;

			return { locationString, viewport };
		} catch (err) {
			console.log(err);
		}
	}
);

export const locationSlice = createSlice({
	name: 'location',
	initialState: {
		loading: false,
		searchTerm: '',
		location: '51.219448,4.402464',
		viewport: {
			northeast: {
				lat: 51.2145994302915,
				lng: 4.418074130291502,
			},
			southwest: {
				lat: 51.2119014697085,
				lng: 4.415376169708497,
			},
		},
		error: false,
	},
	reducers: {
		setSearchTerm: (state, action) => {
			state.searchTerm = action.payload;
		},
	},
	extraReducers: {
		[getLocation.pending]: (state) => {
			state.loading = true;
			state.error = false;
		},
		[getLocation.fulfilled]: (state, action) => {
			state.loading = false;
			state.location = action.payload.locationString;
			state.viewport = action.payload.viewport;
		},
		[getLocation.rejected]: (state) => {
			state.loading = false;
			state.error = true;
		},
	},
});

export const { setSearchTerm } = locationSlice.actions;

export default locationSlice.reducer;
