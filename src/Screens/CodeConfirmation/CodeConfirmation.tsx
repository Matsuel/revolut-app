import React, { useRef } from 'react'
import { Text, TextInput, TextInputKeyPressEventData, TouchableOpacity, View } from 'react-native'
import { styles } from './CodeConfirmation.style'
import LeftArrow from '../../assets/LeftArrow'
import Logo from '../../assets/Logo'

const CodeConfirmation = ({ navigation }: any) => {

    const num = 123456;
    const arrayNum = Array.from(String(num), Number);
    console.log(arrayNum);

    const inputs = useRef<any[]>([]);

    const focusNext  = (key: number, value: string | any[]) => {
        if (value.length > 0 && inputs.current[key + 1]) {
            inputs.current[key + 1].focus();
        }
    }

    const focusPrev = (key: number, nativeKey: TextInputKeyPressEventData) => {
        if (nativeKey.key === 'Backspace' && inputs.current[key - 1]) {
            inputs.current[key - 1].focus();
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <LeftArrow color="#000" />
                </TouchableOpacity>
                <Logo />
            </View>
            <Text style={styles.title}>
                Enter the code
            </Text>
            <Text style={styles.subtitle}>
                Code send to +44 123456789 unless your already signed in
            </Text>

            <View style={styles.form}>
                {arrayNum.map((_, index) => (
                    <TextInput
                        key={index}
                        style={styles.input}
                        keyboardType="numeric"
                        maxLength={1}
                        ref={el => inputs.current[index] = el}
                        onChangeText={(value) => focusNext(index, value)}
                        onKeyPress={({ nativeEvent}) => focusPrev(index, nativeEvent)}
                    />
                ))}

            </View>
        </View>
    )
}

export default CodeConfirmation