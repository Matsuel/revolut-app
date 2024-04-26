import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './Plan.style'

const Plan = ({ navigation }: any) => {

    const [selectedPlan, setSelectedPlan] = useState<string>("Metal")

    const plans = [
        "Metal",
        "Premium",
        "Plus",
        "Standard"
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
        </View>
    )
}

export default Plan

type details = {
    name: string,
    price: string,
    description: string
    shortText: string
    icon: string
}

type TopFeatures = {
    title: string,
    subtitle: string,
    icon: string
}

type Plan = {
    details: details,
    features: TopFeatures[],
    textButton: string
}

const PlanData: Plan[] = [
    {
        details: {
            name: "Metal",
            price: "16,99€/month",
            description: "The ultimate experience",
            shortText: "Popular",
            icon: "🚀"
        },
        features: [
            {
                title: "Unlimited foreign exchange",
                subtitle: "Get fee-free currency exchange Mon-Fri, in +36 currencies",
                icon: "💱"
            },
            {
                title: "Commission-free stock trading",
                subtitle: "10 commission-free trades per month. Others fees may apply. Capital at risk",
                icon: "💹"
            },
            {
                title: "International travel insurance",
                subtitle: "Worldwide travel insurance for you and your family",
                icon: "🌍"
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
            icon: "🎁"
        },
        features: [
            {
                title: "Unlimited foreign exchange",
                subtitle: "Get fee-free currency exchange Mon-Fri, in +36 currencies",
                icon: "💱"
            },
            {
                title: "Commission-free stock trading",
                subtitle: "10 commission-free trades per month. Others fees may apply. Capital at risk",
                icon: "💹"
            },
            {
                title: "International travel insurance",
                subtitle: "Worldwide travel insurance for you and your family",
                icon: "🌍"
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
            icon: "🎉"
        },
        features: [
            {
                title: "Commission-free stock trading",
                subtitle: "10 commission-free trades per month. Others fees may apply. Capital at risk",
                icon: "💹"
            },
            {
                title: "Purchase protection",
                subtitle: "If your phone, talet, or other eligible item is stolen or accidentally damaged, we'll reimburse you up to 1,000€/year, for up to 365 days after purchase",
                icon: "🛡️"
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
            icon: "🔓"
        },
        features: [
            {
                title: "Interbank exchange rate",
                subtitle: "Exchange in 36+ currencies up to 1,000€ per month with no hidden fees",
                icon: "💱"
            },
            {
                title: "Commission-free stock trading",
                subtitle: "1 commission-free trades per month. Others fees may apply. Capital at risk",
                icon: "💹"
            },
            {
                title: "Revolut <18 accounts",
                subtitle: "Create a Revolut <18 account for anyone aged 6-17",
                icon: "👨‍👩‍👧‍👦"
            }
        ],
        textButton: "Get Standard for free"
    }
]
