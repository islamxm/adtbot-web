import ContentLayout from "@/components/ContentLayout/ContentLayout"
import BillingList from "@/pageModules/billing/components/BillingList/BillingList"
import BillingEx from "@/pageModules/billing/components/BillingEx/BillingEx"

const PricingPage = () => {
    return (
        <ContentLayout
            head="Баланс / Тарифы"
            >
            <BillingList/>
            <BillingEx/>
        </ContentLayout>
    )
}

export default PricingPage