import { useRouter } from "next/router";
import Router from "next/router";
import ContentLayout from "@/components/ContentLayout/ContentLayout";
import Start from "@/components/Start/Start";
import CheckAuth from "@/hoc/CheckAuth";
import { useAppSelector } from "@/hooks/useTypesRedux";
import Head from "next/head";
import { useEffect } from "react";

const HomePage = () => {
    const {tokens: {access}, userData} = useAppSelector(s => s)

    const {is_first_login} = userData || {}


    useEffect(() => {
        if(typeof is_first_login === 'boolean' && is_first_login === false) {
            Router.push('/account/bots')
        }
    }, [is_first_login])


    return (
        <>
            <Head>
                <title>ADTBot</title>
            </Head>
            <ContentLayout
                head=""
                >
                {userData?.is_first_login === true && <Start/>}   
                
                {/* <h1>Home</h1> */}
            </ContentLayout>
        </>
        
    )
}

export default HomePage;