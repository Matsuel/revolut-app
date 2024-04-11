import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './Welcome.style'
import Logo from '../../assets/Logo'

const Welcome = ({navigation}: any) => {
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Logo />
            <Text style={styles.text}>
                Welcome to Revolut
            </Text>
        </View>
        <Text style={styles.title}>
            Managing your money is easy with Revolut
        </Text>

        <View style={styles.bottom}>
            <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonTextLogin}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSignUp}>
                <Text style={styles.buttonTextSignUp}>
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Welcome