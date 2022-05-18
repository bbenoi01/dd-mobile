import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { logout } from '../../../redux/slices/authSlice';

const SettingsScreen = () => {
	const dispatch = useDispatch();

	return (
		<View style={styles.canvas}>
			<Button title='Logout' onPress={() => dispatch(logout())} />
		</View>
	);
};

const styles = StyleSheet.create({
	canvas: {
		flex: 1,
		justifyContent: 'center',
	},
});

export default SettingsScreen;
