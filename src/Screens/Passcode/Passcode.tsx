import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from './Passcode.style'
import NumberKeyboard from '../../Components/NumberKeyboard/NumberKeyboard'



interface PasscodeProps {
    navigation: any
    route: any
}

const Passcode = ({ navigation, route }: PasscodeProps) => {

    const [passcode, setPasscode] = useState<string>("")

    const { random } = route.params    

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
                Create Passcode
            </Text>
            <Text style={styles.subtitle}>
                The passcode should be 6 to 12 digits long
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
                setPasscode={setPasscode}
                handleKey={handleKey}
                random={random}
                navigation={navigation}
            />

        </View>
    )
}

export default Passcode