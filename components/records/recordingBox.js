import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

import recordingImage from '../../assets/images/voice-record.png';

const RecordingBox = () => {
	return (
		<View style={[styles.recordingBox, styles.shadowProp]}>
			<Image source={recordingImage} />
			<Text style={[styles.text, { textAlign: 'center', marginVertical: 20 }]}>
				Summary for IndRecord will be here as simple text which you can
				copy/paste
			</Text>

			<View style={styles.recordingBoxButtons}>
				<Pressable style={styles.button}>
					<Text style={[styles.text, { textAlign: 'center' }]}>Full Text</Text>
				</Pressable>

				<Pressable style={styles.button}>
					<Text style={[styles.text, { textAlign: 'center' }]}>
						Full Summary
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	recordingBox: {
		display: 'flex',
		alignItems: 'center',
		backgroundColor: '#010719',
		borderRadius: 50,
		borderWidth: 2,
		paddingVertical: 10,
		paddingHorizontal: 15,
		width: '100%',
		marginTop: 20,
	},
	recordingBoxButtons: {
		display: 'flex',
		flexDirection: 'row',
		gap: 15,
	},
	button: {
		borderRadius: 5,
		borderWidth: 2,
		borderColor: '#fff',
		paddingVertical: 5,
		paddingHorizontal: 10,
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
});

export default RecordingBox;
