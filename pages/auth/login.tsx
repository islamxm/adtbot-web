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
import React from 'react';
import { Cookies } from "typescript-cookie";
import { useAppDispatch, useAppSelector } from "@/hooks/useTypesRedux";
import { updateTokens, updateCaptcha } from "@/store/actions";
import Router from "next/router";
import notify from "@/helpers/notify";
import Head from "next/head";


const service = new ApiService();

const LoginPage = () => {
    const recapRef = React.createRef<any>()
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

    const [saveMe, setSaveMe] = useState(false);





    const openPassResetModal = () => setPassResetModal(true)
    const closePassResetModal = () => setPassResetModal(false)
    const openTwoAuthModal = () => setTwoAuthModal(true)
    const closeTwoAuthModal = () => setTwoAuthModal(false)




    const onSubmit = () => {
        setLoad(true)
        service.getOAuth2Token({
            captcha_token,
            grant_type,
            username,
            password,
            scope,
            totp_code,
        }).then(res => {
            console.log(res)
            
            if(res?.status === 200) {
                res?.json().then(data => {
                    console.log(data)
                    if(saveMe) {
                        Cookies.set('adtbot-console-access-token', data?.access_token) //access_token
                        Cookies.set('adtbot-console-refresh-token', data?.refresh_token) //refresh_token
                        dispatch(updateTokens({access: data?.access_token, refresh: data?.refresh_token}))
                    } else {
                        Cookies.remove('adtbot-console-access-token') //access_token
                        Cookies.remove('adtbot-console-refresh-token') //refresh_token
                        dispatch(updateTokens({access: data?.access_token, refresh: data?.refresh_token}))
                    }
                    if(data?.is_first_login) {
                        Router.push('/')
                    } else {
                        Router.push('/account/bots')
                    }
                })
            } else {
                notify('Произошла ошибка, проверьте пожалуйста данные', 'ERROR')
                res?.json().then(data => {
                    console.log(data)
                })
            }
        }).finally(() => {
            setLoad(false)
        })
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
                open={twoAuthModal}
                onCancel={closeTwoAuthModal}
                width={455}
                centered
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
                        title="Вход"
                        >
                        <Row gutter={[15,15]}>
                            <Col span={24}>
                                <Input
                                    value={username}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                                    placeholder="example@mail.com"
                                    label="E-mail"
                                    type="email"
                                    />
                            </Col>
                            <Col span={24}>
                                <Input
                                    value={password}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                    type="password"
                                    label="Пароль"
                                    placeholder="Ваш пароль"
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
                                <ReCAPTCHA
                                    sitekey={'6Ld4-E4lAAAAANg8LEy8oig45CXsovYV9z5Wbxx6'}
                                    size={'normal'}
                                    className="custom-recap"
                                    ref={recapRef}
                                    onChange={e => {
                                        if(e) {
                                            setcaptcha_token(e)
                                        }
                                    }}
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
                                    У вас нет аккаунта? <Link className="def-link" href={'/auth/join'}>Создайте аккаунт</Link>
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