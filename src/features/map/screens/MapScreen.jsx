import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { useSelector } from 'react-redux';
import MapSearch from '../components/MapSearch';
import MapCallout from '../components/MapCallout';

const MapScreen = ({ navigation }) => {
	const restaurantData = useSelector((state) => state.restaurant);
	const locationData = useSelector((state) => state.location);

	const [latDelta, setLatDelta] = useState(0);

	useEffect(() => {
		const northeastLat = locationData.viewport.northeast.lat;
		const southwestLat = locationData.viewport.southwest.lat;

		setLatDelta(northeastLat - southwestLat);
	}, [locationData.location, locationData.viewport]);

	return (
		<>
			<MapSearch />
			<MapView
				style={styles.map}
				region={{
					latitude: parseFloat(locationData.location.split(',')[0]),
					longitude: parseFloat(locationData.location.split(',')[1]),
					latitudeDelta: latDelta,
					longitudeDelta: 0.02,
				}}
			>
				{restaurantData.restaurants.map((restaurant) => {
					return (
						<MapView.Marker
							key={restaurant.name}
							title={restaurant.name}
							coordinate={{
								latitude: restaurant.geometry.location.lat,
								longitude: restaurant.geometry.location.lng,
							}}
						>
							<MapView.Callout
								onPress={() =>
									navigation.navigate('RestaurantDetail', { restaurant })
								}
							>
								<MapCallout restaurant={restaurant} />
							</MapView.Callout>
						</MapView.Marker>
					);
				})}
			</MapView>
		</>
	);
};

const styles = StyleSheet.create({
	map: {
		height: '100%',
		width: '100%',
	},
});
export default MapScreen;
