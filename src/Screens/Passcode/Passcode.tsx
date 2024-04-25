import React from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { styles } from './Passcode.style'
import LeftArrow from '../../assets/LeftArrow'
import Delete from '../../assets/Delete'

type PasscodeKey = {
    value: string
    color: string
    backgroundColor: string
}

const Passcode = () => {

    const { width, height } = Dimensions.get('window')

    const passcodeKeys: PasscodeKey[] = [
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



    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Create Passcode
            </Text>
            <Text style={styles.subtitle}>
                The passcode should be 6 to 12 digits long
            </Text>


            {/* Composant à créer */}
            <View style={styles.passcodeKeyboard}>
                {passcodeKeys.map((key, index) => (
                    <TouchableOpacity
                        key={index ** 2}
                        style={[styles.passcodeKey, {
                            backgroundColor: key.backgroundColor,
                            width: width * 0.9 / 3,
                            height: width * 0.9 / 3,
                        }]}
                    >
                        {key.value === "Arrow" ?
                            <View style={styles.arrow}>
                                <LeftArrow color={key.color} />
                            </View>
                            : key.value === "delete" ?
                                <View style={styles.arrow}>
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