import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import Insur3MeApi from '../../api/insur3MeApi';

export const registerUser = createAsyncThunk(
	'auth/register',
	async (userData) => {
		const res = await Insur3MeApi.post('/api/auth/register', userData);
		return res.data;
	}
);

export const loginUser = createAsyncThunk('auth/login', async (userData) => {
	const res = await Insur3MeApi.post('/api/auth/login', userData);
	return res.data;
});

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		loading: false,
		user: null,
		token: null,
		errors: null,
	},
	reducers: {
		logout: (state) => {
			state.loading = false;
			state.user = null;
			state.token = null;
			state.errors = null;
		},
	},
	extraReducers: {
		[registerUser.pending]: (state) => {
			state.loading = true;
			state.errors = null;
		},
		[registerUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.user = action.payload.userData;
			state.token = action.payload.token;
		},
		[registerUser.rejected]: (state) => {
			state.loading = false;
			state.errors = 'Something Went Wrong, Please Try Again';
		},
		[loginUser.pending]: (state) => {
			state.loading = true;
			state.errors = null;
		},
		[loginUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.user = action.payload.userData;
			state.token = action.payload.token;
		},
		[loginUser.rejected]: (state, action) => {
			state.loading = false;
			state.errors = 'Something Went Wrong, Please Try Again';
		},
		logout: (builder) => {
			builder.addCase(PURGE, (state) => {
				customEntityAdapter.removeAll(state);
			});
		},
	},
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
