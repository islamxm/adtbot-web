import 'swiper/css';
import '@/styles/styles.scss';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import ContentLayout from '@/components/ContentLayout/ContentLayout';

export default function App({ Component, pageProps }: AppProps) {

  const {pathname} = useRouter()


  useEffect(() => {
    console.log(pathname)
  }, [pathname])

  return (
    <div className="wrapper">
      {
        pathname?.includes('/auth') ? (
          null
        ) : <Sidebar/>
      }
      <Component {...pageProps} />
    </div>
    
  )
}
