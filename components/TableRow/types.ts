import { StaticImageData } from "next/image"

export type tableRowPropsTypes = {
    list?: tableRowItemType[]
}

export type tableRowItemType = {
    label?: string,
    pnl?: string,
    isLink?: boolean,
    icon?: StaticImageData,
    action?: boolean,
    running?: boolean,
    share?: boolean
}