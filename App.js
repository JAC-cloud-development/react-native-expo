import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {CoinListPage} from './src/screens/CoinListPage';
import {CoinDetailPage} from './src/screens/CoinDetailPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {CameraPage} from './src/screens/CameraPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Stack1} />
        <Tab.Screen name="Settings" component={CameraPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Stack1 = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CoinList" component={CoinListPage} />
      <Stack.Screen name="CoinDetail" component={CoinDetailPage} />
    </Stack.Navigator>
  )
}

const Tab1 = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Stack1} />
      <Tab.Screen name="Settings" component={CoinListPage} />
    </Tab.Navigator>
  )
}
