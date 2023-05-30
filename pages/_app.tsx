import 'swiper/css';
import "swiper/css/bundle";
import '@/styles/styles.scss';
import type { AppProps } from 'next/app'
import { useRouter, Router } from 'next/router';
import { useEffect } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import ContentLayout from '@/components/ContentLayout/ContentLayout';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; 
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ConfigProvider } from 'antd';
import ruRu from 'antd/locale/ru_RU';
import TgLink from '@/components/TgLink/TgLink';
import FixedAction from '@/components/FixedAction/FixedAction';
import { Provider } from 'react-redux';
import store from '@/store/store';
import PrivateRoute from '@/hoc/CheckAuth';
import MainWrapper from '@/components/MainWrapper/MainWrapper';
import Head from 'next/head';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import endpoints from '@/service/endpoints';
NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());


const gqlClient = new ApolloClient({
  uri: endpoints?.gql,
  cache: new InMemoryCache()
})


export default function App({ Component, pageProps }: AppProps) {
  const {pathname} = useRouter()

  return (
    <Provider store={store}>
      <ApolloProvider client={gqlClient}>
      <ConfigProvider locale={ruRu}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"/>
        </Head>
        <PrivateRoute>
          <MainWrapper>
            <div className="wrapper">
              <ToastContainer/>
              {
                pathname?.includes('/auth') ? (
                  null
                ) : <Sidebar/>
              }
              <Component {...pageProps} />
            </div>
            {/* {
              !pathname?.includes('/auth') ? (
                <FixedAction/>
              ) : null
            } */}
          </MainWrapper>
          
        </PrivateRoute>
        
        
    
      </ConfigProvider>
      </ApolloProvider>
     
    </Provider>
    
    
  )
}
