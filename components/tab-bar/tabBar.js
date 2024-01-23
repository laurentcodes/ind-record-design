import { View, Pressable, StyleSheet, Text } from 'react-native';

import MicIcon from '../../assets/icons/mic.svg';

import NavigationIcon from './navigationIcon';

const TabBar = ({ state, descriptors, navigation }) => {
	return (
		<View style={styles.mainContainer}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];

				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
							? options.title
							: route.name;

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};

				if (route.name == 'PlaceholderScreen') {
					return (
						<Pressable onPress={() => console.log('press xs')}>
							<View
								key={index}
								style={[styles.mainItemContainer, styles.recordingButton]}
							>
								<MicIcon width={100} height={100} />
							</View>
						</Pressable>
					);
				}

				return (
					<View
						key={index}
						style={[
							styles.mainItemContainer,
							{ borderRightWidth: label == 'notes' ? 3 : 0 },
						]}
					>
						<Pressable onPress={onPress}>
							<View>
								<NavigationIcon title={label} />
							</View>
						</Pressable>
					</View>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#182028',
		width: '100%',
		height: 70,
	},
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

export default TabBar;
