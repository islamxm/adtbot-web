import { useAppSelector } from "@/hooks/useTypesRedux"
import Router, { useRouter } from "next/router"
import { useEffect } from "react"
import { NextComponentType } from "next"

const CheckAuth = ({
    children,
    token
}: {
    children?: React.ReactNode,
    token?: string | {
        [property: string]: string;
    } | null | undefined
}) => {


    if(!token) {
        process?.browser && window.location.replace('/auth/login')
        return null
    } else {
        return <>{children}</>
    }
}


export default CheckAuth;