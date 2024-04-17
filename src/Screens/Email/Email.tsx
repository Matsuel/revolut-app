import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from './Email.style'

const Email = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Email
            </Text>
            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>
                        Email
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email address"
                    />
                </View>
            </View>
            
        </View>
    )
}

export default Email