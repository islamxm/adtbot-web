import ContentLayout from "@/components/ContentLayout/ContentLayout";
import Start from "@/components/Start/Start";
import Body from "@/pageModules/bots/components/Body/Body";
import Empty from "@/pageModules/bots/components/Empty/Empty";
import Head from "next/head";


const MyBotsPage = () => {

    return (
        <ContentLayout
            head="Мои боты"
            >
            <Head><title>Мои боты | ADTBot</title></Head>
            {/* <Start/> */}
            <Body/>
            {/* <Empty/> */}
        </ContentLayout>
    )
}

export default MyBotsPage;