import { StyleSheet, Text, View } from 'react-native';

const Description = () => {
	return (
		<View style={styles.textBorderContainer}>
			<View>
				<Text
					style={[
						styles.text,
						{ color: '#828282', marginBottom: 10, marginLeft: 15 },
					]}
				>
					Favorite topics and interests
				</Text>
				<View style={[styles.textBorder, styles.shadowProp]}>
					<Text style={[styles.text, { fontSize: 14 }]}>
						Sport. Speaker mentioned he likes a golf...
					</Text>
				</View>
			</View>

			<View>
				<Text
					style={[
						styles.text,
						{ color: '#828282', marginBottom: 10, marginLeft: 15 },
					]}
				>
					Contradictions in statements
				</Text>
				<View style={[styles.textBorder, styles.shadowProp]}>
					<Text style={[styles.text, { fontSize: 14 }]}>
						First, speaker mentioned he keeps a healthy lifestyle, but he likes
						alcohol as well...
					</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	textBorderContainer: {
		display: 'flex',
		gap: 20,
		width: '100%',
	},
	textBorder: {
		backgroundColor: '#010719',
		borderRadius: 50,
		borderWidth: 2,
		paddingHorizontal: 15,
		paddingVertical: 10,
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

export default Description;
