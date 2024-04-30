import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './Pin.style'

interface PinProps {
    navigation: any
    route: RouteParams
}

type RouteParams = {
    params: {
        type: string
        plan: string
        code?: string
    }
}

const Pin = ({ navigation, route }: PinProps) => {

    const { type, plan, code } = route.params
    console.log(type, plan, code)

    const [pin, setPin] = useState<string>("")
    const ref = useRef<any[]>([])

    //utiliser la fonction qui existe déjà
    const focusFirst = (inputs: any) => {
        inputs[0].focus()
    }

    useEffect(() => {
        focusFirst(ref.current)
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Create PIN
            </Text>
            <Text style={styles.subtitle}>
                Set PIN code for your {type} card
            </Text>

            <View style={styles.inputContainer}>
                {[0, 1, 2, 3].map((item, index) => (
                    <TextInput
                        key={index}
                        style={styles.input}
                        maxLength={1}
                        keyboardType="number-pad"
                        ref={el => ref.current[index] = el}
                    />

                ))}
            </View>

        </View>
    )
}

export default Pin