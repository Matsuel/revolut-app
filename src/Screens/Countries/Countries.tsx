import React from 'react';
import { Text, View, Modal, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { styles } from './Countries.style';
import Datas from '../../datas/Countries.json'
import CountryFlag from "react-native-country-flag";

type Country = {
    name: string,
    dial_code: string,
    code: string,
}

const CountriesModal = ({ showModal, setShowModal, setDefaultCountry }: any) => {

    const handleCountry = (country: Country) => {
        setDefaultCountry({
            dial_code: country.dial_code,
            code: country.code,
        });
        setShowModal(false);
    }

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
            <View style={styles.container}>
                <View style={styles.top}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search country"
                        placeholderTextColor={"#d3d3d3"}
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
                        data={Datas}
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