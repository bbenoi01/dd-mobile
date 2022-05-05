import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import starIcon from '../../../../assets/star';
import open from '../../../../assets/open';

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
			flex: 6,
		},
		detailContainer: {
			flex: 6,
			flexDirection: 'row',
			justifyContent: 'flex-end',
			alignItems: 'center',
		},
		closed: {
			color: theme.color.ui.error,
			fontFamily: theme.font.fonts.body,
			fontSize: theme.font.fontSizes.button,
		},
		open: {
			marginHorizontal: theme.space[1],
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
									style={styles.open}
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
		</View>
	);
};

export default RestaurantInfo;
