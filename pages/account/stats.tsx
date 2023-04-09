import ContentLayout from "@/components/ContentLayout/ContentLayout";
import Body from "@/pageModules/stats/components/Body/Body";
import Head from "next/head";


const StatPage = () => {
    return (
        <ContentLayout
            head="Статистика"
            >
            <Head><title>Статистика</title></Head>
            {/* content */}

            <Body/>

        </ContentLayout>
    )
}

export default StatPage;