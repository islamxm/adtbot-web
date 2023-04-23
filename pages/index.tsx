import { useRouter } from "next/router";
import Router from "next/router";
import ContentLayout from "@/components/ContentLayout/ContentLayout";
import Start from "@/components/Start/Start";
import CheckAuth from "@/hoc/CheckAuth";
import { useAppSelector } from "@/hooks/useTypesRedux";
import Head from "next/head";

const HomePage = () => {
    const {tokens} = useAppSelector(s => s)
    
    return (
        <>
            <Head>
                <title>ADTBot</title>
            </Head>
            <ContentLayout
                head=""
                >
                <Start/>
                {/* <h1>Home</h1> */}
            </ContentLayout>
        </>
        
    )
}

export default HomePage;