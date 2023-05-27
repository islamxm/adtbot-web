import PageLayout from "@/components/PageLayout/PageLayout";
import {Row, Col} from 'antd';
import PromoSlider from "@/pageModules/auth/components/PromoSlider/PromoSlider";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import AuthForm from "@/pageModules/auth/components/AuthForm/AuthForm";
import Checkbox from "@/components/Checkbox/Checkbox";
import Link from "next/link";
import PassResetModal from "@/pageModules/auth/modals/PassResetModal/PassResetModal";
import {useState, useRef, useEffect} from 'react';
import Head from "next/head";
import ApiService from "@/service/apiService";
import ReCAPTCHA from "react-google-recaptcha";
import Router from "next/router";
import notify from "@/helpers/notify";

const service = new ApiService()


const ResetPage = () => {
    const recapRef = useRef<any>(null)
    const [captcha_token, setcaptcha_token] = useState('')
    const [email, setEmail] = useState('')




    const [load, setLoad] = useState(false)



    const onSubmit = () => {
        if(email && captcha_token) {
            service.forgotPassword({email, captcha_token}).then(res => {
                if(res === true) {
                    Router.push('/auth/change-password')
                    notify('Код восстановления отправлен на вашу почту', 'INFO')
                } else {
                    
                }
            }).finally(() => {
                setLoad(false)
            })
        }    
    }



    return (
        <>
            <Head>
                <title>Забыл пароль | ADTBot</title>
            </Head>
            <PageLayout>

                <Row gutter={[0,0]} align={'middle'}>
                    <Col span={12}>
                        <PromoSlider/>
                    </Col>
                    <Col
                        md={12}
                        span={24}>
                        <AuthForm
                            title="Восстановление пароля"
                            >
                            <Row gutter={[15,15]}>
                            <Col span={24}>
                                                <Input
                                                    type="email"
                                                    placeholder="example@.com"
                                                    label="Ваш e-mail"
                                                    value={email}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
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
                                                            setcaptcha_token(e)
                                                        }
                                                    }}
                                                    />
                                            </Col>
                                            <Col span={24}>
                                                <Button
                                                    text="Отправить"
                                                    fill
                                                    disabled={email && captcha_token ? false : true}
                                                    onClick={onSubmit}
                                                    load={load}
                                                    />
                                            </Col>
                                            <Col span={24}>
                                                <Button
                                                    text="Отмена"
                                                    variant={'simple'}
                                                    fill
                                                    onClick={() => Router.push('/auth/login')}
                                                    />
                                            </Col>
                                
                            </Row>
                        </AuthForm>
                    </Col>
                </Row>
            </PageLayout>
        </> 
        
    )
}

export default ResetPage;