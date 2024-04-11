import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './SplashScreen.style'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            Revolut
        </Text>
    </View>
  )
}

export default SplashScreen