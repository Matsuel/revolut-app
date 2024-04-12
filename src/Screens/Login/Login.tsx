import React, { useState } from 'react'
import { Text, TouchableOpacity, View, TextInput, Modal } from 'react-native'
import { styles } from './Login.style'
import LeftArrow from '../../assets/LeftArrow'
import Logo from '../../assets/Logo'
import X from '../../assets/X'
import CountriesModal from '../Countries/Countries'
import CountryFlag from 'react-native-country-flag'

const Login = ({ navigation }: any) => {

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
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <LeftArrow color="#fff" />
                </TouchableOpacity>
                <Logo />
            </View>
            <Text style={styles.title}>
                Let's get started!
            </Text>
            <Text style={styles.subtitle}>
                Enter your phone number to create an account
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
                    placeholderTextColor={"#d3d3d3"}
                    onChange={(e) => handlePhoneNumber(e.nativeEvent.text)}
                    value={phoneNumber}
                    autoFocus
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
                disabled={phoneNumber.length === 0}>
                <Text style={styles.buttonText}>
                    Login
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

export default Login