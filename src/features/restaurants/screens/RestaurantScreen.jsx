import React, { useEffect, useState } from 'react';
import {
	SafeAreaView,
	View,
	TouchableOpacity,
	FlatList,
	StyleSheet,
	Platform,
} from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../../../components/SearchBar';
import FavBar from '../../../components/FavBar';
import RestaurantInfo from '../components/RestaurantInfo';

import { getRestaurants } from '../../../redux/slices/restaurantSlice';

const RestaurantScreen = ({ navigation }) => {
	const theme = useSelector((state) => state.base);
	const restaurantData = useSelector((state) => state.restaurant);
	const locationData = useSelector((state) => state.location);
	const [isToggled, setIsToggled] = useState(false);
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
		dispatch(getRestaurants(locationData.location));
	}, [locationData.location]);

	return (
		<SafeAreaView style={styles.container}>
			{restaurantData.loading || locationData.loading ? (
				<View style={{ position: 'absolute', top: '50%', left: '50%' }}>
					<ActivityIndicator
						style={{ marginLeft: -50, marginTop: -50 }}
						size={100}
						animating={true}
						color={Colors.blue300}
					/>
				</View>
			) : null}
			<SearchBar
				isFavToggled={isToggled}
				onFavToggle={() => setIsToggled(!isToggled)}
			/>
			{isToggled && <FavBar onNav={navigation.navigate} />}
			<FlatList
				data={restaurantData.restaurants}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() =>
							navigation.navigate('RestaurantDetail', { restaurant: item })
						}
					>
						<RestaurantInfo navigation={navigation} restaurant={item} />
					</TouchableOpacity>
				)}
				keyExtractor={(item) => item.placeId}
				contentContainerStyle={styles.list}
			/>
		</SafeAreaView>
	);
};

export default RestaurantScreen;
