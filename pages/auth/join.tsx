import PageLayout from "@/components/PageLayout/PageLayout";
import { Row, Col } from "antd";
import PromoSlider from "@/pageModules/auth/components/PromoSlider/PromoSlider";
import Input from "@/components/Input/Input";
import AuthForm from "@/pageModules/auth/components/AuthForm/AuthForm";
import Checkbox from "@/components/Checkbox/Checkbox";
import {useState, useCallback} from 'react';
import UsePolicyModal from "@/pageModules/auth/modals/UsePolicyModal/UsePolicyModal";
import Button from "@/components/Button/Button";
import Link from "next/link";
import styles from './style.module.scss';
import ApiService from "@/service/apiService";


const service = new ApiService;

const SignupPage = () => {
    const [usePolicyModal, setUsePolicyModal] = useState<boolean>(false)

    const closeUsePolicyModal = () => setUsePolicyModal(false)
    const openUsePolicyModal = () => setUsePolicyModal(true)

    const [load, setLoad] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [username, setUsername] = useState('')
    const [agree, setAgree] = useState(false)


    const onSubmit = useCallback(() => {
        setLoad(true)
        service && service.register({
            email,
            password,
            username,
            is_superuser: false
        }).then(res => {
            console.log(res)
        }).finally(() => {
            setLoad(false)
        })
    }, [service, username, password, repeatPassword, email, agree])




    return (
        <PageLayout>

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
                                <Button
                                    load={load}
                                    disabled={username && email && password && (repeatPassword && (repeatPassword === password)) && agree ? false : true}
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
                </Col>
            </Row>
        </PageLayout>
    )
}

export default SignupPage;