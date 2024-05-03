import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './PlansHeader.style'

interface PlansHeaderProps {
    selectedPlan: string
    setSelectedPlan: (plan: string) => void
}


const PlansHeader = ({
    selectedPlan,
    setSelectedPlan
}: PlansHeaderProps) => {

    const plans = [
        "Metal",
        "Premium",
        "Plus",
        "Standard"
    ]

    return (
        <View style={styles.plans}>
            {plans.map((plan, i) => (
                <TouchableOpacity
                    key={i}
                    style={selectedPlan === plan ? styles.planSelected : styles.plan}
                    onPress={() => setSelectedPlan(plan)}
                >
                    <Text style={selectedPlan === plan ? styles.planTextActive : styles.planText}>
                        {plan}
                    </Text>
                </TouchableOpacity>

            ))}
        </View>

    )
}

export default PlansHeader