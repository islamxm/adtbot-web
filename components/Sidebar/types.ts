import { Url } from "next/dist/shared/lib/router/router"

export type sidebarPropsTypes = {
    isActive?: boolean,
}

export type sidebarListPropsTypes = {
    children?: React.ReactNode,
}

export type sidebarItemPropsTypes = {
    list?: React.ReactNode,
    label?: string,
    link?: Url,
    icon?: React.ReactNode,
    isActive?:boolean,
    isButton?: boolean
}