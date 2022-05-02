import React, { useEffect } from 'react';
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Platform,
} from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../../../components/SearchBar';
import RestaurantInfo from '../components/RestaurantInfo';

import { getRestaurants } from '../../../redux/slices/restaurantSlice';

const RestaurantScreen = () => {
	const theme = useSelector((state) => state.base);
	const restaurantData = useSelector((state) => state.restaurant);
	const dispatch = useDispatch();

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			paddingTop: Platform.OS === 'android' ? theme.size.xl : null,
		},
		list: {
			padding: theme.space[3],
		},
	});

	useEffect(() => {
		dispatch(getRestaurants('51.219448,4.402464'));
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			{restaurantData.loading && (
				<View style={{ position: 'absolute', top: '50%', left: '50%' }}>
					<ActivityIndicator
						style={{ marginLeft: -100, marginTop: -100 }}
						size={200}
						animating={true}
						color={Colors.blue300}
					/>
				</View>
			)}
			<SearchBar />
			<FlatList
				data={restaurantData.restaurants}
				renderItem={({ item }) => <RestaurantInfo restaurant={item} />}
				keyExtractor={(item) => item.placeId}
				contentContainerStyle={styles.list}
			/>
		</SafeAreaView>
	);
};

export default RestaurantScreen;
