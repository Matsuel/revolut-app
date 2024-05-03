import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './Names.style'
import X from '../../assets/X'
import ButtonCustom from '../../Components/ButtonCustom/ButtonCustom'
import { NameButton } from '../../types/type'

const Names = ({
    navigation
}: any) => {

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");

    const clearInput = (input: string) => {
        if (input === "first") {
            setFirstName("");
        } else {
            setLastName("");
        }
    }

    const buttons: NameButton[] = [
        {
            title: "Last name",
            onPress: () => { clearInput("last") },
            value: lastName,
            onChangeText: (text: string) => setLastName(text)
        },
        {
            title: "First name",
            onPress: () => { clearInput("first") },
            value: firstName,
            onChangeText: (text: string) => setFirstName(text)
        }
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Name as in ID
            </Text>
            <Text style={styles.subtitle}>
                Name as in your official documents
            </Text>

            <View style={styles.form}>

                {buttons.map((button, index) => (
                    <View style={styles.inputContainer} key={button.title}>
                        <TextInput style={styles.input} placeholder={button.title} value={button.value} onChangeText={(text) => button.onChangeText(text)} autoFocus={index === 0} />
                        <Text style={styles.label}>
                            {button.title}
                        </Text>
                        {button.value.length > 0 &&
                            <TouchableOpacity style={styles.clear} onPress={button.onPress}>
                                <X color="#fff" props="" />
                            </TouchableOpacity>
                        }
                    </View>
                ))}

                <View style={styles.bottom}>
                    <ButtonCustom title='Continue' nextScreen='BirthDate' navigation={navigation} disabled={firstName.length === 0 || lastName.length === 0} />
                </View>
            </View>
        </View>
    )
}

export default Names