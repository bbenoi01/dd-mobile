import { Provider } from 'react-redux';
import rootStore from './src/rootStore';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import {
	useFonts as useOswald,
	Oswald_400Regular,
	Oswald_700Bold,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import RestaurantScreen from './src/features/restaurants/screens/RestaurantScreen';

function HomeScreen() {
	return <RestaurantScreen />;
}

function MapScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Map Screen</Text>
		</View>
	);
}

function SettingsScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Settings Screen</Text>
		</View>
	);
}

const Tab = createBottomTabNavigator();

export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
		Oswald_700Bold,
	});

	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if (!oswaldLoaded || !latoLoaded) return null;

	return (
		<Provider store={rootStore}>
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused, color, size }) => {
							let iconName;

							if (route.name === 'Restaurants') {
								iconName = focused ? 'restaurant' : 'restaurant-outline';
							} else if (route.name === 'Map') {
								iconName = focused ? 'map' : 'map-outline';
							} else if (route.name === 'Settings') {
								iconName = focused ? 'settings' : 'settings-outline';
							}

							return <Ionicons name={iconName} size={size} color={color} />;
						},
						tabBarActiveTintColor: 'tomato',
						tabBarInactiveTintColor: 'gray',
					})}
				>
					<Tab.Screen name='Restaurants' component={HomeScreen} />
					<Tab.Screen name='Map' component={MapScreen} />
					<Tab.Screen name='Settings' component={SettingsScreen} />
				</Tab.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
