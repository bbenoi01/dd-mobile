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

const authPersistConfig = {
	key: 'auth',
	storage: AsyncStorage,
	whitelist: ['user', 'token'],
};

const favPersistConfig = {
	key: 'favorites',
	storage: AsyncStorage,
	whitelist: ['favorites'],
};

export const store = configureStore({
	reducer: {
		auth: persistReducer(authPersistConfig, authReducer),
		base: baseStyleReducer,
		restaurant: restaurantReducer,
		location: locationReducer,
		favorites: persistReducer(favPersistConfig, favoritesReducer),
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
