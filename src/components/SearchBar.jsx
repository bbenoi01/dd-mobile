import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useSelector } from 'react-redux';

const SearchBar = () => {
	const theme = useSelector((state) => state.base);

	const styles = StyleSheet.create({
		container: {
			padding: theme.size.md,
		},
	});

	return (
		<View style={styles.container}>
			<Searchbar placeholder='Search' />
		</View>
	);
};

export default SearchBar;
