import styles from './MainWrapper.module.scss';
import { useAppSelector, useAppDispatch } from '@/hooks/useTypesRedux';
import {useEffect, useState} from 'react';
import ApiService from '@/service/apiService';
import { updateUserData } from '@/store/actions';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useApolloClient } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { Cookies } from 'typescript-cookie';
import { updateSocket } from '@/store/actions';
import notify from '@/helpers/notify';
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
    const {tokens: {access}, socket} = useAppSelector(s => s)
    const dispatch = useAppDispatch()

    const onSocketOpen = () => {
        notify('Подключение установлено', 'SUCCESS')

        if(socket && access) {
            socket.send(JSON.stringify({token: access}))    
        }
    }

    const onSocketError = () => {
        notify('Подключение прервано', 'ERROR')
    }

    const onSocketClose = () => {
        notify('Подключение прервано', 'ERROR')
    }

    // useEffect(() => {
    //     if(access) {
    //         const sl = new WebSocket('wss://developmentsrv.space/api/v1/websocket')
    //         if(sl) {
    //             sl.addEventListener('open', onSocketOpen)
    //             sl.addEventListener('close', onSocketClose)
    //             sl.addEventListener('error', onSocketError)
    //         }
    //     }
    // }, [access])


    useEffect(() => {
        if(access) {
            const sl = new WebSocket('wss://developmentsrv.space/api/v1/websocket')
            dispatch(updateSocket(sl))
        }
    }, [access])


    useEffect(() => {
        if(socket) {
            socket.addEventListener('open', onSocketOpen)
            socket.addEventListener('close', onSocketClose)
            socket.addEventListener('error', onSocketError)
        }
        return () => {
            socket?.removeEventListener('open', onSocketOpen)
            socket?.removeEventListener('close', onSocketClose)
            socket?.removeEventListener('error', onSocketError)
        }
    }, [socket])


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