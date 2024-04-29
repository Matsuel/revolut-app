import React, { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import Screens from './src/Screens';
const Stack = createNativeStackNavigator();

export default function App() {

  const options = {
    headerShown: false,
    gestureEnabled: false
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator>
        {Object.entries(Screens).map(([name, Component]) => (
          <Stack.Screen
            key={name}
            name={name}
            component={Component as React.ComponentType<PropsWithChildren>}
            options={options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
