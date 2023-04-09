import ContentLayout from "@/components/ContentLayout/ContentLayout";
import Body from "@/pageModules/settings/api/components/Body/Body";
import SettingsLayout from "@/pageModules/settings/components/SettingsLayout/SettingsLayout";
import Head from "next/head";

const ApiPage = () => {
    return (
        <ContentLayout
            head="Ключи API"
            >
            <Head><title>Ключи API | ADTBot</title></Head>
            <SettingsLayout
                onSave={() => {}}
                >
                <Body/>
            </SettingsLayout>
            
        </ContentLayout>
    )
}

export default ApiPage;