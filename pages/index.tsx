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

    useEffect(() => {
        if(!userData?.is_first_login && access) {
            Router.push('/account/bots')
        }
    }, [userData, access])

    return (
        <>
            <Head>
                <title>ADTBot</title>
            </Head>
            <ContentLayout
                head=""
                >
                {userData?.is_first_login ?   <Start/> : null}   
                {/* <h1>Home</h1> */}
            </ContentLayout>
        </>
        
    )
}

export default HomePage;