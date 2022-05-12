import React from 'react';
import { View, Image, Text, Platform, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const isAndroid = Platform.OS === 'android';

const CompactRestaurantInfo = ({ restaurant }) => {
	return (
		<View style={styles.canvas}>
			{isAndroid ? (
				<WebView style={styles.image} source={{ uri: restaurant.photos[0] }} />
			) : (
				<Image style={styles.image} source={{ uri: restaurant.photos[0] }} />
			)}
			<Text>{restaurant.name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	canvas: {
		padding: 10,
		maxWidth: 120,
		alignItems: 'center',
	},
	image: {
		borderRadius: 10,
		width: 120,
		height: 100,
	},
});

export default CompactRestaurantInfo;
