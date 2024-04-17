import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from './BirthDate.style'
import ButtonCustom from '../../Components/ButtonCustom/ButtonCustom'

const BirthDate = ({ navigation }: any) => {

    const [input, setInput] = useState<string>("");

    const handleInputChanges = (key: string) => {
        if (input.length === 10 && key !== "Backspace") return;
        if (key === "Backspace") {
            setInput(input.slice(0, -1));
        } else if (key >= "0" && key <= "9") {
            if (input.length === 2 || input.length === 5) {
                setInput(input + "/"+ key);
            } else {
                setInput(input + key);
            }
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Date of birth
            </Text>
            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="DD"
                        autoFocus
                        value={input}
                        maxLength={10}
                        keyboardType='numeric'
                        onKeyPress={({ nativeEvent }) => {
                            handleInputChanges(nativeEvent.key);
                        }}
                    />
                </View>
                <Text style={styles.label}>
                    Day, month, year
                </Text>
            </View>

            <View style={styles.buttons}>
                <ButtonCustom
                    title="Continue"
                    nextScreen=''
                    disabled={input.length === 0}
                    navigation={navigation}
                />
            </View>
        </View>
    )
}

export default BirthDate