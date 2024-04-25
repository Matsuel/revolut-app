import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './Passcode.style'

const Passcode = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Create Passcode
            </Text>
            <Text style={styles.subtitle}>
                The passcode should be 6 to 12 digits long
            </Text>
        </View>
    )
}

export default Passcode