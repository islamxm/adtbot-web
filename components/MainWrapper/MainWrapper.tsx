import styles from './MainWrapper.module.scss';
import { useAppSelector, useAppDispatch } from '@/hooks/useTypesRedux';
import {useEffect, useState} from 'react';
import ApiService from '@/service/apiService';
import { updateUserData } from '@/store/actions';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useApolloClient } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { Cookies } from 'typescript-cookie';

const service = new ApiService()


const wsLink = process?.browser ? 
    new GraphQLWsLink(createClient({
        url: 'wss://developmentsrv.space/graphql/',
        connectionParams: {
          token: Cookies?.get('adtbot-console-access-token') ? Cookies?.get('adtbot-console-access-token') : '',          
        },
        
      })) : null
  
  
const client = new ApolloClient({
    link: wsLink ? wsLink : undefined,
    cache: new InMemoryCache()
  })


  

const MainWrapper = ({
    children
}: {
    children?: React.ReactNode
}) => {
    
    const {tokens: {access}} = useAppSelector(s => s)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(access && dispatch) {
            service.getUserData(access).then(res => {
                if(res) {
                    dispatch(updateUserData(res))
                }
            })
        }
    }, [access, dispatch])



    return (
        <ApolloProvider
            client={client}
            >
             <div className={styles.wrapper}>
                {children}
            </div>
        </ApolloProvider>
       
    )

}


export default MainWrapper;