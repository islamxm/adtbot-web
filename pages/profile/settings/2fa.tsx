import ContentLayout from "@/components/ContentLayout/ContentLayout";
import Body from "@/pageModules/settings/2fa/components/Body/Body";
import Done from "@/pageModules/settings/2fa/components/Done/Done";


const TwoFaPage = () => {
    return (
        <ContentLayout
            head="Двухфакторная аутентификация"
            >
            <Body/>
        </ContentLayout>
    )
}

export default TwoFaPage;