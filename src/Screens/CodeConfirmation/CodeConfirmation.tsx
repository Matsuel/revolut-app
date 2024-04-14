import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './CodeConfirmation.style'
import LeftArrow from '../../assets/LeftArrow'
import Logo from '../../assets/Logo'

const CodeConfirmation = ({navigation}:any) => {

    const num = 123456;
    const arrayNum = Array.from(String(num), Number);
    console.log(arrayNum);

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
                <TextInput key={index} style={styles.input} keyboardType="numeric" maxLength={1} />
            ))}

        </View>
    </View>
  )
}

export default CodeConfirmation