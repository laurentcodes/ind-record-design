import { AppRegistry } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './app/Login';
import RecordScreen from './app/Record';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import TabBar from './components/tab-bar/tabBar';

import { app } from './config/firebase';

const TabStack = ({ route }) => (
	<Tab.Navigator
		initialRouteName='Record'
		tabBar={(props) => <TabBar {...props} />}
		screenOptions={{
			headerShown: false,
		}}
	>
		<Tab.Screen
			name='Record'
			component={RecordScreen}
			initialParams={route.params}
		/>
		<Tab.Screen name='PlaceholderScreen' component={RecordScreen} />
		<Tab.Screen name='Insight' component={RecordScreen} />
	</Tab.Navigator>
);

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Login'
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name='Login' component={LoginScreen} />
				<Stack.Screen name='Records' component={TabStack} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

AppRegistry.registerComponent('IndRecord', () => App);
