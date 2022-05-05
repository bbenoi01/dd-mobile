import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import {
	setSearchTerm,
	getLocation,
} from '../../../redux/slices/locationSlice';

const MapSearch = () => {
	const dispatch = useDispatch();
	const theme = useSelector((state) => state.base);
	const searchTerm = useSelector((state) => state.location.searchTerm);

	const styles = StyleSheet.create({
		container: {
			width: '100%',
			padding: theme.size.md,
			position: 'absolute',
			top: 40,
			zIndex: 999,
		},
	});

	return (
		<View style={styles.container}>
			<Searchbar
				placeholder='Search'
				value={searchTerm}
				onChangeText={(text) => dispatch(setSearchTerm(text))}
				onSubmitEditing={() => dispatch(getLocation(searchTerm.toLowerCase()))}
			/>
		</View>
	);
};

export default MapSearch;
