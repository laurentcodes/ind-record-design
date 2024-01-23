import { StyleSheet, Text, View } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

const ProgressView = () => {
	return (
		<View style={styles.progressView}>
			<View style={styles.progressList}>
				<View>
					<Text
						style={[
							styles.text,
							{ fontSize: 12, marginBottom: 5, marginLeft: 10 },
						]}
					>
						Trust
					</Text>
					<ProgressBar
						progress={0.7}
						color='#fff'
						borderColor='skyblue'
						height={15}
						borderRadius={50}
						showsText
					/>
					<Text
						style={[
							styles.text,
							{
								fontSize: 12,
								position: 'absolute',
								top: 20,
								left: 50,
								color: '#000',
							},
						]}
					>
						7
					</Text>
				</View>

				<View>
					<Text
						style={[
							styles.text,
							{ fontSize: 12, marginBottom: 5, marginLeft: 10 },
						]}
					>
						Empathy
					</Text>
					<ProgressBar
						progress={0.5}
						color='#fff'
						borderColor='skyblue'
						height={15}
						borderRadius={50}
					/>
					<Text
						style={[
							styles.text,
							{
								fontSize: 12,
								position: 'absolute',
								top: 20,
								left: 50,
								color: '#000',
							},
						]}
					>
						5
					</Text>
				</View>

				<View>
					<Text
						style={[
							styles.text,
							{ fontSize: 12, marginBottom: 5, marginLeft: 10 },
						]}
					>
						Trust
					</Text>
					<ProgressBar
						progress={0.7}
						color='#fff'
						borderColor='skyblue'
						height={15}
						borderRadius={50}
					/>
					<Text
						style={[
							styles.text,
							{
								fontSize: 12,
								position: 'absolute',
								top: 20,
								left: 50,
								color: '#000',
							},
						]}
					>
						7
					</Text>
				</View>

				<View>
					<Text
						style={[
							styles.text,
							{ fontSize: 12, marginBottom: 5, marginLeft: 10 },
						]}
					>
						Empathy
					</Text>
					<ProgressBar
						progress={0.5}
						color='#fff'
						borderColor='skyblue'
						height={15}
						borderRadius={50}
					/>
					<Text
						style={[
							styles.text,
							{
								fontSize: 12,
								position: 'absolute',
								top: 20,
								left: 50,
								color: '#000',
							},
						]}
					>
						5
					</Text>
				</View>
			</View>

			<View style={styles.progressList}>
				<View>
					<Text
						style={[
							styles.text,
							{ fontSize: 12, marginBottom: 5, marginLeft: 10 },
						]}
					>
						Sentiment
					</Text>
					<ProgressBar
						progress={0.2}
						color='#fff'
						borderColor='skyblue'
						height={15}
						borderRadius={50}
					/>
					<Text
						style={[
							styles.text,
							{
								fontSize: 12,
								position: 'absolute',
								top: 20,
								left: 15,
								color: '#000',
							},
						]}
					>
						2
					</Text>
				</View>

				<View>
					<Text
						style={[
							styles.text,
							{ fontSize: 12, marginBottom: 5, marginLeft: 10 },
						]}
					>
						Charisma
					</Text>
					<ProgressBar
						progress={0.7}
						color='#fff'
						borderColor='skyblue'
						height={15}
						borderRadius={50}
					/>
					<Text
						style={[
							styles.text,
							{
								fontSize: 12,
								position: 'absolute',
								top: 20,
								left: 50,
								color: '#000',
							},
						]}
					>
						7
					</Text>
				</View>

				<View>
					<Text
						style={[
							styles.text,
							{ fontSize: 12, marginBottom: 5, marginLeft: 10 },
						]}
					>
						Sentiment
					</Text>
					<ProgressBar
						progress={0.2}
						color='#fff'
						borderColor='skyblue'
						height={15}
						borderRadius={50}
					/>
					<Text
						style={[
							styles.text,
							{
								fontSize: 12,
								position: 'absolute',
								top: 20,
								left: 15,
								color: '#000',
							},
						]}
					>
						2
					</Text>
				</View>

				<View>
					<Text
						style={[
							styles.text,
							{ fontSize: 12, marginBottom: 5, marginLeft: 10 },
						]}
					>
						Charisma
					</Text>
					<ProgressBar
						progress={0.7}
						color='#fff'
						borderColor='skyblue'
						height={15}
						borderRadius={50}
					/>
					<Text
						style={[
							styles.text,
							{
								fontSize: 12,
								position: 'absolute',
								top: 20,
								left: 50,
								color: '#000',
							},
						]}
					>
						7
					</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	progressView: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		marginVertical: 15,
	},
	progressList: {
		display: 'flex',
		gap: 5,
	},
	text: {
		color: '#fff',
		fontSize: 16,
	},
});

export default ProgressView;
