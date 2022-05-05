import React from 'react';
import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack';
import RestaurantScreen from '../features/restaurants/screens/RestaurantScreen';
import RestaurantDetailScreen from '../features/restaurants/screens/RestaurantDetailScreen';

const RestaurantStack = createStackNavigator();
export const RestaurantNavigator = () => {
	return (
		<RestaurantStack.Navigator
			screenOptions={{
				headerShown: false,
				...TransitionPresets.ModalTransition,
			}}
		>
			<RestaurantStack.Screen name='Restaurants' component={RestaurantScreen} />
			<RestaurantStack.Screen
				name='RestaurantDetail'
				component={RestaurantDetailScreen}
			/>
		</RestaurantStack.Navigator>
	);
};
