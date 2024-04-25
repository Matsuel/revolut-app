import React, { useEffect, useState } from 'react'
import { styles } from './Camera.style'
import { View, Text, Button, TouchableOpacity, ActivityIndicator } from 'react-native'
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera/next';

const CameraScreen = ({ navigation }: any) => {

    const [facing, setFacing] = useState<CameraType>('back');
    const [permissions, askForPermissions] = useCameraPermissions()
    const [showLoader, setShowLoader] = useState<boolean>(false)

    useEffect(() => {
        if (showLoader) {
            setTimeout(() => {
                setShowLoader(false)
                navigation.navigate('Passcode')
            }, 2000)
        }
    }, [showLoader])

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    if (!permissions) {
        return <View />;
    }

    if (!permissions.granted) {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={askForPermissions} title="grant permission" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} facing={facing as CameraType}>
                <View style={styles.cameraBlur}>
                    <View style={styles.faceContainer}>
                        <View style={styles.face} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                            <Text style={styles.text}>Flip Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => setShowLoader(true)}>
                            <Text style={styles.text}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </CameraView>

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
        </View>
    );
}

export default CameraScreen

