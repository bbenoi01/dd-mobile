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
import RestaurantScreen from './features/restaurants/screens/RestaurantScreen';

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

const TAB_ICON = {
	Restaurants: 'md-restaurant',
	Map: 'md-map',
	Settings: 'md-settings',
};

const createScreenOptions = ({ route }) => {
	const iconName = TAB_ICON[route.name];
	return {
		tabBarIcon: ({ size, color }) => (
			<Ionicons name={iconName} size={size} color={color} />
		),
		tabBarActiveTintColor: 'tomato',
		tabBarInactiveTintColor: 'grey',
	};
};

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
		<NavigationContainer>
			<Tab.Navigator screenOptions={createScreenOptions}>
				<Tab.Screen name='Restaurants' component={HomeScreen} />
				<Tab.Screen name='Map' component={MapScreen} />
				<Tab.Screen name='Settings' component={SettingsScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
