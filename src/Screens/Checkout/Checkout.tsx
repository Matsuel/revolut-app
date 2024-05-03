import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './Checkout.style'
import { Capitalize } from '../../Functions/String'
import Card from '../../assets/Card'
import Lock from '../../assets/Lock'
import { PlaInfosType, RouteParams } from '../../types/type'

interface CheckoutProps {
    navigation: any
    route: RouteParams
}

const Checkout = ({
    navigation,
    route
}: CheckoutProps) => {

    const { type, plan, code } = route.params
    console.log(type, plan, code)

    const [money, setMoney] = useState<number>(0)

    const handleMoney = (value: number) => {
        if (money !== value) {
            setMoney(value)
        }
    }

    const planInfos: PlaInfosType[] = [
        {
            title: "Plan",
            info: `${plan} • Free`
        },
        {
            title: "Card",
            info: `${type} • Free`
        },
        {
            title: "Card delivery",
            info: `${plan} • 4.99€`
        }
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Checkout
            </Text>
            <View style={styles.planInfos}>
                {planInfos.map((item, index) => (
                    <View key={index} style={styles.planInfo}>
                        <Text style={styles.planInfoTitle}>
                            {item.title}
                        </Text>
                        <Text style={styles.planInfoInfo}>
                            {Capitalize(item.info)}
                        </Text>
                    </View>
                ))}
            </View>

            <View style={styles.addMoneyContainer}>
                <View style={styles.addMoney}>
                    <Text style={styles.addMoneyTitle}>
                        Add money to spend later
                    </Text>
                    <Text style={styles.addMoneyInfo}>
                        {money}€
                    </Text>
                </View>

                <View style={styles.addMoneyButtons}>
                    {[0, 10, 20, 50, 100].map((item, index) => (
                        <TouchableOpacity
                            key={item}
                            style={[styles.addMoneyButton, money === item ? styles.addMoneyButtonActive : null]}
                            onPress={() => handleMoney(item)}
                        >
                            <Text
                                style={[styles.addMoneyButtonText, money === item ? styles.addMoneyButtonTextActive : null]}
                            >
                                {item}€
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View style={styles.amountContainer}>
                <View style={styles.amount}>
                    <Text style={styles.amountTitle}>
                        Total amount
                    </Text>
                    <Text style={styles.amountInfo}>
                        {money + 4.99}€
                    </Text>
                </View>

                <View style={styles.amountCB}>
                    <View style={styles.amountCBIcon}>
                        <Card
                            color='#0d6efd'
                            props=""
                        />
                        <View style={styles.amountCBIconLock}>
                            <Lock
                                color='#0d6efd'
                                props=""
                            />
                        </View>
                    </View>
                    <View style={styles.amountCBInfo}>
                        <Text style={styles.amountCBTitle}>
                            Add debit Card
                        </Text>
                        <Text style={styles.amountCBSubtitle}>
                            Pay with your card
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.amountCBButton}>
                        <Text style={styles.amountCBButtonText}>
                            Change
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Checkout