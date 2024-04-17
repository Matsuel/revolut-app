import React, { useState } from 'react'
import { View, Text, TextInput, KeyboardTypeOptions, TouchableOpacity } from 'react-native'
import { styles } from './Address.style'
import X from '../../assets/X'
import ButtonCustom from '../../Components/ButtonCustom/ButtonCustom'

type Input = {
  label: string
  placeholder: string
  keyboardType: KeyboardTypeOptions
  value: string
  setValue: Function
  clearValue: Function
}

const Address = ({ navigation }: any) => {

  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  const inputs: Input[] = [
    {
      label: "Address",
      placeholder: "Enter your address",
      keyboardType: "default",
      value: address,
      setValue: setAddress,
      clearValue: () => setAddress("")
    },
    {
      label: "City",
      placeholder: "Enter your city",
      keyboardType: "default",
      value: city,
      setValue: setCity,
      clearValue: () => setCity("")
    },
    {
      label: "Country",
      placeholder: "Enter your country",
      keyboardType: "default",
      value: country,
      setValue: setCountry,
      clearValue: () => setCountry("")
    }
  ]



  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Home address
      </Text>
      <Text style={styles.subtitle}>
        By law, we need your home address to open your account.
      </Text>
      <View style={styles.form}>
        {inputs.map((input, index) => (
          <View key={index} style={styles.inputContainer}>
            <Text style={styles.label}>
              {input.label}
            </Text>
            <TextInput
              style={styles.input}
              placeholder={input.placeholder}
              keyboardType={input.keyboardType}
              value={input.value}
              onChangeText={(text) => input.setValue(text)}
            />
            {input.value.length > 0 &&
              <TouchableOpacity style={styles.clear} onPress={() => input.clearValue()}>
                <X color="#fff" />
              </TouchableOpacity>
            }
          </View>
        ))}
      </View>

      <View style={styles.buttons}>
        <ButtonCustom
          title="Continue"
          nextScreen='BirthDate'
          disabled={inputs.some(input => input.value.length === 0)}
          navigation={navigation}
        />
      </View>
    </View>
  )
}

export default Address