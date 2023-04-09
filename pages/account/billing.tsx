import ContentLayout from "@/components/ContentLayout/ContentLayout"
import BillingList from "@/pageModules/billing/components/BillingList/BillingList"
import BillingEx from "@/pageModules/billing/components/BillingEx/BillingEx"
import Head from "next/head"

const PricingPage = () => {
    return (
        <ContentLayout
            head="Баланс / Тарифы"
            >
            <Head><title>Баланс / Тарифы</title></Head>
            <BillingList/>
            <BillingEx/>
        </ContentLayout>
    )
}

export default PricingPage