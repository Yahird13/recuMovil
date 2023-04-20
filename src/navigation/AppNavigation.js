import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IndexScreen } from '../screens/IndexScreen';
import { LoginScreen } from '../screens/LoginScreen';


import { Button, Icon, ThemeProvider } from 'react-native-elements';
import { ProfileStack } from './ProfileStack';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


export const AppNavigation = () => {
	const Tab = createBottomTabNavigator();
	const [session, setSession] = useState(null);

	useEffect(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			setSession(user ? true : false);
		});
	}, []);

	return session ? (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarActiveTintColor: 'red',
				tabBarInactiveTintColor: 'green',
				tabBarIcon: ({ color, size }) => showIcons(route, color, size),
			})}
		>
			<Tab.Screen
				name='index'
				component={IndexStack}
				options={{ title: 'Inicio', headerShown: false }}
			/>

			<Tab.Screen
				name='details'
				component={DetailsStack}
				options={{ title: 'Detalles' }}
			/>

			<Tab.Screen
				name='profile'
				component={ProfileStack}
				options={{ title: 'Perfil' }}
			/>
		</Tab.Navigator>
	) : (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarActiveTintColor: 'red',
				tabBarInactiveTintColor: 'green',
				tabBarIcon: ({ color, size }) => showIcons(route, color, size),
			})}
		>
			<Tab.Screen
				name='index'
				component={IndexStack}
				options={{ title: 'Inicio', headerShown: false }}
			/>
		</Tab.Navigator>
	);
};

const showIcons = (route, color, size) => {
	let icon;

	if (route.name === 'index') {
		icon = 'home-outline';
	}

	if (route.name === 'details') {
		icon = 'details';
	}

	if (route.name === 'profile') {
		icon = 'account-outline';
	}

	return (
		<Icon type='material-community' name={icon} size={size} color={color} />
	);
};
