import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from './Tailor.style'
import ButtonCustom from '../../Components/ButtonCustom/ButtonCustom'

const Tailor = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Tailor your Revolut experience
            </Text>
            {[0, 1].map((i) => (
                <Text style={styles.paragraph} key={i}>
                    See better in-app suggestions and a customised experience based on your activity
                </Text>
            ))}

            <TouchableOpacity style={styles.learnMore}>
                <Text style={styles.learnMoreText}>
                    Learn more
                </Text>
            </TouchableOpacity>

            <Image
                source={require('../../assets/pc.png')}
                style={styles.image}
                />

            <ButtonCustom
                title="Continue"
                navigation={navigation}
                nextScreen='Plan'
                />
        </View>
    )
}

export default Tailor