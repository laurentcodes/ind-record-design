import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import SettingsIcon from '../assets/icons/setting.svg';
import personalityImage from '../assets/images/personality.png';

import RecordingBox from '../components/records/recordingBox';
import Speaker from '../components/records/speaker';
import ProgressView from '../components/records/progressView';
import Description from '../components/records/description';

const Record = () => {
	return (
		<LinearGradient
			colors={['#010719', 'skyblue', '#010719']}
			locations={[0.1, 0.4, 0.6]}
			style={styles.background}
		>
			<SafeAreaView style={styles.safeArea}>
				<ScrollView contentContainerStyle={styles.container}>
					<View style={styles.appBar}>
						<SettingsIcon width={25} height={25} />
						<Text style={styles.text}>Hi, Michael 👋</Text>
						<Text style={styles.text}></Text>
					</View>

					<RecordingBox />

					<Speaker />

					<View style={styles.personalityBox}>
						<Image source={personalityImage} />

						<View style={styles.personalityBoxContent}>
							<Text style={[styles.text, { fontSize: 14 }]}>
								Personality Score
							</Text>
							<Text style={[styles.text, { fontSize: 20, fontWeight: 'bold' }]}>
								8/10
							</Text>
						</View>
					</View>

					<ProgressView />

					<Description />
				</ScrollView>
			</SafeAreaView>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
	},
	container: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
	},
	appBar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		marginVertical: 10,
	},
	background: {
		flex: 1,
	},
	text: {
		color: '#fff',
		fontSize: 16,
	},
	shadowProp: {
		shadowColor: 'skyblue',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.8,
		shadowRadius: 6,
	},
	personalityBox: {
		display: 'flex',
		flexDirection: 'row',
		borderRadius: 20,
		borderWidth: 2,
		borderColor: '#fff',
		width: '100%',
		padding: 10,
		gap: 15,
		width: '100%',
	},
	personalityBoxContent: {
		display: 'flex',
		gap: 5,
	},
});

export default Record;
