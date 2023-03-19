import { StaticImageData } from "next/image"

export type tableRowPropsTypes = {
    list?: tableRowItemType[],
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