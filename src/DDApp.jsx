import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, SafeAreaView } from 'react-native';
import {
	useFonts as useOswald,
	Oswald_400Regular,
	Oswald_700Bold,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { Ionicons } from '@expo/vector-icons';
import { AuthNavigator } from './navigation/accountNavigator';
import { RestaurantNavigator } from './navigation/restaurantNavigator';
import MapScreen from './features/map/screens/MapScreen';
import SettingsScreen from './features/settings/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	RestaurantStack: 'md-restaurant',
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
		headerShown: false,
	};
};

export default function App() {
	const user = useSelector((state) => state.auth.user);

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
			{user ? (
				<Tab.Navigator screenOptions={createScreenOptions}>
					<Tab.Screen name='RestaurantStack' component={RestaurantNavigator} />
					<Tab.Screen name='Map' component={MapScreen} />
					<Tab.Screen name='Settings' component={SettingsScreen} />
				</Tab.Navigator>
			) : (
				<AuthNavigator />
			)}
		</NavigationContainer>
	);
}
