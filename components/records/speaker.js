import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Speaker = () => {
	return (
		<View style={styles.speakerBox}>
			<Text style={[styles.text, styles.speakerBoxText]}>Speaker 1</Text>
			<Text
				style={[
					styles.text,
					styles.speakerBoxText,
					true && styles.speakerBoxTextActive,
				]}
			>
				Speaker 1
			</Text>
			<Text style={[styles.text, styles.speakerBoxText]}>Speaker 1</Text>
			<Text style={[styles.text, styles.speakerBoxText]}>Speaker 1</Text>
			<Text style={[styles.text, styles.speakerBoxText]}>Speaker 1</Text>
			<Text style={[styles.text, styles.speakerBoxText]}>...</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	speakerBox: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: '#fff',
		padding: 10,
		width: '100%',
		marginVertical: 10,
	},
	speakerBoxText: {
		fontSize: 12,
	},
	speakerBoxTextActive: {
		fontSize: 12,
		backgroundColor: '#2B69A8',
		padding: 5,
	},
	text: {
		color: '#fff',
		fontSize: 16,
	},
});

export default Speaker;
