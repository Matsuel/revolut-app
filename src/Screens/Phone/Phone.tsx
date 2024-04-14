import React, { useState } from 'react'
import { Text, TouchableOpacity, View, TextInput } from 'react-native'
import { styles } from './Phone.style'
import LeftArrow from '../../assets/LeftArrow'
import Logo from '../../assets/Logo'
import X from '../../assets/X'
import CountriesModal from '../Countries/Countries'
import CountryFlag from 'react-native-country-flag'
import { StatusBar } from 'expo-status-bar'

interface Props {
    navigation: any,
    route: any,
}

const Phone = ({ navigation, route }: Props) => {

    const { title, subtitle, button } = route.params;

    const [phoneNumber, setPhoneNumber] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handlePhoneNumber = (text: string) => {
        setPhoneNumber(text)
    }

    const [defaultCountry, setDefaultCountry] = useState({
        dial_code: "+44",
        code: "GB",
    });

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <LeftArrow color="#000" />
                </TouchableOpacity>
                <Logo />
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.subtitle}>
                {subtitle}
            </Text>
            <View style={styles.form}>
                <TouchableOpacity style={styles.country} onPress={() => setShowModal(true)}>
                    <CountryFlag
                        isoCode={defaultCountry.code}
                        size={15}
                    />
                    <Text style={styles.countryCode}>
                        {defaultCountry.dial_code}
                    </Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="Phone number"
                    placeholderTextColor={"#000"}
                    onChange={(e) => handlePhoneNumber(e.nativeEvent.text)}
                    value={phoneNumber}
                    autoFocus
                    keyboardType="phone-pad"
                />

                {phoneNumber.length > 0 &&
                    <TouchableOpacity onPress={() => setPhoneNumber("")} style={styles.clear}>
                        <X color="#fff" />
                    </TouchableOpacity>
                }

            </View>
            <View style={styles.noAccount}>
                <Text style={styles.noAccountText}>
                    Haven't an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.noAccountButton}>
                    <Text style={styles.signUp}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={[styles.button, phoneNumber.length === 0 && styles.buttonDisabled]}
                disabled={phoneNumber.length === 0}
                onPress={() => navigation.navigate('CodeConfirmation')}
                >
                <Text style={styles.buttonText}>
                    {button}
                </Text>
            </TouchableOpacity>
            <CountriesModal
                showModal={showModal}
                setShowModal={setShowModal}
                setDefaultCountry={setDefaultCountry}
            />
        </View>
    )
}

export default Phone