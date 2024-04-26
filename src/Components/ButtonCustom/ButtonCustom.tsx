import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './ButtonCustom.style'

interface Props {
    navigation: any;
    nextScreen: string;
    title: string;
    disabled?: boolean;
    toDo?: Function;
    params?: any;
}

const ButtonCustom = ({ navigation, nextScreen, title, disabled, toDo, params }: Props) => {
    return (
        <TouchableOpacity 
        style={[styles.button1, disabled && styles.buttonDisabled]} 
        onPress={() => nextScreen !== '' ? navigation.navigate(nextScreen, params && params) : (toDo && toDo())}
        disabled={disabled ? true : false}
        >
            <Text style={styles.buttonText1}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export const ButtonCustom2 = ({ navigation, nextScreen, title, disabled, toDo }: Props) => {
    return (
        <TouchableOpacity 
        style={[styles.buttonNotNow, disabled && styles.buttonDisabled]} 
        onPress={() => nextScreen !== '' ? navigation.navigate(nextScreen) : (toDo && toDo())}
        disabled={disabled ? true : false}
        >
          <Text style={styles.buttonTextNotNow}>
            {title}
          </Text>
        </TouchableOpacity>
    )
}

export default ButtonCustom