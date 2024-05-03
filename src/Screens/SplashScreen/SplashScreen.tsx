import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from './SplashScreen.style'

const SplashScreen = ({
    navigation
}: any) => {

    const [start, setStart] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (start < 100) {
                setStart(start + 2)
            } else {
                clearInterval(interval)
                navigation.navigate('Welcome')
            }
        }, 1)
        return () => clearInterval(interval)
    }, [start])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Revolut
            </Text>
            <View style={styles.progressBar}>
                <View style={{ ...styles.progress, width: `${start}%` }} />
            </View>
        </View>
    )
}

export default SplashScreen