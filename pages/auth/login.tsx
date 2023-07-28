import PageLayout from "@/components/PageLayout/PageLayout";
import {Row, Col} from 'antd';
import PromoSlider from "@/pageModules/auth/components/PromoSlider/PromoSlider";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import AuthForm from "@/pageModules/auth/components/AuthForm/AuthForm";
import Checkbox from "@/components/Checkbox/Checkbox";
import Link from "next/link";
import PassResetModal from "@/pageModules/auth/modals/PassResetModal/PassResetModal";
import {useEffect, useState, useCallback} from 'react';
import TwoAuthModal from "@/pageModules/auth/modals/TwoAuthModal/TwoAuthModal";
import styles from './style.module.scss';
import ApiService from "@/service/apiService";
import ReCAPTCHA from "react-google-recaptcha";
import Reaptcha from 'reaptcha';
import React from 'react';
import { Cookies } from "typescript-cookie";
import { useAppDispatch, useAppSelector } from "@/hooks/useTypesRedux";
import { updateTokens, updateCaptcha } from "@/store/actions";
import Router, { useRouter } from "next/router";
import notify from "@/helpers/notify";
import Head from "next/head";
// import backendErrorStatuses from "@/helpers/backendErrorStatuses";
import backendErrorStatuses from "@/helpers/backendErrorStatuses";

const service = new ApiService();

const LoginPage = () => {
    const [recapRef, setRecapRef] = useState<any>(null)
    const {query} = useRouter()
    const dispatch = useAppDispatch();
    const [passResetModal, setPassResetModal] = useState<boolean>(false)
    const [twoAuthModal, setTwoAuthModal] = useState<boolean>(false)

    const [load, setLoad] = useState(false);

    const [captcha_token, setcaptcha_token] = useState('')
    const [grant_type, setGrant_type] = useState('password')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [scope, setScope] = useState('')
    const [totp_code, setTotp_code] = useState('')

    const [saveMe, setSaveMe] = useState(true);


    const [totp_token, setTotp_token] = useState('')


    const openPassResetModal = () => setPassResetModal(true)
    const closePassResetModal = () => setPassResetModal(false)
    const openTwoAuthModal = () => setTwoAuthModal(true)
    const closeTwoAuthModal = () => setTwoAuthModal(false)


    useEffect(() => {
        if(query?.verify && typeof query?.verify === 'string' && query?.verify === '1') {
            notify('Почта подтверждена', 'SUCCESS')
        } 
    }, [query])


    const onSubmit = () => {
        setLoad(true)
        service.getOAuth2Token({
            captcha_token,
            grant_type,
            username,
            password,
            scope,
        }).then(res => {
            console.log(res)
            
            if(res?.status === 200) {
                res?.json().then(data => {
                    if(saveMe) {
                        console.log(data)
                        Cookies.set('adtbot-console-access-token', data?.access_token) //access_token
                        Cookies.set('adtbot-console-refresh-token', data?.refresh_token) //refresh_token
                        dispatch(updateTokens({access: data?.access_token, refresh: data?.refresh_token}))
                        if(data?.is_first_login === true) {
                            Router.push('/')
                        }
                        if(data?.is_first_login === false) {
                            Router.push('/account/bots')
                        }
                    } else {
                        Cookies.remove('adtbot-console-access-token') //access_token
                        Cookies.remove('adtbot-console-refresh-token') //refresh_token
                        dispatch(updateTokens({access: data?.access_token, refresh: data?.refresh_token}))
                        if(data?.is_first_login === true) {
                            Router.push('/')
                        }
                        if(data?.is_first_login === false) {
                            Router.push('/account/bots')
                        }
                    }
                    
                })
            } else {
                res?.json().then(data => {
                    if(data?.status === 20) {
                        setTotp_token(data?.totp_verify_token)
                        openTwoAuthModal()
                    } else {

                        backendErrorStatuses(data?.status)
                        notify('Произошла ошибка, проверьте пожалуйста данные', 'ERROR')
                        recapRef?.reset()
                    }
                })
            } 
        }).finally(() => {
            setLoad(false)
        })
    }



    const resetData = () => {
        setTotp_token('')
        closeTwoAuthModal()
    }


    return (
        <PageLayout>
            <Head><title>Вход | ADTBot</title></Head>

            {/* MODALS */}
            <PassResetModal
                centered
                open={passResetModal}
                onCancel={closePassResetModal}
                width={350}
                title={'Восстановление пароля'}
                />
            <TwoAuthModal
                token={totp_token}
                open={twoAuthModal}
                onCancel={closeTwoAuthModal}
                width={455}
                centered
                saveMe={saveMe}
                onResetData={resetData}
                data={{
                    captcha_token,
                    grant_type,
                    username,
                    password,
                    scope,
                }}
                />
            <Row 
                className={styles.wrapper}
                gutter={[0, 0]} align={'middle'}>
                <Col 
                    className={styles.promo}
                    md={12}
                    span={24}
                    >
                    <PromoSlider/>
                </Col>
                <Col 
                    span={24}
                    md={12}>
                    <AuthForm
                        title="И снова здравствуйте"
                        >
                        <Row gutter={[15,15]}>
                            <Col span={24}>
                                <Input
                                    value={username}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                                    placeholder="Email"
                                    label="Ваш Email"
                                    type="email"
                                    />
                            </Col>
                            <Col span={24}>
                                <Input
                                    value={password}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                    type="password"
                                    label="Ваш пароль"
                                    placeholder="Пароль"
                                    />
                            </Col>
                            <Col span={24}>
                                <Checkbox
                                    checked={saveMe}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSaveMe(e.target.checked)}
                                    id="save-user"
                                    text="Запомнить меня"
                                    />
                            </Col>
                            <Col span={24}>
                                <Link href={'/auth/forgot-password'} className="def-link">Забыли пароль?</Link>
                            </Col>
                            <Col span={24}>
                                <Reaptcha
                                    sitekey={'6Ld4-E4lAAAAANg8LEy8oig45CXsovYV9z5Wbxx6'}
                                    size={'normal'}
                                    className="custom-recap"
                                    ref={e => setRecapRef(e)}
                                    onVerify={e => {
                                        if(e) {
                                            setcaptcha_token(e)
                                        }
                                    }}
                                    onExpire={() => console.log('expired')}
                                    />
                            </Col>
                           
                            <Col span={24}>
                                <Button
                                    load={load}
                                    disabled={username && captcha_token && password ? false : true}
                                    text="Войти"
                                    fill
                                    onClick={onSubmit}
                                    />
                            </Col>
                            <Col span={24}>
                                <div style={{textAlign: 'center'}}>
                                    Нет аккаунта? <Link className="def-link" href={'/auth/join'}>Зарегистрироваться</Link>
                                </div>
                            </Col>
                        </Row>
                    </AuthForm>
                </Col>
            </Row>
        </PageLayout>
    )
}

export default LoginPage;