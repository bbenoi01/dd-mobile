import React from 'react';
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Platform,
} from 'react-native';
import { useSelector } from 'react-redux';
import SearchBar from '../../../components/SearchBar';
import RestaurantInfo from '../components/RestaurantInfo';

const RestaurantScreen = () => {
	const theme = useSelector((state) => state.base);

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			paddingTop: Platform.OS === 'android' ? theme.size.xl : null,
		},
		list: {
			padding: theme.space[3],
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

export default RestaurantScreen;
