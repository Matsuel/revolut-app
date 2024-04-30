import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './Pin.style'
import { focusFirst, focusNext, focusPrev } from '../../Functions/CodeConfirmation'

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

    const [pin, setPin] = useState<number[]>(new Array(4).fill(NaN))
    const [focusedInput, setFocusedInput] = useState<number | null>(null)
    const ref = useRef<any[]>([])

    useEffect(() => {
        focusFirst(ref)
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
                {[0, 1, 2, 3].map((item) => (
                    <TextInput
                        key={item}
                        style={[styles.input, focusedInput === item ? styles.inputFocused : null]}
                        maxLength={1}
                        secureTextEntry={true}
                        keyboardType="number-pad"
                        ref={el => ref.current[item] = el}
                        onChangeText={(value) => {focusNext(item, value, ref)}}
                        onKeyPress={({ nativeEvent }) => {focusPrev(item, nativeEvent, ref)}}
                        onFocus={() => setFocusedInput(item)}
                        onBlur={() => setFocusedInput(null)}
                    />

                ))}
            </View>

        </View>
    )
}

export default Pin