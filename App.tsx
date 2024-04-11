import React from 'react';
import { View } from 'react-native';
import Welcome from './src/Screens/Welcome/Welcome';
import SplashScreen from './src/Screens/SplashScreen/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false, gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
