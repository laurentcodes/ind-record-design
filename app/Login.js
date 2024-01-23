import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import AppleLogo from '../assets/icons/apple.svg';
import GoogleLogo from '../assets/icons/google.svg';

const Login = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={[styles.authButton, styles.shadowProp]}
				onPress={() => navigation.navigate('Record')}
			>
				<GoogleLogo width={30} height={30} />
				<Text style={styles.authButtonText}>Google Auth</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={[styles.authButton, styles.shadowProp]}
				onPress={() => navigation.navigate('Record')}
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
