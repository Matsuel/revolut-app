import React from 'react'
import { styles } from './AcceptNotifications.style'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import LeftArrow from '../../assets/LeftArrow'
import Logo from '../../assets/Logo'
import ButtonCustom, { ButtonCustom2 } from '../../Components/ButtonCustom/ButtonCustom'

const AcceptNotifications = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftArrow color="#000" />
        </TouchableOpacity>
        <Logo />
      </View>
      <Text style={styles.title}>
        Don't miss a beat
      </Text>
      <Text style={styles.subtitle}>
        Get notified about spending, security, whealth, market movements, discounts and deals, so you're always in the know
      </Text>
      <Image source={require('../../assets/Notifs.png')} />

      <View style={styles.buttons}>
        <ButtonCustom navigation={navigation} nextScreen="Country" title="Enable push notifications" />
        <ButtonCustom2 navigation={navigation} nextScreen="Country" title="Not now" />
      </View>
    </View>
  )
}

export default AcceptNotifications