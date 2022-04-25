import React from 'react';
import { connect } from 'react-redux';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';

const RestaurantInfo = ({
	sizes,
	colors,
	space,
	fonts,
	fontSizes,
	fontWeights,
	restaurant = {},
}) => {
	const styles = StyleSheet.create({
		card: {
			backgroundColor: 'whitesmoke',
			marginVertical: space[2],
		},
		cover: {
			padding: space[3],
			backgroundColor: 'whitesmoke',
		},
		info: {
			padding: space[3],
		},
		title: {
			fontFamily: fonts.heading,
			fontSize: fontSizes.body,
			color: colors.ui.primary,
		},
		rating: {
			flexDirection: 'row',
			paddingVertical: space[1],
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
			color: colors.ui.error,
			fontFamily: fonts.body,
			fontSize: fontSizes.button,
		},
		icon: {
			width: sizes.md,
			height: sizes.md,
		},
		address: {
			fontFamily: fonts.body,
			fontSize: fontSizes.caption,
		},
	});

	const {
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
				<Card.Cover
					key={name}
					style={styles.cover}
					source={{ uri: photos[0] }}
				/>
				<View style={styles.info}>
					<Text style={styles.title}>{name}</Text>
					<View style={styles.rating}>
						<View style={styles.starContainer}>
							{ratingArray.map((item) => (
								<SvgXml
									xml={star}
									width={sizes.md}
									height={sizes.md}
									key={ratingArray.indexOf(item)}
								/>
							))}
						</View>
						<View style={styles.detailContainer}>
							{isClosedTemporarily && (
								<Text style={styles.closed}>CLOSED TEMPORARILY</Text>
							)}
							{isOpenNow && (
								<SvgXml xml={open} width={sizes.md} height={sizes.md} />
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

function mapStoreToProps(store) {
	return {
		sizes: store.base.sizes,
		fonts: store.base.fonts,
		fontSizes: store.base.fontSizes,
		fontWeights: store.base.fontWeights,
		space: store.base.space,
		colors: store.base.colors,
	};
}

export default connect(mapStoreToProps)(RestaurantInfo);
