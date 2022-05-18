import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { addFavorite, removeFavorite } from '../redux/slices/favoritesSlice';

const Favorite = ({ restaurant }) => {
	const favs = useSelector((state) => state.favorites.favorites);
	const isFav = favs?.find((r) => r.placeId === restaurant.placeId);
	const dispatch = useDispatch();

	return (
		<TouchableOpacity
			style={styles.heart}
			onPress={
				isFav
					? () => dispatch(removeFavorite(restaurant))
					: () => dispatch(addFavorite(restaurant))
			}
		>
			<AntDesign
				name={isFav ? 'heart' : 'hearto'}
				size={24}
				color={isFav ? 'red' : 'white'}
			/>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	heart: {
		position: 'absolute',
		top: 25,
		right: 25,
		zIndex: 9,
	},
});

export default Favorite;
