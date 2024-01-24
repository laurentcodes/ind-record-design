import { useEffect, useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { app } from '../../config/firebase';

import { getStorage, ref, uploadBytes } from 'firebase/storage';

import MicIcon from '../../assets/icons/mic.svg';
import StopIcon from '../../assets/icons/record-stop.svg';

const Recording = ({ index }) => {
	const [recording, setRecording] = useState();
	const [userId, setUserId] = useState(null);
	const [permissionResponse, requestPermission] = Audio.usePermissions();

	useEffect(() => {
		const getUserStorage = async () => {
			const user = await AsyncStorage.getItem('user-id');

			setUserId(user);
		};

		getUserStorage();
	}, []);

	const storage = getStorage(app);

	const uploadFile = async (localFilePath, remoteFilePath) => {
		const storageRef = ref(storage, remoteFilePath);

		// const reference = storage().ref(remoteFilePath);
		// await reference.putFile(localFilePath);

		// 'file' comes from the Blob or File API
		uploadBytes(storageRef, localFilePath).then((snapshot) => {
			console.log('Uploaded a blob or file!');
		});
	};

	console.log(userId);

	async function startRecording() {
		try {
			if (permissionResponse.status !== 'granted') {
				console.log('Requesting permission..');
				await requestPermission();
			}

			await Audio.setAudioModeAsync({
				allowsRecordingIOS: true,
				playsInSilentModeIOS: true,
			});

			console.log('Starting recording..');
			const { recording } = await Audio.Recording.createAsync(
				Audio.RecordingOptionsPresets.HIGH_QUALITY
			);

			setRecording(recording);
			console.log('Recording started');
		} catch (err) {
			console.error('Failed to start recording', err);
		}
	}

	async function stopRecording() {
		console.log('Stopping recording..');
		setRecording(undefined);

		await recording.stopAndUnloadAsync();
		await Audio.setAudioModeAsync({
			allowsRecordingIOS: false,
		});

		const uri = recording.getURI();

		uploadFile(uri, `audio/${userId}/recording-${new Date().toISOString()}`);

		console.log('Recording stopped and stored at', uri);
	}

	return (
		<View
			key={index}
			style={[styles.mainItemContainer, styles.recordingButton]}
		>
			{recording ? (
				<Pressable onPress={stopRecording}>
					<StopIcon width={80} height={80} />
				</Pressable>
			) : (
				<Pressable onPress={startRecording}>
					<MicIcon width={100} height={100} />
				</Pressable>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	mainItemContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 10,
		borderRadius: 1,
		borderColor: '#333B42',
		position: 'relative',
	},
	recordingButton: {
		position: 'absolute',
		left: 0,
		right: 0,
		marginLeft: 'auto',
		marginRight: 'auto',
		bottom: 10,
	},
});

export default Recording;
