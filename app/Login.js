import { useState, useEffect } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import AppleLogo from '../assets/icons/apple.svg';
import GoogleLogo from '../assets/icons/google.svg';

const Login = ({ navigation }) => {
	let initialUser;

	const [error, setError] = useState(null);
	const [user, setUser] = useState(initialUser || null);

	useEffect(() => {
		const getInitialUser = async () => {
			initialUser = {
				name: await AsyncStorage.getItem('user-name'),
				token: await AsyncStorage.getItem('user-id'),
			};

			setUser(initialUser);
		};

		getInitialUser();
	}, []);

	useEffect(() => {
		GoogleSignin.configure({
			webClientId:
				'317492924256-vetl49aja2vspscsqsh1eh3u1o3hprh0.apps.googleusercontent.com',
		});
	}, []);

	// const getFromStorage = async () => {
	// 	const userData = await AsyncStorage.getItem('user');

	// 	// setUser(userDataParsed);
	// 	return userData;

	// 	// console.log(userData, 'storage');
	// };

	const signIn = async () => {
		try {
			await GoogleSignin.hasPlayServices();

			const userInfo = await GoogleSignin.signIn();

			await AsyncStorage.setItem('user-name', userInfo.user.name);
			await AsyncStorage.setItem('user-id', userInfo.user.id);

			setUser({
				name: userInfo.user.name,
				token: userInfo.idToken,
			});
		} catch (error) {
			console.log(error);

			setError(error);
		}
	};

	const logout = async () => {
		setUser(null);
		await AsyncStorage.clear();

		GoogleSignin.revokeAccess();
		GoogleSignin.signOut();
	};

	if (user && user?.token !== null) {
		navigation.navigate('Records', { user });
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={[styles.authButton, styles.shadowProp]}
				onPress={signIn}
			>
				<GoogleLogo width={30} height={30} />
				<Text style={styles.authButtonText}>Google Auth</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={[styles.authButton, styles.shadowProp]}
				onPress={logout}
			>
				<AppleLogo width={30} height={30} />
				<Text style={styles.authButtonText}>Apple Auth</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#010719',
		alignItems: 'center',
		justifyContent: 'center',
	},
	authButton: {
		display: 'flex',
		flexDirection: 'row',
		width: 300,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10,
		borderRadius: 50,
		borderWidth: 2,
		paddingVertical: 15,
		marginVertical: 15,
		backgroundColor: '#010719',
	},
	authButtonText: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 18,
	},
	shadowProp: {
		shadowColor: 'skyblue',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.8,
		shadowRadius: 6,
		elevation: 10,
	},
});

export default Login;
