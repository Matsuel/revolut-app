import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/Screens/Welcome/Welcome';
import SplashScreen from './src/Screens/SplashScreen/SplashScreen';

export default function App() {
  return (
    <View>
      <SplashScreen />      
      {/* <Welcome /> */}
    </View>
  );
}
