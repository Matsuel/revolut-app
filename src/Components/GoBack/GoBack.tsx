import React from 'react'
import { TouchableOpacity } from 'react-native'
import LeftArrow from '../../assets/LeftArrow'

interface Props {
    navigation: any;
    color: string;
}

const GoBack = ({
    navigation,
    color
}: Props) => {
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <LeftArrow props="" color={color} />
        </TouchableOpacity>
    )
}

export default GoBack