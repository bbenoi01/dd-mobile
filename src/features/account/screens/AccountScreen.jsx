import React from 'react';
import { useSelector } from 'react-redux';
import { ImageBackground, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

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
