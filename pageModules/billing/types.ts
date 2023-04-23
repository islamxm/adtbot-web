import { Url } from "next/dist/shared/lib/router/router"
import { StaticImageData } from "next/image"

type descrListType = {
    head?:string,
    ul?: {link: string, label: string, icon: StaticImageData}[],
}

export type billingItemPropsTypes = {
    isTop?:boolean,
    price?: number | string,
    title?:string,
    list?: descrListType[],
    isCurrent?: boolean,
    onSelect?: (id: number) => void,
    id: number
    load?: boolean
}