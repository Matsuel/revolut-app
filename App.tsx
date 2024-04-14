import React from 'react';
import Welcome from './src/Screens/Welcome/Welcome';
import SplashScreen from './src/Screens/SplashScreen/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Phone from './src/Screens/Phone/Phone';
import CodeConfirmation from './src/Screens/CodeConfirmation/CodeConfirmation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
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
        <Stack.Screen
          name="Phone"
          component={Phone}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="CodeConfirmation"
          component={CodeConfirmation}
          options={{ headerShown: false, gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
