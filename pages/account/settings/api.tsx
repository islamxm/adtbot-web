import ContentLayout from "@/components/ContentLayout/ContentLayout";
import Body from "@/pageModules/settings/api/components/Body/Body";
import SettingsLayout from "@/pageModules/settings/components/SettingsLayout/SettingsLayout";
const ApiPage = () => {
    return (
        <ContentLayout
            head="Ключи API"
            >
            <SettingsLayout
                onSave={() => {}}
                >
                <Body/>
            </SettingsLayout>
            
        </ContentLayout>
    )
}

export default ApiPage;