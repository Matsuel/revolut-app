import React from 'react'
import { styles } from './AcceptNotifications.style'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import LeftArrow from '../../assets/LeftArrow'
import Logo from '../../assets/Logo'

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
        <TouchableOpacity style={styles.buttonAccept} onPress={() => navigation.navigate('Country')}>
          <Text style={styles.buttonTextAccept}>Enable push notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNotNow} onPress={() => navigation.navigate('Country')}>
          <Text style={styles.buttonTextNotNow}>Not now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AcceptNotifications