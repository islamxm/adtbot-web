import ContentLayout from "@/components/ContentLayout/ContentLayout"
import BillingList from "@/pageModules/billing/components/BillingList/BillingList"
import BillingEx from "@/pageModules/billing/components/BillingEx/BillingEx"
import Head from "next/head"
import { useEffect, useState } from "react"
import ApiService from "@/service/apiService"
import { useAppSelector, useAppDispatch } from "@/hooks/useTypesRedux"
import StatusModal from "@/modals/StatusModal/StatusModal"
import { statusTypes } from "@/modals/StatusModal/types"
import { updateUserData } from "@/store/actions"
const service = new ApiService()


const PricingPage = () => {
    const dispatch = useAppDispatch()
    const {tokens: {access}, userData} = useAppSelector(s => s)
    const [load, setLoad] = useState(false)
    const [status, setStatus] = useState<{status: statusTypes, title: string} >({status: 'error', title: ''})
    const [statusModal, setStatusModal] = useState(false)

    const onChangeTarif = (id: number) => {

        if(access) {
            setLoad(true)
            service.changeTarif(id, access).then(res => {
                console.log(res)
                if(res?.detail) {
                    setStatus({
                        status: 'error',
                        title: res?.detail
                    })
                    setStatusModal(true)
                    service.getUserData(access).then(res => {
                        dispatch(updateUserData(res))
                    })
                }
                if(res === true) {
                    setStatus({
                        status: 'success',
                        title: 'Тариф успешно изменен'
                    })
                }
            }).finally(() => {
                setLoad(false)
            })
        }
    }

    

    return (
        <ContentLayout
            head="Баланс / Тарифы"
            >
            
            <StatusModal
                open={statusModal}
                onCancel={() => {
                    setStatusModal(false)
                    setStatus({status: 'error', title: ''})
                }}
                title={status?.title}
                status={status?.status}
                />

            <Head><title>Баланс / Тарифы</title></Head>
            <BillingList
                active={userData?.tariff}
                onChange={onChangeTarif}
                load={load}
                />
            <BillingEx/>
        </ContentLayout>
    )
}

export default PricingPage