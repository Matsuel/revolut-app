import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import { styles } from './Passcode.style'
import LeftArrow from '../../assets/LeftArrow'
import Delete from '../../assets/Delete'

type PasscodeKey = {
    value: string
    color: string
    backgroundColor: string
}

interface PasscodeProps {
    navigation: any
    route: any
}

// Faire un booleen random pour utiliser ce meme composant après et pouvoir lui passer une valier qui gere les erreurs
const Passcode = ({ navigation, route }: PasscodeProps) => {

    const [passcode, setPasscode] = useState<string>("")

    const { random } = route.params
    console.log(random)

    const { width, height } = Dimensions.get('window')

    let passcodeKeys: PasscodeKey[] = [
        {
            value: "1",
            color: "#000",
            backgroundColor: "transparent",
        },
        {
            value: "2",
            color: "#000",
            backgroundColor: "transparent",
        },
        {
            value: "3",
            color: "#000",
            backgroundColor: "transparent",
        },
        {
            value: "4",
            color: "#000",
            backgroundColor: "transparent",
        },
        {
            value: "5",
            color: "#000",
            backgroundColor: "transparent",
        },
        {
            value: "6",
            color: "#000",
            backgroundColor: "transparent",
        },
        {
            value: "7",
            color: "#000",
            backgroundColor: "transparent",
        },
        {
            value: "8",
            color: "#000",
            backgroundColor: "transparent",
        },
        {
            value: "9",
            color: "#000",
            backgroundColor: "transparent",
        },
        {
            value: "delete",
            color: "#000",
            backgroundColor: "transparent",
        },
        {
            value: "0",
            color: "#000",
            backgroundColor: "transparent",
        },
        {
            value: "Arrow",
            color: "#fff",
            backgroundColor: "#0d6efd",
        },
    ]

    const handleKey = (key: string) => {
        if (key === "delete") {
            setPasscode(passcode.slice(0, -1))
        } else if (passcode.length < 12 && key !== "Arrow") {
            setPasscode(passcode + key.toString())
        }
    }

    const randomizePasskeys = () => {
        const keys = passcodeKeys.slice(0, 10)
        for (let i = keys.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [keys[i], keys[j]] = [keys[j], keys[i]];
        }
        keys.push(passcodeKeys[10])
        return keys
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


            {/* Composant à créer */}
            <View style={styles.passcodeKeyboard}>
                {passcodeKeys.map((key, index) => (
                    <TouchableOpacity
                        key={index ** 2}
                        style={[styles.passcodeKey, {
                            width: width * 0.9 / 3,
                            height: width * 0.9 / 3,
                        }]}
                        onPress={() => handleKey(key.value)}
                    >
                        {key.value === "Arrow" ?
                            <View style={[
                                styles.arrow,
                                { backgroundColor: key.backgroundColor }
                            ]}>
                                <LeftArrow color={key.color} />
                            </View>
                            : key.value === "delete" ?
                                <View style={styles.delete}>
                                    <Delete />
                                </View>
                                :
                                <Text
                                    style={[styles.passcodeKeyText, { color: key.color }]}
                                >
                                    {key.value}
                                </Text>
                        }
                    </TouchableOpacity>
                ))}

            </View>
        </View>
    )
}

export default Passcode