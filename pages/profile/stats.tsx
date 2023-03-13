import ContentLayout from "@/components/ContentLayout/ContentLayout";
import Body from "@/pageModules/stats/components/Body/Body";

const StatPage = () => {
    return (
        <ContentLayout
            head="Статистика"
            >
            
            {/* content */}
            <Body/>

        </ContentLayout>
    )
}

export default StatPage;