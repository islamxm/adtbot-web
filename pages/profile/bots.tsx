import ContentLayout from "@/components/ContentLayout/ContentLayout";
import Start from "@/components/Start/Start";
import Body from "@/pageModules/bots/components/Body/Body";
import Empty from "@/pageModules/bots/components/Empty/Empty";

const MyBotsPage = () => {

    return (
        <ContentLayout
            head="Мои боты"
            >
            {/* <Start/> */}
            {/* <Body/> */}
            <Empty/>
        </ContentLayout>
    )
}

export default MyBotsPage;