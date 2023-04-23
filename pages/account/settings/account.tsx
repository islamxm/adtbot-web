import ContentLayout from "@/components/ContentLayout/ContentLayout";
import Body from "@/pageModules/settings/account/components/Body/Body";
import SettingsLayout from "@/pageModules/settings/components/SettingsLayout/SettingsLayout";
import {useState, useEffect, useCallback} from 'react';
import ApiService from '@/service/apiService';
import { useAppSelector } from '@/hooks/useTypesRedux';
import Head from "next/head";
import { useAppDispatch } from "@/hooks/useTypesRedux";
import { updateUserData } from "@/store/actions";
import notify from "@/helpers/notify";
const service = new ApiService()

const AccountPage = () => {
    const dispatch = useAppDispatch()
    const {tokens: {access}, userData} = useAppSelector(s => s)
    const [load, setLoad] = useState(false)

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [old_password, setOld_password] = useState('')
    const [rep, setRep] = useState('')
    const [tg_notifications_enabled, settg_notifications_enabled] = useState(false)
    const [email_notifications_enabled, setemail_notifications_enabled] = useState(false)
    

    useEffect(() => {
        if(userData) {
            setUsername(userData?.username)
            setEmail(userData?.email)
            setemail_notifications_enabled(userData?.email_notifications_enabled)
            settg_notifications_enabled(userData?.tg_notifications_enabled)
        }
    }, [userData])



    const changeData = () => {
        if(access) {
            setLoad(true)
            const body: {
                username?: string,
                password?: string,
                old_password?: string
                email?: string
            } = {}
            if(username) {
                body.username = username
            }
            if(email) {
                body.email = email
            }
            if(old_password) {
                body.old_password = old_password
            }
            if(password) {
                body.password = password
            }

            service.editUserData(body, access).then(res => {
                if(res?.detail) {
                    notify('Произошла ошибка', 'ERROR')
                    if(userData) {
                        setUsername(userData?.username)
                        setEmail(userData?.email)
                    }
                }
            }).finally(() => setLoad(false))

            
        }
    }



    const editEmailStatus = (status: boolean) => {
        if(access) {
            service.setEmailNot(status, access).then(res => {
            
                if(res === true) {
                    notify('Статус уведомлений на почту изменен', 'SUCCESS')
                    setemail_notifications_enabled(status)
                } else {
                    notify('Произошла ошибка при изменении статуса уведомлений на почту', 'ERROR')
                    setemail_notifications_enabled(!status)
                }
            })
        }
        
    }

    const editTgStatus = (status: boolean) => {
        if(access) {

            service.setTgNot(status, access).then(res => {
               
                if(res === true) {
                    notify('Статус уведомлений на телеграм изменен', 'SUCCESS')  
                    settg_notifications_enabled(status)
                } else {
                    settg_notifications_enabled(!status)
                    notify('Произошла ошибка при изменении статуса уведомлений на телеграм', 'ERROR')
                }
            })
        }
    }
 


    return (
        <ContentLayout
            head="Аккаунт"
            >
            <Head><title>Аккаунт | ADTBot</title></Head>
            <SettingsLayout
                onSave={changeData}
                load={load}
                // disabled={}
                >
                <Body
                    submitEmailNot={editEmailStatus}
                    submitTgNot={editTgStatus}
                    tg_notifications_enabled={tg_notifications_enabled}
                    email_notifications_enabled={email_notifications_enabled}
                    setemail_notifications_enabled={setemail_notifications_enabled}
                    settg_notifications_enabled={settg_notifications_enabled}
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