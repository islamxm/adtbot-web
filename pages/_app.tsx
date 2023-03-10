import 'swiper/css';
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


NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());



export default function App({ Component, pageProps }: AppProps) {
  const {pathname} = useRouter()


  return (
    <div className="wrapper">
      <ToastContainer/>
      {
        pathname?.includes('/auth') ? (
          null
        ) : <Sidebar/>
      }
      <Component {...pageProps} />
    </div>
    
  )
}
