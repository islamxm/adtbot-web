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
        if(Router) {
            Router?.push('/auth/login')
        }
        return null
    }

    return <>{children}</>

}


export default CheckAuth;