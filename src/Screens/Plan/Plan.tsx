import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './Plan.style'

const Plan = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.skip} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.skipText}>
                    Skip
                </Text>
            </TouchableOpacity>
            <Text style={styles.title}>
                Select plan
            </Text>
        </View>
    )
}

export default Plan