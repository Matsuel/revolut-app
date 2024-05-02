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
        title: string
        subtitle: string
        type: string
        plan: string
        code?: number[]
    }
}

const Pin = ({ navigation, route }: PinProps) => {

    const { title, subtitle, type, plan, code } = route.params
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
                {title}
            </Text>
            <Text style={styles.subtitle}>
                {subtitle}
            </Text>

            <View style={styles.inputContainer}>
                {[0, 1, 2, 3].map((item) => (
                    <TextInput
                        key={item}
                        style={[styles.input,
                        focusedInput === item ?
                            styles.inputFocused :
                            null]}
                        maxLength={1}
                        secureTextEntry={true}
                        keyboardType="number-pad"
                        ref={el => ref.current[item] = el}
                        onChangeText={(value) => { focusNext(item, value, ref) }}
                        onKeyPress={({ nativeEvent }) => { focusPrev(item, nativeEvent, ref) }}
                        onChange={(e) => {
                            const newValue = [...pin]
                            if (isNaN(parseInt(e.nativeEvent.text))) {
                                newValue[item] = NaN
                                setPin(newValue)
                                return 0
                            } else {
                                newValue[item] = parseInt(e.nativeEvent.text)
                                newValue.every((v) => !isNaN(v) && title.includes("Create")) ?
                                    navigation.navigate("Pin", { title: "Confirm PIN", subtitle: "", type: type, plan: plan, code: newValue }
                                    ) : code?.every((v) => !isNaN(v) && title.includes("Confirm")) ? 
                                    navigation.navigate('Checkout', { plan: plan, type: type, code: newValue }) 
                                    // console.log("done")
                                    : null
                                setPin(newValue)
                                return 1
                            }
                        }}
                        onFocus={() => setFocusedInput(item)}
                        onBlur={() => {
                            setFocusedInput(null)
                            console.log(pin)
                        }}
                    />

                ))}
            </View>

        </View>
    )
}

export default Pin