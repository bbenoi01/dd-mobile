import React from 'react';
import { useSelector } from 'react-redux';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import LottieView from 'lottie-react-native';

const AccountScreen = ({ navigation }) => {
	const theme = useSelector((state) => state.base);

	const styles = StyleSheet.create({
		canvas: {
			flex: 1,
			backgroundColor: '#ddd',
			justifyContent: 'center',
			alignItems: 'center',
		},
		cover: {
			position: 'absolute',
			width: '100%',
			height: '100%',
			backgroundColor: 'rgba(255, 255, 255, 0.3)',
		},
		wrapper: {
			width: '100%',
			height: '40%',
			position: 'absolute',
			top: 30,
			padding: theme.space[2],
		},
		title: {
			fontSize: 30,
			alignSelf: 'center',
		},
		container: {
			backgroundColor: 'rgba(255, 255, 255, 0.7)',
			padding: theme.space[4],
			marginTop: theme.space[2],
		},
		btn: {
			marginVertical: 5,
		},
		btnContent: {
			padding: theme.space[2],
		},
	});

	return (
		<ImageBackground
			style={styles.canvas}
			source={require('../../../../assets/home_bg.jpg')}
		>
			<View style={styles.cover} />
			<View style={styles.wrapper}>
				<LottieView
					key='animation'
					autoPlay
					loop
					resizeMode='cover'
					source={require('../../../../assets/watermelon.json')}
				/>
			</View>
			<Text style={styles.title}>Delicious Deliveries</Text>
			<View style={styles.container}>
				<Button
					icon='lock-open-outline'
					mode='contained'
					color={theme.color.brand.primary}
					style={styles.btn}
					contentStyle={styles.btnContent}
					onPress={() => navigation.navigate('Login')}
				>
					Login
				</Button>
				<Button
					icon='lock-open-outline'
					mode='contained'
					color={theme.color.brand.primary}
					style={styles.btn}
					contentStyle={styles.btnContent}
					onPress={() => navigation.navigate('Register')}
				>
					Register
				</Button>
			</View>
		</ImageBackground>
	);
};

export default AccountScreen;
