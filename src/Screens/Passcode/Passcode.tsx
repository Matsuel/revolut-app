import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from './Passcode.style'
import NumberKeyboard from '../../Components/NumberKeyboard/NumberKeyboard'

interface PasscodeProps {
    navigation: any
    route: any
    code?: string
}

const Passcode = ({
    navigation,
    route
}: PasscodeProps) => {

    const [passcode, setPasscode] = useState<string>("")

    const { random, title, subtitle } = route.params

    const handleKey = (key: string) => {
        if (key === "delete") {
            setPasscode(passcode.slice(0, -1))
        } else if (passcode.length < 12 && key !== "Arrow") {
            setPasscode(passcode + key)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.subtitle}>
                {subtitle}
            </Text>

            <TextInput
                style={styles.passcodeInput}
                placeholder="Enter Passcode"
                secureTextEntry={true}
                maxLength={12}
                value={passcode}
                onChangeText={setPasscode}
                showSoftInputOnFocus={false}
                caretHidden={true}
            />

            <NumberKeyboard
                passcode={passcode}
                title={title}
                handleKey={handleKey}
                random={random}
                navigation={navigation}
            />

        </View>
    )
}

export default Passcode