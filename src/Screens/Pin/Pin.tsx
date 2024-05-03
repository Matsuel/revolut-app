import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './Pin.style'
import { focusFirst, focusNext, focusPrev } from '../../Functions/CodeConfirmation'
import { PinRouteParams } from '../../types/type'

interface PinProps {
    navigation: any
    route: PinRouteParams
}


const Pin = ({
    navigation,
    route
}: PinProps) => {

    const { title, subtitle, type, plan, code } = route.params

    const [pin, setPin] = useState<number[]>(new Array(4).fill(NaN))
    const [focusedInput, setFocusedInput] = useState<number | null>(null)
    const ref = useRef<any[]>([])

    useEffect(() => {
        setPin(new Array(4).fill(NaN))
        focusFirst(ref)
    }, [route.params])

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
                        value={pin[item] ? pin[item].toString() : ""}
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
                                    ) : newValue.every((v) => !isNaN(v) && title.includes("Confirm")) ?
                                        navigation.navigate('Checkout', { plan: plan, type: type, code: newValue })
                                        : null
                                setPin(newValue)
                                return 1
                            }
                        }}
                        onFocus={() => setFocusedInput(item)}
                        onBlur={() => {
                            setFocusedInput(null)
                        }}
                    />

                ))}
            </View>

        </View>
    )
}

export default Pin