import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { styles } from './Loader.style'

interface LoaderProps {
    navigation: any
    showLoader: boolean
    setShowLoader: Function
}


const Loader = ({ navigation, showLoader, setShowLoader }: LoaderProps) => {

    useEffect(() => {
        if (showLoader) {
            setTimeout(() => {
                setShowLoader(false)
                navigation.navigate('Passcode')
            }, 2000)
        }
    }, [showLoader])


    return (
        <>
            {showLoader &&
                <View style={styles.loader}>
                    <View style={styles.loaderView}>
                        <View style={styles.loaderWrapper}>
                            <ActivityIndicator size="large" color="#000" />
                            <Text style={styles.loaderText}>
                                Done!
                            </Text>
                        </View>
                    </View>
                </View>
            }
        </>
    )
}

export default Loader