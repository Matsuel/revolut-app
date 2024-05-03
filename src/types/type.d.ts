import { ReactElement } from "react"

export type details = {
    name: string,
    price: string,
    description: string
    shortText: string
    icon: ReactElement<any, any>
}

export type TopFeatures = {
    title: string,
    subtitle: string,
    icon: ReactElement<any, any>
}

export type PlanType = {
    details: details,
    features: TopFeatures[],
    textButton: string,
    alert?: string
}

export interface SvgProps {
    props: any
    color: string
}

type PasscodeKey = {
    value: string
    color: string
    backgroundColor: string
}

type Input = {
    label: string
    placeholder: string
    keyboardType: KeyboardTypeOptions
    value: string
    setValue: Function
    clearValue: Function
}

type RouteParams = {
    params: {
        type: string
        plan: string
        code: number[]
    }
}

type PinRouteParams = {
    params: {
        title: string
        subtitle: string
        type: string
        plan: string
        code?: number[]
    }
}

type PlaInfosType = {
    title: string
    info: string
}

type Country = {
    name: string,
    dial_code: string,
    code: string,
}

type CardDetails = {
    title: string
    description: string
    image: string
}

type Instruction = {
    description: string
    icon: JSX.Element
}

interface NameButton {
    title: string,
    onPress: () => void,
    value: string,
    onChangeText: (text: string) => void
}