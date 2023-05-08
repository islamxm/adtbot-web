import { StaticImageData } from "next/image"
import { IBot } from "@/models/IBot"


export type tableRowPropsTypes = {
    bot?: IBot,
    head: tableHeadRowItemType[]
}

export type tableRowItemType = {
    label?: string,
    pnl?: string,
    isLink?: boolean,
    icon?: StaticImageData,
    action?: boolean,
    running?: boolean,
    share?: boolean,
    main?: boolean
}

export type tableHeadRowItemType = {
    label?: string,
    hint?: string,
    value?: string,
    sort?: boolean,
    main?: boolean
}