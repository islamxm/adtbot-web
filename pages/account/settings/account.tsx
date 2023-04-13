import ContentLayout from "@/components/ContentLayout/ContentLayout";
import Body from "@/pageModules/settings/account/components/Body/Body";
import SettingsLayout from "@/pageModules/settings/components/SettingsLayout/SettingsLayout";
import {useState, useEffect, useCallback} from 'react';
import ApiService from '@/service/apiService';
import { useAppSelector } from '@/hooks/useTypesRedux';
import Head from "next/head";


const service = new ApiService()

const AccountPage = () => {
    const {tokens: {access}} = useAppSelector(s => s)
    const [load, setLoad] = useState(false)

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [old_password, setOld_password] = useState('')
    const [rep, setRep] = useState('')


    const getData = useCallback(() => {
        if(access) {
            service.getUserData(access).then(res => {
                console.log(res)
            })
        }
    }, [access])


    useEffect(() => {
        if(access) {
            getData()
        }
    }, [access])


    const editData = useCallback(() => {
        if(access) {
            service.editUserData({
                username,
                email,
                password,
                old_password
            }, access).then(res => {
                console.log(res)
            }).finally(() => {
                setLoad(false)
            })
        }
    }, [access, rep, username, password, old_password, email])


    return (
        <ContentLayout
            head="Аккаунт"
            >
            <Head><title>Аккаунт | ADTBot</title></Head>
            <SettingsLayout
                onSave={editData}
                load={load}
                // disabled={}
                >
                <Body
                    username={username}
                    email={email}
                    password={password}
                    old_password={old_password}
                    rep={rep}
                    setEmail={setEmail}
                    setUsername={setUsername}
                    setRep={setRep}
                    setPassword={setPassword}
                    setOld_password={setOld_password}
                    />
            </SettingsLayout>
            
        </ContentLayout>
    )
}

export default AccountPage;