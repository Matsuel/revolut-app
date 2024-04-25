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
import BirthDate from './src/Screens/BirthDate/BirthDate';
import Address from './src/Screens/Address/Address';
import Email from './src/Screens/Email/Email';
import Identity from './src/Screens/Identity/Identity';
import Camera from './src/Screens/Camera/Camera';
import Passcode from './src/Screens/Passcode/Passcode';

const Stack = createNativeStackNavigator();

// Faire un truc qui get les ecrans de manière dynamique

export default function App() {

  const options = {
    headerShown: false,
    gestureEnabled: false
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator>

        <Stack.Screen
          name="Identity"
          component={Identity}
          options={options}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={options}
        />
        <Stack.Screen
          name="Passcode"
          component={Passcode}
          options={options}
        />

        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={options}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={options}
        />
        <Stack.Screen
          name="Phone"
          component={Phone}
          options={options}
        />
        <Stack.Screen
          name="CodeConfirmation"
          component={CodeConfirmation}
          options={options}
        />
        <Stack.Screen
          name="AcceptNotifications"
          component={AcceptNotifications}
          options={options}
        />
        <Stack.Screen
          name="Country"
          component={Country}
          options={options}
        />
        <Stack.Screen
          name="Names"
          component={Names}
          options={options}
        />
        <Stack.Screen
          name="BirthDate"
          component={BirthDate}
          options={options}
        />
        <Stack.Screen
          name="Address"
          component={Address}
          options={options}
        />
        <Stack.Screen
          name="Email"
          component={Email}
          options={options}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
