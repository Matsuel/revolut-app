import React from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { styles } from './NumberKeyboard.style'
import LeftArrow from '../../assets/LeftArrow'
import Delete from '../../assets/Delete'

type PasscodeKey = {
    value: string
    color: string
    backgroundColor: string
}

interface NumberKeyboardProps {
    passcode: string
    handleKey: Function
    random: boolean
    title: string
    navigation?: any
}

const NumberKeyboard = ({ passcode, handleKey, random,title, navigation }: NumberKeyboardProps) => {
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

    const { width } = Dimensions.get("window")

    const randomizeKeyboard = () => {
        let shuffledKeys = passcodeKeys.slice(0, 11).sort(() => Math.random() - 0.5)
        shuffledKeys.push(passcodeKeys[11])
        let deleteIndex = shuffledKeys.findIndex(key => key.value === "delete")
        const temp = shuffledKeys[9]
        shuffledKeys[9] = shuffledKeys[deleteIndex]
        shuffledKeys[deleteIndex] = temp
        passcodeKeys = shuffledKeys
    }

    if (random) {
        randomizeKeyboard()
    }

    return (
        <View style={styles.passcodeKeyboard}>
            {
                passcodeKeys.map((key, index) => (
                    <TouchableOpacity
                        key={index ** 2}
                        style={[styles.passcodeKey, {
                            width: width * 0.9 / 3,
                            height: width * 0.9 / 3,
                        }]}
                        onPress={() => {
                            if (key.value !== "Arrow") {
                                handleKey(key.value);
                            } else if (title.includes("Create")) {
                                navigation.navigate("Passcode", { random: true, title: "Confirm Passcode", subtitle: "" });
                            }else {
                                navigation.navigate("Tailor");
                            }
                        }}
                        disabled={key.value === "Arrow" && passcode.length < 6}
                    >
                        {key.value === "Arrow" ?
                            <View style={[
                                { backgroundColor: key.backgroundColor },
                                styles.arrow,
                                passcode.length < 6 && styles.arrowDisabled,
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
                ))
            }

        </View >
    )
}

export default NumberKeyboard