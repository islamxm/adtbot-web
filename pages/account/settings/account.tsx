import ContentLayout from "@/components/ContentLayout/ContentLayout";
import Body from "@/pageModules/settings/account/components/Body/Body";
import SettingsLayout from "@/pageModules/settings/components/SettingsLayout/SettingsLayout";
const AccountPage = () => {
    return (
        <ContentLayout
            head="Аккаунт"
            >
            <SettingsLayout
                onSave={() => {}}
                >
                <Body/>
            </SettingsLayout>
            
        </ContentLayout>
    )
}

export default AccountPage;