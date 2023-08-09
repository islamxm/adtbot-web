import PageLayout from "@/components/PageLayout/PageLayout";
import { Row, Col } from "antd";
import PromoSlider from "@/pageModules/auth/components/PromoSlider/PromoSlider";
import Input from "@/components/Input/Input";
import AuthForm from "@/pageModules/auth/components/AuthForm/AuthForm";
import Checkbox from "@/components/Checkbox/Checkbox";
import {useState, useCallback, useRef, useEffect} from 'react';
import UsePolicyModal from "@/pageModules/auth/modals/UsePolicyModal/UsePolicyModal";
import Button from "@/components/Button/Button";
import Link from "next/link";
import styles from './style.module.scss';
import ApiService from "@/service/apiService";
import Reaptcha from 'reaptcha';
import React from "react";
import {BsCheckLg} from 'react-icons/bs';
import notify from "@/helpers/notify";
import Head from "next/head";
import { useAppSelector, useAppDispatch } from "@/hooks/useTypesRedux";
import { useRouter } from "next/router";
import backendErrorStatuses from "@/helpers/backendErrorStatuses";

const service = new ApiService;

const SignupPage = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const [usePolicyModal, setUsePolicyModal] = useState<boolean>(false)

    const closeUsePolicyModal = () => setUsePolicyModal(false)
    const openUsePolicyModal = () => setUsePolicyModal(true)

    const [load, setLoad] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [username, setUsername] = useState('')
    const [captcha_token, setcaptcha_token] = useState('')
    const [agree, setAgree] = useState(true)
    const [success, setSuccess] = useState(false)
    const [recapRef, setRecapRef] = useState<any>(null)
    const [referal_code, setreferal_code] = useState('')

    useEffect(() => {
        if(router?.query?.referal_code && typeof router?.query?.referal_code === 'string') {
            setreferal_code(router?.query?.referal_code)
        }
    }, [router])
    




    const onSubmit =  () => {
        if(process?.browser) {
            setLoad(true)
            if(referal_code) {
                const body = {
                    username,
                    password,
                    email,
                    is_superuser: false,
                    captcha_token,
                    redirect_url: window.location.origin + '/auth/login?verify=1',
                    referal_code
                }
                service && service.register(body).then(res => {
                    res?.status === 200 && setSuccess(true)
                    if(res?.status !== 200) {
                        notify('Произошла ошибка, проверьте пожалуйста данные', 'ERROR')
                        res?.json().then(r => {
                            backendErrorStatuses(r?.status)
                            recapRef?.reset()
                        })
                    }
                }).finally(() => {
                    setLoad(false)
                })
            } else {
                const body = {
                    username,
                    password,
                    email,
                    is_superuser: false,
                    captcha_token,
                    redirect_url: window.location.origin + '/auth/login?verify=1',
                }
                service && service.register(body).then(res => {
                    res?.status === 200 && setSuccess(true)
                    if(res?.status !== 200) {
                        notify('Произошла ошибка, проверьте пожалуйста данные', 'ERROR')
                        res?.json().then(r => {
                            backendErrorStatuses(r?.status)
                            recapRef?.reset()
                        })
                    }
                }).finally(() => {
                    setLoad(false)
                })
            }
            
        }
        
    }



   


    return (
        <PageLayout>

            <Head>
                <title>Регистрация | ADTBot</title>
            </Head>

            {/* MODALS */}
            <UsePolicyModal
                title={'Условия использования'}
                open={usePolicyModal}
                onCancel={closeUsePolicyModal}
                width={635}
                />

            <Row 
                className={styles.wrapper}
                gutter={[0,0]} align={'middle'}>
                <Col 
                    className={styles.promo}
                    span={24}
                    md={12}>
                    <PromoSlider/>
                </Col>
                <Col 
                    md={12}
                    span={24}>
                    {
                        success ? (
                            <div className={`${styles.success}`}>
                                <div className={styles.icon}>
                                    <BsCheckLg size={40}/>
                                </div>
                                <h4 className={'heading_4'}>Регистрация прошла успешно!<br/> Проверьте, пожалуйста, вашу почту</h4>
                            </div>
                        ) : (
                            <AuthForm
                                title="Добро пожаловать в ADTBot"
                                >
                                <Row gutter={[15,15]}>
                                    <Col span={24}>
                                        <Input
                                            placeholder="Bessie Cooper"
                                            label="Ваше реальное имя"
                                            value={username}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                                            />
                                    </Col>
                                    <Col span={24}>
                                        <Input
                                            placeholder="Email"
                                            label="Ваш Email"
                                            value={email}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                            />
                                    </Col>
                                    <Col span={24}>
                                        <Input
                                            label="Придумайте пароль"
                                            placeholder="Пароль"
                                            type={'password'}
                                            value={password}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                            />
                                    </Col>
                                    <Col span={24}>
                                        <Input
                                            label="Повторите пароль"
                                            placeholder="Пароль"
                                            type={"password"}
                                            errorText={'Пароли не совпадают'}
                                            error={repeatPassword && (repeatPassword !== password) ? true : false}
                                            value={repeatPassword}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRepeatPassword(e.target.value)}
                                            />
                                    </Col>
                                    <Col span={24}>
                                        <Checkbox
                                            checked={agree}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAgree(e.target.checked)}
                                            id="accept-policy"
                                            text={
                                                <>
                                                    Я принимаю <span onClick={openUsePolicyModal} style={{color: 'var(--blue)'}}>Условия использования</span>
                                                </>
                                            }
                                            />
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
                                            disabled={username && email && captcha_token && password && (repeatPassword && (repeatPassword === password)) && agree ? false : true}
                                            text="Начать бесплатно"
                                            fill
                                            onClick={onSubmit}
                                            />
                                    </Col>
                                    <Col span={24}>
                                        <div style={{textAlign: 'center'}}>
                                            Уже есть аккаунт? <Link className="def-link" href={'/auth/login'}>Авторизоваться</Link>
                                        </div>
                                    </Col>
                                
                                </Row>   
                            </AuthForm>
                        )
                    }
                </Col>
            </Row>
        </PageLayout>
    )
}

export default SignupPage;