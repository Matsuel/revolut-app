import React, { useEffect, useRef, useState } from 'react'
import { Text, TextInput, TextInputKeyPressEventData, TouchableOpacity, View } from 'react-native'
import { styles } from './CodeConfirmation.style'
import LeftArrow from '../../assets/LeftArrow'
import Logo from '../../assets/Logo'
import { focusNext, focusPrev, focusFirst } from '../../Functions/CodeConfirmation'

const CodeConfirmation = ({ navigation }: any) => {

    const inputs = useRef<any[]>([]);
    const [timer, setTimer] = useState<number>(30);

    const num = 123456;
    const arrayNum = Array.from(String(num), Number);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    useEffect(() => {
        focusFirst(inputs);
    }, []);

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
                        onChangeText={(value) => focusNext(index, value, inputs)}
                        onKeyPress={({ nativeEvent}) => focusPrev(index, nativeEvent, inputs)}
                    />
                ))}
            </View>

            <TouchableOpacity style={styles.resend} disabled={timer > 0} onPress={() => setTimer(30)}>
                <Text style={[timer > 0 ? styles.resendWait : styles.resendText]}>
                    {timer > 0 ? `Resend code in 00:${timer}` : "Resend code"}
                </Text>
            </TouchableOpacity>

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