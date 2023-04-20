import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigation } from './src/navigation/AppNavigation';
import { LoginScreen } from './src/screens/LoginScreen';

export default function App() {
  return (
    <>
			<view>
				<LoginScreen/>
			</view>
		</>
  );
}