type descrListType = {
    head?:string,
    ul?: string[]
}

export type billingItemPropsTypes = {
    isTop?:boolean,
    price?: number | string,
    title?:string,
    list?: descrListType[],
    isCurrent?: boolean,
    onSelect?: (...args: any[]) => void
}