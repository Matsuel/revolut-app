import React, { useEffect, useRef, useState } from 'react'
import { ActionSheetIOS, Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './CodeConfirmation.style'
import LeftArrow from '../../assets/LeftArrow'
import Logo from '../../assets/Logo'
import { focusNext, focusPrev, focusFirst, checkCode } from '../../Functions/CodeConfirmation'
import { Timer } from '../../Components/Timer/Timer'

interface Props {
    navigation: any,
    route?: any,
}

const CodeConfirmation = ({ navigation, route }: Props) => {

    const { dial_code, phone_number, code } = route.params;

    console.log(code);

    const inputs = useRef<any[]>([]);

    const [value, setValue] = useState<number[]>(new Array(code.length).fill(NaN));

    const arrayNum = Array.from(String(code), Number);

    useEffect(() => {
        focusFirst(inputs);
    }, []);

    const handleCode = (v: string, index: number) => {
        const newValue = [...value];
        if (isNaN(parseInt(v))) {
            newValue[index] = NaN;
            setValue(newValue);
        } else {
            newValue[index] = parseInt(v);
            console.log(newValue);
            console.log(arrayNum);
            console.log(checkCode(newValue, arrayNum));
            setValue(newValue);
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
                Code send to {dial_code} {phone_number} unless your already signed in
            </Text>

            <View style={styles.form}>
                {arrayNum.map((_, index) => (
                    <TextInput
                        key={index}
                        style={styles.input}
                        keyboardType="numeric"
                        maxLength={1}
                        ref={el => inputs.current[index] = el}
                        onChangeText={(value) => focusNext(index, value, inputs)}
                        onKeyPress={({ nativeEvent }) => focusPrev(index, nativeEvent, inputs)}
                        onChange={(e) => handleCode(e.nativeEvent.text, index)}
                    />
                ))}
            </View>

            <Timer timervalue={30} />

            <View style={styles.noAccount}>
                <Text style={styles.noAccountText}>
                    Haven't an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.noAccountButton}>
                    <Text style={styles.signUp}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CodeConfirmation