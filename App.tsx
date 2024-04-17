import React from 'react';
import Welcome from './src/Screens/Welcome/Welcome';
import SplashScreen from './src/Screens/SplashScreen/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Phone from './src/Screens/Phone/Phone';
import CodeConfirmation from './src/Screens/CodeConfirmation/CodeConfirmation';
import AcceptNotifications from './src/Screens/AcceptNotifications/AcceptNotifications';
import Country from './src/Screens/Country/Country';
import Names from './src/Screens/Names/Names';

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
        <Stack.Screen
          name="AcceptNotifications"
          component={AcceptNotifications}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="Country"
          component={Country}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="Names"
          component={Names}
          options={{ headerShown: false, gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
