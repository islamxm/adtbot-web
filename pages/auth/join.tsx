import PageLayout from "@/components/PageLayout/PageLayout";
import { Row, Col } from "antd";
import PromoSlider from "@/pageModules/auth/components/PromoSlider/PromoSlider";
import Input from "@/components/Input/Input";
import AuthForm from "@/pageModules/auth/components/AuthForm/AuthForm";
import Checkbox from "@/components/Checkbox/Checkbox";
import {useState} from 'react';
import UsePolicyModal from "@/pageModules/auth/modals/UsePolicyModal/UsePolicyModal";
import Button from "@/components/Button/Button";
import Link from "next/link";
import styles from './style.module.scss';

const SignupPage = () => {
    const [usePolicyModal, setUsePolicyModal] = useState<boolean>(false)

    const closeUsePolicyModal = () => setUsePolicyModal(false)
    const openUsePolicyModal = () => setUsePolicyModal(true)



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
                                    error
                                    errorText="Error message"
                                    placeholder="Bessie Cooper"
                                    label="Имя"
                                    />
                            </Col>
                            <Col span={24}>
                                <Input
                                    placeholder="debra.holt@example.com"
                                    label="Email"
                                    />
                            </Col>
                            <Col span={24}>
                                <Input
                                    label="Пароль"
                                    placeholder="Ваш пароль"
                                    type={'password'}
                                    />
                            </Col>
                            <Col span={24}>
                                <Input
                                    label="Повторить пароль"
                                    placeholder="Ваш пароль"
                                    type={"password"}
                                    />
                            </Col>
                            <Col span={24}>
                                <Checkbox
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
                                    text="Зарегистрироваться"
                                    fill
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