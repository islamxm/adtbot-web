import ContentLayout from "@/components/ContentLayout/ContentLayout";
import Body from "@/pageModules/settings/2fa/components/Body/Body";
import Done from "@/pageModules/settings/2fa/components/Done/Done";
import { useEffect, useState } from "react";
import Head from "next/head";

const TwoFaPage = () => {
    const [title, setTitle] = useState('Двухфакторная аутентификация')

    const changeTitle = () => {
        if(window.innerWidth < 1025) {
            setTitle('2FA')
        } else setTitle('Двухфакторная аутентификация')
    }

    useEffect(() => {
        window.addEventListener('resize', changeTitle)

        return () => {
            window.removeEventListener('resize', changeTitle)
        }
    }, [])


    return (
        <ContentLayout
            head={title}
            >
            <Head> <title>Двухфакторная аутентификация | ADTBot</title></Head>
            <Body/>
        </ContentLayout>
    )
}

export default TwoFaPage;