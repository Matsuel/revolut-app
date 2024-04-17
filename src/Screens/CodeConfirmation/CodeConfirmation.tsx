import React, { useEffect, useRef, useState } from 'react'
import { ActionSheetIOS, Alert, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native'
import { styles } from './CodeConfirmation.style'
import LeftArrow from '../../assets/LeftArrow'
import Logo from '../../assets/Logo'
import { focusNext, focusPrev, focusFirst, checkCode, handleCode, clearInputs } from '../../Functions/CodeConfirmation'
import { Timer } from '../../Components/Timer/Timer'
import GoBack from '../../Components/GoBack/GoBack'

interface Props {
    navigation: any,
    route?: any,
}

const CodeConfirmation = ({ navigation, route }: Props) => {

    const { dial_code, phone_number, code } = route.params;

    const inputs = useRef<any[]>([]);

    const [value, setValue] = useState<number[]>(new Array(code.length).fill(NaN));
    const [codeCorrect, setCodeCorrect] = useState<number>(0);

    const arrayNum = Array.from(String(code), Number);

    useEffect(() => {
        focusFirst(inputs);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <GoBack navigation={navigation} color='#000' />
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
                        onChange={(e) => {
                            const code = handleCode(e.nativeEvent.text, index, value, setValue, arrayNum);
                            setCodeCorrect(code);
                            console.log(code, "a");
                            code !== 2 ? AlertMessage("Wrong Code", "The code you entered is wrong", code, setCodeCorrect, inputs, setValue) : navigation.navigate('AcceptNotifications');

                        }}
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

const AlertMessage = (title: string, message: string, codeCorrect: number, setCodeCorrect: Function, inputs: any, setValue: Function) => {
    if (codeCorrect === 0) return null;
    Platform.OS === 'ios' ? ActionSheetIOS.showActionSheetWithOptions(
        {
            title: title,
            message: message,
            options: ['OK'],
            cancelButtonIndex: 0
        },
        (buttonIndex) => {
            setCodeCorrect(0)
            clearInputs(inputs)
            setValue(new Array(6).fill(NaN));
        }
    ) :
    (
    Alert.alert(
        title,
        message,
        [
            {
                text: "OK",
                onPress: () => {
                    setCodeCorrect(0)
                    clearInputs(inputs)
                    setValue(new Array(6).fill(NaN));
                }
            },
        ],
        { cancelable: true }
    )
    )   

    return null;
}

export default CodeConfirmation