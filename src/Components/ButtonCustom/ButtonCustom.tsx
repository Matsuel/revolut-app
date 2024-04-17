import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './ButtonCustom.style'

interface Props {
    navigation: any;
    nextScreen: string;
    title: string;
    disabled?: boolean;
}

const ButtonCustom = ({ navigation, nextScreen, title, disabled }: Props) => {
    return (
        <TouchableOpacity style={[styles.button1, disabled && styles.buttonDisabled]} onPress={() => navigation.navigate(nextScreen)} disabled={disabled ? true : false}>
            <Text style={styles.buttonText1}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export const ButtonCustom2 = ({ navigation, nextScreen, title, disabled }: Props) => {
    return (
        <TouchableOpacity style={[styles.buttonNotNow, disabled && styles.buttonDisabled]} onPress={() => navigation.navigate(nextScreen)} disabled={disabled ? true : false}>
          <Text style={styles.buttonTextNotNow}>
            {title}
          </Text>
        </TouchableOpacity>
    )
}

export default ButtonCustom