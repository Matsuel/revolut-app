import React, { useState } from 'react';
import { Text, View, Modal, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { styles } from './Countries.style';
import Datas from '../../datas/Countries.json'
import CountryFlag from "react-native-country-flag";
import { StatusBar } from 'expo-status-bar';

type Country = {
    name: string,
    dial_code: string,
    code: string,
}

interface Props {
    showModal: boolean,
    setShowModal: any,
    setDefaultCountry: any,
}

const CountriesModal = ({ showModal, setShowModal, setDefaultCountry }: Props) => {

    const handleCountry = (country: Country) => {
        setDefaultCountry({
            dial_code: country.dial_code,
            code: country.code,
            name: country.name
        });
        setShowModal(false);
    }

    const [search, setSearch] = useState<string>("");

    return (
        <Modal
            animationType="slide"
            visible={showModal}
            onRequestClose={() => {
                setShowModal(!showModal);
            }}
            onTouchStart={(e) => e.stopPropagation()}
            presentationStyle='pageSheet'
        >
            <StatusBar style="light" />
            <View style={styles.container}>
                <View style={styles.top}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search country"
                        placeholderTextColor={"#000"}
                        onChange={(e) => setSearch(e.nativeEvent.text)}
                    />
                    <TouchableOpacity onPress={() => setShowModal(false)} style={styles.cancelButton}>
                        <Text style={styles.cancelText}>
                            Cancel
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.countryList}>
                    <FlatList
                        style={{ width: "100%" }}
                        data={Datas.filter((country: Country) => country.name.toLowerCase().includes(search.toLowerCase().trim()))}
                        scrollEnabled={true}
                        renderItem={({ item }: { item: Country }) => (
                            <TouchableOpacity style={styles.country} onPress={() => handleCountry(item)}>
                                <CountryFlag
                                    isoCode={item.code}
                                    size={35}
                                    style={{ marginLeft: 10 }}
                                />
                                <Text style={styles.countryText}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    >
                    </FlatList>
                </View>
            </View>
        </Modal>
    )
}

export default CountriesModal;