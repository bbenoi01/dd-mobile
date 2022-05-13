import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';
import CompactRestaurantInfo from '../features/restaurants/components/CompactRestaurantInfo';

const FavBar = ({ onNav }) => {
	const favs = useSelector((state) => state.favorites.favorites);

	return (
		<View style={styles.wrapper}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{favs.map((fav) => {
					const key = fav.name.split(' ').join('');
					return (
						<TouchableOpacity
							key={key}
							onPress={() => onNav('RestaurantDetail', { restaurant: fav })}
							style={styles.fav}
						>
							<CompactRestaurantInfo restaurant={fav} />
						</TouchableOpacity>
					);
				})}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		padding: 10,
	},
	fav: {
		marginRight: 10,
	},
});

export default FavBar;
