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
import ReCAPTCHA from "react-google-recaptcha";
import React from "react";
import {BsCheckLg} from 'react-icons/bs';
import notify from "@/helpers/notify";
import Head from "next/head";
import { useAppSelector, useAppDispatch } from "@/hooks/useTypesRedux";
import { updateCaptcha } from "@/store/actions";
import { useRouter } from "next/router";

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
    const recapRef = React.createRef<any>()


  
    // useEffect(() => {
    //     if(recapRef) {
    //         recapRef?.current?.getValue() ? setcaptcha_token(recapRef?.current?.getValue()) : recapRef?.current?.reset()
    //     }


    //     return () => {
    //         recapRef?.current?.reset()
    //     }
    // }, [recapRef])


    useEffect(() => {
        console.log(router)
        process?.browser && console.log()
    }, [router])

    const onSubmit =  () => {
        if(process?.browser) {
            setLoad(true)
            const body = {
                username,
                password,
                email,
                is_superuser: false,
                captcha_token,
                redirect_url: window.location.origin + '/auth/login?verify=1'
                // referal_code: ''
            }
            service && service.register(body).then(res => {
                console.log(res)
                res?.status === 400 && notify('Произошла ошибка, проверьте пожалуйста данные', 'ERROR')
                res?.status === 200 && setSuccess(true)
            }).finally(() => {
                setLoad(false)
            })
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
                                <h4 className={'heading_4'}>Регистрация прошла успешно, проверьте пожалуйста свою почту</h4>
                            </div>
                        ) : (
                            <AuthForm
                                title="Зарегистрироваться"
                                >
                                <Row gutter={[15,15]}>
                                    <Col span={24}>
                                        <Input
                                            placeholder="Bessie Cooper"
                                            label="Имя"
                                            value={username}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                                            />
                                    </Col>
                                    <Col span={24}>
                                        <Input
                                            placeholder="debra.holt@example.com"
                                            label="Email"
                                            value={email}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                            />
                                    </Col>
                                    <Col span={24}>
                                        <Input
                                            label="Пароль"
                                            placeholder="Ваш пароль"
                                            type={'password'}
                                            value={password}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                            />
                                    </Col>
                                    <Col span={24}>
                                        <Input
                                            label="Повторить пароль"
                                            placeholder="Ваш пароль"
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
                                        <ReCAPTCHA
                                            sitekey={'6Ld4-E4lAAAAANg8LEy8oig45CXsovYV9z5Wbxx6'}
                                            size={'normal'}
                                            className="custom-recap"
                                            ref={recapRef}
                                            onChange={e => {
                                                if(e) {
                                                    dispatch(updateCaptcha(e))
                                                    setcaptcha_token(e)
                                                }
                                            }}
                                            />
                                    </Col>
                                    <Col span={24}>
                                        <Button
                                            load={load}
                                            disabled={username && email && captcha_token && password && (repeatPassword && (repeatPassword === password)) && agree ? false : true}
                                            text="Зарегистрироваться"
                                            fill
                                            onClick={onSubmit}
                                            />
                                    </Col>
                                    <Col span={24}>
                                        <div style={{textAlign: 'center'}}>
                                            У вас уже есть аккаунт? <Link className="def-link" href={'/auth/login'}>Авторизоваться</Link>
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