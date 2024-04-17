import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './ButtonCustom.style'

interface Props {
    navigation: any;
    nextScreen: string;
    title: string;

}

const ButtonCustom = ({ navigation, nextScreen, title }: Props) => {
    return (
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate(nextScreen)}>
            <Text style={styles.buttonText1}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export const ButtonCustom2 = ({ navigation, nextScreen, title }: Props) => {
    return (
        <TouchableOpacity style={styles.buttonNotNow} onPress={() => navigation.navigate(nextScreen)}>
          <Text style={styles.buttonTextNotNow}>
            {title}
          </Text>
        </TouchableOpacity>
    )
}

export default ButtonCustom