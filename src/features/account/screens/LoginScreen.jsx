import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import { loginUser } from '../../../redux/slices/authSlice';

const LoginScreen = ({ navigation }) => {
	const theme = useSelector((state) => state.base);
	const errors = useSelector((state) => state.auth.errors);
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
		title: {
			fontSize: 30,
			alignSelf: 'center',
		},
		container: {
			width: '85%',

			backgroundColor: 'rgba(255, 255, 255, 0.7)',
			padding: theme.space[4],
			marginTop: theme.space[2],
		},
		input: {
			marginVertical: 10,
		},
		btn: {
			marginVertical: 5,
		},
		backBtn: {
			marginVertical: 15,
		},
		btnContent: {
			padding: theme.space[2],
		},
		error: {
			marginVertical: 10,
			alignSelf: 'center',
		},
		errorText: {
			color: 'red',
			fontFamily: theme.font.fonts.heading,
		},
	});

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	return (
		<ImageBackground
			style={styles.canvas}
			source={require('../../../../assets/home_bg.jpg')}
		>
			<View style={styles.cover} />
			<Text style={styles.title}>Meals To Go</Text>
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					label='E-mail'
					value={email}
					textContentType='emailAddress'
					keyboardType='email-address'
					autoCapitalize='none'
					onChangeText={setEmail}
				/>
				<TextInput
					style={styles.input}
					label='Password'
					value={password}
					textContentType='password'
					secureTextEntry
					autoCapitalize='none'
					onChangeText={setPassword}
				/>
				{errors && (
					<View style={styles.error}>
						<Text style={styles.errorText}>{errors}</Text>
					</View>
				)}
				<Button
					icon='lock-open-outline'
					mode='contained'
					color={theme.color.brand.primary}
					style={styles.btn}
					contentStyle={styles.btnContent}
					onPress={() => dispatch(loginUser({ email, password }))}
				>
					Login
				</Button>
			</View>
			<Button
				mode='contained'
				color={theme.color.brand.primary}
				style={styles.backBtn}
				contentStyle={styles.btnContent}
				onPress={() => navigation.goBack()}
			>
				Back
			</Button>
		</ImageBackground>
	);
};

export default LoginScreen;
