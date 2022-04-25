import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { connect } from 'react-redux';

const SearchBar = ({ sizes }) => {
	const styles = StyleSheet.create({
		container: {
			padding: sizes.md,
		},
	});

	return (
		<View style={styles.container}>
			<Searchbar placeholder='Search' />
		</View>
	);
};

function mapStoreToProps(store) {
	return {
		sizes: store.base.sizes,
	};
}

export default connect(mapStoreToProps)(SearchBar);
