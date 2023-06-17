import PageLayout from "@/components/PageLayout/PageLayout";
import {Row, Col} from 'antd';
import PromoSlider from "@/pageModules/auth/components/PromoSlider/PromoSlider";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import AuthForm from "@/pageModules/auth/components/AuthForm/AuthForm";
import Checkbox from "@/components/Checkbox/Checkbox";
import Link from "next/link";
import PassResetModal from "@/pageModules/auth/modals/PassResetModal/PassResetModal";
import {useState} from 'react';
import Head from "next/head";
import { useAppSelector, useAppDispatch } from "@/hooks/useTypesRedux";
import ApiService from "@/service/apiService";
import Router from "next/router";
import notify from "@/helpers/notify";
import Reaptcha from 'reaptcha';

const service = new ApiService()


const ResetPage = () => {
    const [load, setLoad] = useState(false)
    const [code, setCode] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [captcha_token, setcaptcha_token] = useState('')
    
    const [recapRef, setRecapRef] = useState<any>(null)

    const onSubmit = () => {
        if(password) {
            setLoad(true)
            const body = {
                code,
                password,
                captcha_token
            }
            service.resetPassword(body).then(res => {
                if(res === true) {
                    Router.push('/auth/login')
                    notify('Код изменен', 'SUCCESS')
                } else {
                    notify('Произошла ошибка', 'ERROR')
                }
                recapRef?.reset()
            }).finally(() => setLoad(false))
        }

    }


    return (
        <>
            <Head>
                <title>Изменить пароль | ADTBot</title>
            </Head>
            <PageLayout>
                <Row gutter={[0,0]} align={'middle'}>
                    <Col span={12}>
                        <PromoSlider/>
                    </Col>
                    <Col
                        md={12}
                        span={24}
                        >
                        <AuthForm
                            title="Изменить пароль"
                            >
                            <Row gutter={[15,15]}>
                                <Col span={24}>
                                    <Input
                                        value={code}
                                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
                                        placeholder="Код восстановления"
                                        label="Код восстановления"
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        value={password}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                        type="password"
                                        placeholder="Новый пароль"
                                        label="Новый пароль"
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        value={repeatPassword}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRepeatPassword(e.target.value)}
                                        type="password"
                                        placeholder="Повторите пароль"
                                        label="Повторите пароль"
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
                                        disabled={(code && password && captcha_token && (password === repeatPassword)) ? false : true}
                                        load={load}
                                        onClick={onSubmit}
                                        text="Сохранить"
                                        fill
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