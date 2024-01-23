import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import SaveIcon from '../../assets/icons/save.svg';
import InsightIcon from '../../assets/icons/analytics.svg';

const navigationIcon = ({ title }) => {
	return (
		<View style={styles.container}>
			{title.toLowerCase() === 'records' ? (
				<SaveIcon />
			) : title.toLowerCase() === 'insight' ? (
				<InsightIcon />
			) : (
				''
			)}

			<Text style={styles.text}>{title}</Text>
		</View>
	);
};

export default navigationIcon;

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 5,
	},
	text: {
		color: '#fff',
	},
});
