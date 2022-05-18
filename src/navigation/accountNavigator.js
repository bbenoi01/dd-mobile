import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../features/account/screens/AccountScreen';
import LoginScreen from '../features/account/screens/LoginScreen';
import RegisterScreen from '../features/account/screens/RegisterScreen';

const AuthStack = createStackNavigator();
export const AuthNavigator = () => {
	return (
		<AuthStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<AuthStack.Screen name='Main' component={AccountScreen} />
			<AuthStack.Screen name='Login' component={LoginScreen} />
			<AuthStack.Screen name='Register' component={RegisterScreen} />
		</AuthStack.Navigator>
	);
};
