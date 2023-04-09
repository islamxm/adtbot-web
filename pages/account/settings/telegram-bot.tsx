import ContentLayout from "@/components/ContentLayout/ContentLayout";
import Body from "@/pageModules/settings/telegram-bot/components/Body/Body";
import Head from "next/head";
const TgBotPage = () => {
    return (
        <ContentLayout
            head="Telegram-бот"
            >
            <Head><title>Telegram-бот | ADTBot</title></Head>
            <Body/>
        </ContentLayout>
    )
}

export default TgBotPage;