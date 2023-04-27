import ContentLayout from "@/components/ContentLayout/ContentLayout";
import Body from "@/pageModules/settings/api/components/Body/Body";
import SettingsLayout from "@/pageModules/settings/components/SettingsLayout/SettingsLayout";
import Head from "next/head";
import { useState, useEffect } from "react";


export interface IKey {
    public?: string,
    private?: string
}

const ApiPage = () => {

    const [gate, setGate] = useState<IKey>({public: '', private: ''})
    const [ku, setKu] = useState<IKey>({public: '', private: ''})
    const [mexc, setMexc] = useState<IKey>({public: '', private: ''})
    const [huobi, setHuobi] = useState<IKey>({public: '', private: ''})


    useEffect(() => {
        console.log('ku', ku)
        console.log('gate', gate)
    }, [gate, ku])


    return (
        <ContentLayout
            head="Ключи API"
            >
            <Head><title>Ключи API | ADTBot</title></Head>
            <SettingsLayout
                onSave={() => {}}
                >
                <Body
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