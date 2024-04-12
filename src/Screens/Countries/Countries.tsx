import React, { useState } from 'react';
import { Text, View, Modal, TouchableOpacity } from 'react-native';
import { styles } from './Countries.style';

const CountriesModal = ({ showModal, setShowModal }: any) => {
    return (
        <Modal
            animationType="slide"
            visible={showModal}
            onRequestClose={() => {
                setShowModal(!showModal);
            }}
            presentationStyle='pageSheet'
        >
            <View style={styles.container}>
                <Text style={styles.title}>
                    Select your country
                </Text>
                <TouchableOpacity onPress={() => setShowModal(false)} style={styles.button}>
                    <Text style={styles.buttonText}>
                        Done
                    </Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default CountriesModal;