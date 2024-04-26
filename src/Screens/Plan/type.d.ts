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
    textButton: string
}


