import {FC, useEffect, useState} from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useTypesRedux';
import Router, { useRouter } from 'next/router';
import { NextPage } from 'next';
import { Cookies } from 'typescript-cookie';
import { updateTokens } from '@/store/actions';

const PrivateRoute = ({
    children
}: {
    children: React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>;
}) => {

    const router = useRouter()
    const [auth, setAuth] = useState(false)
    const {tokens: {access}} = useAppSelector(s => s)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if(router) {
            if(!access || (typeof router?.query?.unauthorized === 'string' &&  router?.query?.unauthorized === '1') || (!access || (typeof router?.query?.unauthorized === 'string' &&  router?.query?.unauthorized === '1'))) {


                Cookies.remove('adtbot-console-access-token')
                Cookies.remove('adtbot-console-refresh-token')
                dispatch(updateTokens({access: null, refresh: null}))
                
                

                if(!router?.pathname?.includes('/auth')) {
                    router.replace('/auth/join')
                } else {
                    return;
                }


            } else {
                console.log(access)
                setAuth(true)
                if(router?.pathname?.includes('/auth')) {
                    router?.push('/account/bots')
                } else {
                    return;
                }
            }
        }
        
    }, [access, router, dispatch])


    return auth ? (
        children
    ) : (
        router?.pathname?.includes('/auth')  ? (
            children    
        ) : (
            null
            // можно показать лоадер
        )
        
    )

}

export default PrivateRoute;