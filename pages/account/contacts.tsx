import ContentLayout from "@/components/ContentLayout/ContentLayout";
import Body from "@/pageModules/contacts/Body/Body";
import Head from "next/head";


const ContactsPage = () => {

    return (
        <ContentLayout
            head="Контакты"
            >
            <Head><title>Контакты | ADTBot</title></Head>
            <Body/>
        </ContentLayout>
    )
}

export default ContactsPage;