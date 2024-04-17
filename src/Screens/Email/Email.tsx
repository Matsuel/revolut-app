import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from './Email.style'
import { CheckBox } from '@rneui/themed';
import ButtonCustom from '../../Components/ButtonCustom/ButtonCustom';

const Email = ({ navigation }: any) => {

    const [checked, setChecked] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");

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
                        value={email}
                        onChangeText={(text) => setEmail(text)}
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

            <View style={styles.buttons}>
                <ButtonCustom
                    title="Continue"
                    nextScreen='Identity'
                    disabled={email.length === 0 || email.indexOf('@') === -1 || email.indexOf('.') === -1}
                    navigation={navigation}
                />
            </View>

        </View>
    )
}

export default Email