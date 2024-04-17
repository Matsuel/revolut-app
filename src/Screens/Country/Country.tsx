import React, { useState } from 'react'
import { styles } from './Country.style'
import { Text, TouchableOpacity, View } from 'react-native'
import Chevron from '../../assets/Chevron'
import CountriesModal from '../Countries/Countries'

const Country = () => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [defaultCountry, setDefaultCountry] = useState({
        dial_code: "+44",
        code: "GB",
        name: "United Kingdom"
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Country of residence
            </Text>
            <Text style={styles.subtitle}>
                The terms and services which apply to you, will depend on your country of residence
            </Text>

            <TouchableOpacity style={styles.country} onPress={() => setShowModal(true)}>
                <View style={styles.countryInfos}>
                    <Text style={styles.countryText}>
                        Country
                    </Text>
                    <Text style={styles.countryName}>
                        {defaultCountry.name}
                    </Text>
                </View>
                <View style={styles.countryArrow}>
                    <Chevron color="#737a86" />
                </View>
            </TouchableOpacity>

            <View style={styles.bottom}>
                <Text style={styles.paragraph}>
                    By pressing Sign Up, you agree to our {" "}
                    <Text style={styles.link}>
                        Terms & Conditions
                    </Text>
                    {" "} and {" "}
                    <Text style={styles.link}>
                        Privacy Policy
                    </Text>
                    . Digital-only support available 24/7 via the in-app-chat. Your data will be securely encrypted with TLS 🔒.
                </Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Sign up securely
                    </Text>
                </TouchableOpacity>
            </View>

            <CountriesModal showModal={showModal} setShowModal={setShowModal} setDefaultCountry={setDefaultCountry} />
        </View>
    )
}

export default Country