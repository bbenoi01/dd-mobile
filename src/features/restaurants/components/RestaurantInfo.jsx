import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import starIcon from '../../../../assets/star';
import open from '../../../../assets/open';

import { getRestaurants } from '../../../redux/slices/restaurantSlice';

const RestaurantInfo = ({ restaurant }) => {
	const theme = useSelector((state) => state.base);

	const styles = StyleSheet.create({
		card: {
			backgroundColor: 'whitesmoke',
			marginVertical: theme.space[2],
		},
		cover: {
			padding: theme.space[3],
			backgroundColor: 'whitesmoke',
		},
		info: {
			padding: theme.space[3],
		},
		title: {
			fontFamily: theme.font.fonts.heading,
			fontSize: theme.font.fontSizes.body,
			color: theme.color.ui.primary,
		},
		rating: {
			flexDirection: 'row',
			paddingVertical: theme.space[1],
			justifyContent: 'space-between',
			alignItems: 'center',
		},
		starContainer: {
			flexDirection: 'row',
		},
		detailContainer: {
			width: '50%',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
		},
		closed: {
			color: theme.color.ui.error,
			fontFamily: theme.font.fonts.body,
			fontSize: theme.font.fontSizes.button,
		},
		icon: {
			width: theme.size.md,
			height: theme.size.md,
		},
		address: {
			fontFamily: theme.font.fonts.body,
			fontSize: theme.font.fontSizes.caption,
		},
	});

	const dispatch = useDispatch();

	function getRandomInt(max) {
		return Math.floor(Math.random() * max + 1);
	}

	const renderRating = () => {
		let content = [];

		for (let i = 0; i < parseInt(restaurant.rating); i++) {
			const star = starIcon;
			content.push(
				<SvgXml
					xml={star}
					width={theme.size.md}
					height={theme.size.md}
					key={getRandomInt(20000)}
				/>
			);
		}
		return content;
	};

	return (
		<View>
			<TouchableOpacity
				onPress={() => dispatch(getRestaurants('51.219448,4.402464'))}
			>
				<Card elevation={5} style={styles.card}>
					<Card.Cover
						style={styles.cover}
						source={{ uri: restaurant.photos[0] }}
					/>
					<View style={styles.info}>
						<Text style={styles.title}>{restaurant.name}</Text>
						<View style={styles.rating}>
							<View style={styles.starContainer}>
								{renderRating(restaurant.rating)}
							</View>
							<View style={styles.detailContainer}>
								{restaurant.isClosedTemporarily && (
									<Text style={styles.closed}>CLOSED TEMPORARILY</Text>
								)}
								{restaurant.isOpenNow && (
									<SvgXml
										xml={open}
										width={theme.size.md}
										height={theme.size.md}
									/>
								)}
								<Image style={styles.icon} source={{ uri: restaurant.icon }} />
							</View>
						</View>
						<Text style={styles.address}>{restaurant.address}</Text>
					</View>
				</Card>
			</TouchableOpacity>
		</View>
	);
};

export default RestaurantInfo;
