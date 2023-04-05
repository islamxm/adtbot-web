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


const service = new ApiService();

const LoginPage = () => {
    const recapRef = React.createRef<any>()
    const [passResetModal, setPassResetModal] = useState<boolean>(false)
    const [twoAuthModal, setTwoAuthModal] = useState<boolean>(false)

    const [load, setLoad] = useState(false);

    const [captcha_token, setcaptcha_token] = useState('')
    const [grant_type, setGrant_type] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [scope, setScope] = useState('')
    const [totp_code, setTotp_code] = useState('')

    const [saveMe, setSaveMe] = useState(false);

    const openPassResetModal = () => setPassResetModal(true)
    const closePassResetModal = () => setPassResetModal(false)
    const openTwoAuthModal = () => setTwoAuthModal(true)
    const closeTwoAuthModal = () => setTwoAuthModal(false)


    const onSubmit = useCallback(() => {
        setLoad(true)
        // service.getOAuth2Token({
        //     grant_type,
        //     username,
        //     password,
        //     totp_code,
        //     scope
        // }, captcha_token).then(res => {
        //     if(saveMe) {
        //         //save user in cookies
        //     }
        //     console.log(res)
        // }).finally(() => {
        //     setLoad(false)
        // })
    }, [username, password, scope, totp_code, grant_type, captcha_token, saveMe])



    return (
        <PageLayout>

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
                                    placeholder="Username"
                                    label="Username"
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
                                <span onClick={openPassResetModal} className="def-link">Забыли пароль?</span>
                            </Col>
                            <Col span={24}>
                                <ReCAPTCHA
                                    sitekey={'6Ld4-E4lAAAAANg8LEy8oig45CXsovYV9z5Wbxx6'}
                                    size={'normal'}
                                    className="custom-recap"
                                    ref={recapRef}
                                    onChange={e => {
                                        if(e) {
                                            console.log(e)
                                            setcaptcha_token(e)
                                        }
                                    }}
                                    />
                            </Col>
                            <Col span={24}>
                                <Button
                                    disabled={username && captcha_token && password && totp_code && scope ? false : true}
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