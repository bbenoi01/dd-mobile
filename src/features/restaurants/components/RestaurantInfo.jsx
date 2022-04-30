import React from 'react';
import { useSelector } from 'react-redux';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';

const RestaurantInfo = ({ restaurant = {} }) => {
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

	const {
		id = 1,
		name = 'Some Restaurant',
		icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
		photos = [
			'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
		],
		address = '100 some random street',
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily = true,
	} = restaurant;

	const ratingArray = Array.from(new Array(Math.floor(rating)));

	return (
		<View>
			<Card elevation={5} style={styles.card}>
				<Card.Cover key={id} style={styles.cover} source={{ uri: photos[0] }} />
				<View style={styles.info}>
					<Text style={styles.title}>{name}</Text>
					<View style={styles.rating}>
						<View style={styles.starContainer}>
							{ratingArray.map((item) => (
								<SvgXml
									xml={star}
									width={theme.size.md}
									height={theme.size.md}
									key={ratingArray.indexOf(item + 1)}
								/>
							))}
						</View>
						<View style={styles.detailContainer}>
							{isClosedTemporarily && (
								<Text style={styles.closed}>CLOSED TEMPORARILY</Text>
							)}
							{isOpenNow && (
								<SvgXml
									xml={open}
									width={theme.size.md}
									height={theme.size.md}
								/>
							)}
							<Image style={styles.icon} source={{ uri: icon }} />
						</View>
					</View>
					<Text style={styles.address}>{address}</Text>
				</View>
			</Card>
		</View>
	);
};

export default RestaurantInfo;
