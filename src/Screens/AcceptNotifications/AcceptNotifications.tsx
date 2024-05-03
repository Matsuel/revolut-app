import React from 'react'
import { styles } from './AcceptNotifications.style'
import { Text, View, Image } from 'react-native'
import Logo from '../../assets/Logo'
import ButtonCustom, { ButtonCustom2 } from '../../Components/ButtonCustom/ButtonCustom'
import GoBack from '../../Components/GoBack/GoBack'

const AcceptNotifications = ({
  navigation
}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <GoBack
          navigation={navigation}
          color='#000'
        />

        <Logo
          props=""
          color='#000'
        />

      </View>

      <Text style={styles.title}>
        Don't miss a beat
      </Text>
      <Text style={styles.subtitle}>
        Get notified about spending, security, whealth, market movements, discounts and deals, so you're always in the know
      </Text>

      <Image source={require('../../assets/Notifs.png')} />

      <View style={styles.buttons}>
        <ButtonCustom
          navigation={navigation}
          nextScreen="Country"
          title="Enable push notifications"
        />
        <ButtonCustom2
          navigation={navigation}
          nextScreen="Country"
          title="Not now"
        />
        
      </View>
    </View>
  )
}

export default AcceptNotifications