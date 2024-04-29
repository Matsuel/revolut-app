import React, { useState } from 'react'
import { View, Text } from 'react-native'
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

    const { type, plan,code } = route.params
    console.log(type, plan, code)

    const [pin, setPin] = useState<string>("")

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Create PIN
            </Text>
            <Text style={styles.subtitle}>
                Set PIN code for your {type} card
            </Text>
        </View>
    )
}

export default Pin