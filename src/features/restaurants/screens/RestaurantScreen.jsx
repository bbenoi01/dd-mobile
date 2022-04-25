import React from 'react';
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Platform,
} from 'react-native';
import { connect } from 'react-redux';
import SearchBar from '../../../components/SearchBar';
import RestaurantInfo from '../components/RestaurantInfo';

const RestaurantScreen = ({ sizes, space }) => {
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			paddingTop: Platform.OS === 'android' ? sizes.xl : null,
		},
		list: {
			padding: space[3],
		},
	});

	return (
		<SafeAreaView style={styles.container}>
			<SearchBar />
			<FlatList
				data={[
					{ name: 1 },
					{ name: 2 },
					{ name: 3 },
					{ name: 4 },
					{ name: 5 },
					{ name: 6 },
				]}
				renderItem={() => <RestaurantInfo />}
				keyExtractor={(item) => item.name}
				contentContainerStyle={styles.list}
			/>
		</SafeAreaView>
	);
};

function mapStoreToProps(store) {
	return {
		sizes: store.base.sizes,
		space: store.base.space,
	};
}

export default connect(mapStoreToProps)(RestaurantScreen);
