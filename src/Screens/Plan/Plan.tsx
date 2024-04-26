import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { styles } from './Plan.style'
import Bolt from '../../assets/Bolt'
import Gift from '../../assets/Gift'
import Check from '../../assets/Check'
import Loop from '../../assets/Loop'
import Bar from '../../assets/Bar'
import Plus from '../../assets/Plus'
import Bag from '../../assets/Bag'
import { PlanType } from './type'

const Plan = ({ navigation }: any) => {

    const [selectedPlan, setSelectedPlan] = useState<string>("Metal")

    const plans = [
        "Metal",
        "Premium",
        "Plus",
        "Standard"
    ]

    const PlanData: PlanType[] = [
        {
            details: {
                name: "Metal",
                price: "16,99€/month",
                description: "The ultimate experience",
                shortText: "Popular",
                icon: <Bolt />
            },
            features: [
                {
                    title: "Unlimited foreign exchange",
                    subtitle: "Get fee-free currency exchange Mon-Fri, in +36 currencies",
                    icon: <Loop />
                },
                {
                    title: "Commission-free stock trading",
                    subtitle: "10 commission-free trades per month. Others fees may apply. Capital at risk",
                    icon: <Bar />
                },
                {
                    title: "International travel insurance",
                    subtitle: "Worldwide travel insurance for you and your family",
                    icon: <Plus />
                }
            ],
            textButton: "Get Metal for 16,99€/month"
        },
        {
            details: {
                name: "Premium",
                price: "1 month free then 9,99€/month",
                description: "Ticket to a global lifestyle",
                shortText: "Special offer",
                icon: <Gift />
            },
            features: [
                {
                    title: "Unlimited foreign exchange",
                    subtitle: "Get fee-free currency exchange Mon-Fri, in +36 currencies",
                    icon: <Loop />
                },
                {
                    title: "Commission-free stock trading",
                    subtitle: "10 commission-free trades per month. Others fees may apply. Capital at risk",
                    icon: <Bar />
                },
                {
                    title: "International travel insurance",
                    subtitle: "Worldwide travel insurance for you and your family",
                    icon: <Plus />
                }
            ],
            textButton: "Start your free trial"
        },
        {
            details: {
                name: "Plus",
                price: "3,99€/month",
                description: "Best for everyday spending",
                shortText: "Special offer",
                icon: <Gift />
            },
            features: [
                {
                    title: "Commission-free stock trading",
                    subtitle: "10 commission-free trades per month. Others fees may apply. Capital at risk",
                    icon: <Bar />
                },
                {
                    title: "Purchase protection",
                    subtitle: "If your phone, talet, or other eligible item is stolen or accidentally damaged, we'll reimburse you up to 1,000€/year, for up to 365 days after purchase",
                    icon: <Bag />
                }
            ],
            textButton: "Start your free trial"
        },
        {
            details: {
                name: "Standard",
                price: "Free",
                description: "Just the basics",
                shortText: "Active",
                icon: <Check />
            },
            features: [
                {
                    title: "Interbank exchange rate",
                    subtitle: "Exchange in 36+ currencies up to 1,000€ per month with no hidden fees",
                    icon: <Loop />
                },
                {
                    title: "Commission-free stock trading",
                    subtitle: "1 commission-free trades per month. Others fees may apply. Capital at risk",
                    icon: <Bar />
                },
                {
                    title: "Revolut <18 accounts",
                    subtitle: "Create a Revolut <18 account for anyone aged 6-17",
                    icon: <Bag />
                }
            ],
            textButton: "Get Standard for free"
        }
    ]

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.skip} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.skipText}>
                    Skip
                </Text>
            </TouchableOpacity>
            <Text style={styles.title}>
                Select plan
            </Text>

            <View style={styles.plans}>
                {plans.map((plan, i) => (
                    <TouchableOpacity
                        key={i}
                        style={selectedPlan === plan ? styles.planSelected : styles.plan}
                        onPress={() => setSelectedPlan(plan)}
                    >
                        <Text style={styles.planText}>
                            {plan}
                        </Text>
                    </TouchableOpacity>

                ))}
            </View>

            {
                PlanData.map((plan, i) => (
                    plan.details.name === selectedPlan &&
                    <View key={i} style={styles.planDetailsContainer}>
                        <FlatList
                            data={[plan]}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.planInfos}>
                                    <View style={styles.planDetails}>
                                        <Text style={styles.planName}>
                                            {item.details.name}
                                        </Text>
                                        <Text style={styles.planPrice}>
                                            {item.details.price}
                                        </Text>
                                        <Text style={styles.planDescription}>
                                            {item.details.description}
                                        </Text>
                                        <View style={styles.button}>
                                            {item.details.icon}
                                            <Text style={styles.planShortText}>
                                                {item.details.shortText}
                                            </Text>
                                        </View>
                                    </View>

                                    {/* <View style={styles.features}>
                                        {item.features.map((feature, i) => (
                                            <View key={i} style={styles.feature}>
                                                <Text style={styles.featureTitle}>
                                                    {feature.icon}
                                                    {feature.title}
                                                </Text>
                                                <Text style={styles.featureSubtitle}>
                                                    {feature.subtitle}
                                                </Text>
                                            </View>
                                        ))}
                                    </View> */}
                                </View>

                            )}
                        />
                    </View>
                ))




            }
        </View>

    )
}

export default Plan

