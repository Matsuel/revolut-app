import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { styles } from './Loader.style'

interface LoaderProps {
    navigation: any
    showLoader: boolean
    setShowLoader: Function
    setShowCamera?: Function
    goHome?: boolean
}


const Loader = ({
    navigation,
    showLoader,
    setShowLoader,
    setShowCamera,
    goHome
}: LoaderProps) => {

    useEffect(() => {
        if (showLoader) {
            setShowCamera && setShowCamera(false)
            setTimeout(() => {
                setShowLoader(false)
                goHome && navigation.navigate('Home')
                navigation.navigate('Passcode', {
                    title: "Create Passcode",
                    subtitle: "The passcode should be 6 to 12 digits long",
                    random: false,
                })
            }, 1000)
        }
    }, [showLoader])


    return (
        <>
            {showLoader &&
                <View style={styles.loader}>
                    <View style={styles.loaderView}>
                        <View style={styles.loaderWrapper}>

                            <ActivityIndicator
                                size="large"
                                color="#000"
                            />

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