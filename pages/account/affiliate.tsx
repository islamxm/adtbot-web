import ContentLayout from "@/components/ContentLayout/ContentLayout";
import Body from "@/pageModules/affiliate/Body/Body";
import Head from "next/head";

const PartnerPage = () => {

    return (
        <ContentLayout
            head="Реферальная программа"
            >
            <Head><title>Реферальная программа | ADTBot</title></Head>
            <Body/>
        </ContentLayout>
    )
}

export default PartnerPage;