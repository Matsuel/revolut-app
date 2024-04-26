import React from 'react'
import { View, Text, Image, Platform } from 'react-native'
import { styles } from './Identity.style'
import Shield from '../../assets/Shield'
import Camera from '../../assets/Camera'
import { StatusBar } from 'expo-status-bar'
import ButtonCustom from '../../Components/ButtonCustom/ButtonCustom'

type Instruction = {
    description: string
    icon: JSX.Element
}

const Identity = ({ navigation }: any) => {

    const instructions: Instruction[] = [
        {
            description: "It won't be your profile picture",
            icon: <Camera props="" />
        },
        {
            description: "Your phot is secure and used for verification needs only",
            icon: <Shield props="" />
        }
    ]

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <Text style={styles.title}>
                Verify your identity with a quick photo
            </Text>
            <Image
                source={require('../../assets/selfie.png')}
                style={styles.image}
            />
            <View style={styles.instructions}>
                {
                    instructions.map((instruction, index) => (
                        <View key={index} style={styles.instruction}>
                            <View style={styles.icon}>
                                {instruction.icon}
                            </View>
                            <Text style={styles.instructionText}>
                                {instruction.description}
                            </Text>
                        </View>
                    ))
                }
            </View>
            <ButtonCustom
                title='Continue'
                nextScreen={Platform.OS === 'ios' ? 'Camera' : 'Passcode'}
                navigation={navigation}
                params={{
                    title: "Create Passcode",
                    subtitle: "The passcode should be 6 to 12 digits long",
                    random: false,
                }}
            />

        </View>
    )
}

export default Identity