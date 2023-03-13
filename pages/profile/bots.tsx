import ContentLayout from "@/components/ContentLayout/ContentLayout";
import Start from "@/components/Start/Start";
import Body from "@/pageModules/bots/components/Body/Body";


const MyBotsPage = () => {

    return (
        <ContentLayout
            head="Мои боты"
            >
            {/* <Start/> */}
            <Body/>
        </ContentLayout>
    )
}

export default MyBotsPage;