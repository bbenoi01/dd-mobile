import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import { getLocation, setSearchTerm } from '../redux/slices/locationSlice';

const SearchBar = ({ isFavToggled, onFavToggle }) => {
	const dispatch = useDispatch();
	const theme = useSelector((state) => state.base);
	const searchTerm = useSelector((state) => state.location.searchTerm);

	const styles = StyleSheet.create({
		container: {
			padding: theme.size.md,
		},
	});

	return (
		<View style={styles.container}>
			<Searchbar
				icon={isFavToggled ? 'heart' : 'heart-outline'}
				onIconPress={onFavToggle}
				placeholder='Search'
				value={searchTerm}
				onChangeText={(text) => dispatch(setSearchTerm(text))}
				onSubmitEditing={() =>
					dispatch(getLocation(searchTerm.trim().toLowerCase()))
				}
			/>
		</View>
	);
};

export default SearchBar;
