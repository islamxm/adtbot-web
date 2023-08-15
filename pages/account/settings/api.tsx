import ContentLayout from "@/components/ContentLayout/ContentLayout";
import Body from "@/pageModules/settings/api/components/Body/Body";
import SettingsLayout from "@/pageModules/settings/components/SettingsLayout/SettingsLayout";
import Head from "next/head";
import { useState, useEffect } from "react";
import ApiService from "@/service/apiService";
import { useAppSelector } from "@/hooks/useTypesRedux";
import notify from "@/helpers/notify";
const service = new ApiService()

export interface IKey {
    public?: string,
    private?: string
}



const ApiPage = () => {
    const {tokens: {access}} = useAppSelector(s => s)
    
    const [balance, setBalance] = useState<{
        BuyingIP: string[],
        GateBalance: any,
        HuobiBalance: any,
        KuCoinBalance: any,
        MEXCBalance: any
    }>()

    const [load, setLoad] = useState(false)

    const [gate, setGate] = useState<IKey>({public: '', private: ''})
    const [ku, setKu] = useState<IKey>({public: '', private: ''})
    const [mexc, setMexc] = useState<IKey>({public: '', private: ''})
    const [huobi, setHuobi] = useState<IKey>({public: '', private: ''})


    const onSave = () => {
        if(access) {
            const resAll = []
            if(gate?.private && gate?.public) {
                resAll.push(service.setGateAuthData({
                    apiKey: gate.public,
                    secret: gate.private
                }, access))
            }
            if(ku?.private && ku?.public) {
                resAll.push(service.setKucoinAuthData({
                    apiKey: ku?.public,
                    secret: ku?.private
                }, access))
            }
            if(mexc?.private && mexc?.public) {
                resAll.push(service.setMexcAuthData({
                    apiKey: mexc?.public,
                    secret: mexc?.private
                }, access))
            }
            if(huobi?.private && huobi?.public) {
                resAll.push(service.setHuobiAuthData({
                    apiKey: huobi?.public,
                    secret: huobi?.private
                }, access))
            }

            // ?? response
            if(resAll?.length > 0) {
                setLoad(true)
                Promise.all(resAll).then(res => {
                    if(res?.length > 0) {
                        res.forEach(i => {
                            if(i?.status === 200) {
                                i?.json().then((r:any) => {
                                    notify('Успешно', 'SUCCESS')
                                    service.getExchangeBalances(access).then(res => {
                                        setBalance(res)
                                    })
                                })
                            } else {
                                i?.json().then((r:any) => {
                                    notify('Произошла ошибка', 'ERROR')
                                })
                            }
                        })
                    }
                }).finally(() => {
                    setLoad(false)
                })
            }
           
        }
        
    }


    useEffect(() => {
        if(access) {
            service.getExchangeBalances(access).then(res => {
                setBalance(res)
            })
        }
    }, [access])


    return (
        <ContentLayout
            head="Ключи API"
            >
            <Head><title>Ключи API | ADTBot</title></Head>
            <SettingsLayout
                onSave={onSave}
                >
                <Body
                    balance={balance}

                    gate={gate}
                    ku={ku}
                    mexc={mexc}
                    huobi={huobi}
                    
                    setGate={setGate}
                    setKu={setKu}
                    setMexc={setMexc}
                    setHuobi={setHuobi}
                    />
            </SettingsLayout>
            
        </ContentLayout>
    )
}

export default ApiPage;