import React from 'react'
import { PlanType } from '../../types/type'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { styles } from './PlanDetails.style'

interface PlanDetailsProps {
    PlanData: PlanType[]
    selectedPlan: string
    navigation: any
}

const PlanDetails = ({
    PlanData,
    selectedPlan,
    navigation
}: PlanDetailsProps) => {
    return (
        <>
            {PlanData.map((plan, i) => (
                plan.details.name === selectedPlan &&
                <View key={i} style={styles.planDetailsContainer}>
                    <FlatList
                        data={[plan]}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <>
                                <View style={styles.planDetails}>
                                    <Text style={styles.planName}>
                                        {plan.details.name}
                                    </Text>
                                    <Text style={styles.planPrice}>
                                        {plan.details.price}
                                    </Text>
                                    <Text style={styles.planDescription}>
                                        {plan.details.description}
                                    </Text>
                                    <View style={styles.button}>
                                        <View style={styles.buttonIcon}>
                                            {plan.details.icon}
                                        </View>
                                        <Text style={styles.planShortText}>
                                            {plan.details.shortText}
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.features}>
                                    <Text style={styles.featuresTitle}>
                                        Top features
                                    </Text>


                                    {plan.features.map((feature, i) => (
                                        <View key={feature.title} style={styles.feature}>
                                            <View style={styles.featureIconWrapper}>
                                                <View style={styles.featureIcon}>
                                                    {feature.icon}
                                                </View>
                                            </View>
                                            <View style={styles.featureTexts}>
                                                <Text style={styles.featureTitle}>
                                                    {feature.title}
                                                </Text>
                                                <Text style={styles.featureSubtitle}>
                                                    {feature.subtitle}
                                                </Text>
                                            </View>
                                        </View>
                                    ))}


                                </View>
                            </>
                        )}
                    />
                    <View style={styles.bottom}>
                        <TouchableOpacity style={styles.buttonBottom} onPress={() => navigation.navigate('GetCard', { plan: plan.details.name })}>
                            <Text style={styles.buttonText}>
                                {plan.textButton}
                            </Text>
                        </TouchableOpacity>
                        {plan.alert &&
                            <Text style={styles.alert}>
                                {plan.alert}
                            </Text>
                        }
                    </View>
                </View>
            ))}
        </>

    )
}

export default PlanDetails