import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { styles } from './Loader.style'

interface LoaderProps {
    navigation: any
    showLoader: boolean
    setShowLoader: Function
    setShowCamera: Function
}


const Loader = ({
    navigation,
    showLoader,
    setShowLoader,
    setShowCamera
}: LoaderProps) => {

    useEffect(() => {
        if (showLoader) {
            setShowCamera(false)
            setTimeout(() => {
                setShowLoader(false)
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