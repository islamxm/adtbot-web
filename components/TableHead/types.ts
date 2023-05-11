export type tableHeadPropsTypes = {
    list?: tableHeadItemType[],
    onSort?: (...args: any[]) => any
}

export type tableHeadItemType = {
    label?:string,
    hint?: string,
    value?: string,
    onChange?: (...args: any[]) => any,
    sort?: boolean,

    main?:boolean
}