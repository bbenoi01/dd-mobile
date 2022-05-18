import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import authReducer from './slices/authSlice';
import baseStyleReducer from './slices/baseStyleSlice';
import restaurantReducer from './slices/restaurantSlice';
import locationReducer from './slices/locationSlice';
import favoritesReducer from './slices/favoritesSlice';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['user', 'token', 'favorites'],
};

export const store = configureStore({
	reducer: {
		auth: persistReducer(persistConfig, authReducer),
		base: baseStyleReducer,
		restaurant: restaurantReducer,
		location: locationReducer,
		favorites: persistReducer(persistConfig, favoritesReducer),
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
