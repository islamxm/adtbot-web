import { Url } from "next/dist/shared/lib/router/router"

export type sidebarPropsTypes = {
    isActive?: boolean,
}

export type sidebarListPropsTypes = {
    children?: React.ReactNode,
}

export type sidebarItemPropsTypes = {
    children?: React.ReactNode,
    label?: string,
    link?: Url,
    icon?: React.ReactNode,
    isActive?:boolean,
    isButton?: boolean,
    onClick?: () => void,
    menuIsOpen?: boolean,
    isSubItem?:boolean,
    isParentHidden?: boolean,

    // test
    sidebarBody?: any,
    sidebarScrollHeight?: number 
}