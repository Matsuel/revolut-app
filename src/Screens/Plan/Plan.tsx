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