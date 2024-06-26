import React from 'react'
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native'
import styles from './GetCard.style'
import Card from '../../assets/Card'
import { CardDetails } from '../../types/type'

const GetCard = ({
    navigation,
    route
}: any) => {

    const { plan } = route.params

    const cardsDetails: CardDetails[] = [
        {
            title: "Physical debit card",
            description: "Choose your card design or personalise it and get it delivered",
            image: require("../../assets/Physical.png")
        },
        {
            title: "Virtual debit card",
            description: "Get free virtuals cards instantly and try disposable for extra security online",
            image: require("../../assets/Virtual.png")
        }
    ]


    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Get a card
            </Text>

            <View style={styles.cardsContainer}>
                {
                    cardsDetails.map((card, index) => (
                        <TouchableOpacity style={styles.card} key={index}
                            onPress={() => card.title.includes("Virtual") ?
                                navigation.navigate("Pin", { title: "Create PIN", subtitle: "Enter a 4 digit PIN to secure your card", type: "virtual", plan: plan })
                                : navigation.navigate("")}
                        >

                            <View style={styles.cardLeft}>
                                <View style={styles.cardIconWrapper}>
                                    <Card color='#fff' props="" />
                                </View>
                                <Text style={styles.cardTitle}>
                                    {card.title}
                                </Text>
                                <Text style={styles.cardDescription}>
                                    {card.description}
                                </Text>
                            </View>
                            <Image
                                source={card.image as ImageSourcePropType}
                                style={styles.cardImage}
                            />
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>

    )
}

export default GetCard