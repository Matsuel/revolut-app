import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from './Email.style'
import { CheckBox } from '@rneui/themed';

const Email = ({ navigation }: any) => {

    const [checked, setChecked] = useState<boolean>(false);

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

            <View style={styles.acceptMail}>
                <CheckBox
                    checked={checked}
                    onPress={() => setChecked(!checked)}
                />
                <Text style={styles.acceptMailText} onPress={() => setChecked(!checked)}>
                    Keep me up to date about personnalised Revolut offers, products and services
                </Text>
            </View>

        </View>
    )
}

export default Email