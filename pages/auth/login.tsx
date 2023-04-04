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
import TwoAuthModal from "@/pageModules/auth/modals/TwoAuthModal/TwoAuthModal";
import styles from './style.module.scss';

const LoginPage = () => {
    const [passResetModal, setPassResetModal] = useState<boolean>(false)
    const [twoAuthModal, setTwoAuthModal] = useState<boolean>(false)

    const openPassResetModal = () => setPassResetModal(true)
    const closePassResetModal = () => setPassResetModal(false)
    const openTwoAuthModal = () => setTwoAuthModal(true)
    const closeTwoAuthModal = () => setTwoAuthModal(false)

    

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
                                    placeholder="debra.holt@example.com"
                                    label="Email"
                                    />
                            </Col>
                            <Col span={24}>
                                <Input
                                    type="password"
                                    label="Пароль"
                                    placeholder="Ваш пароль"
                                    />
                            </Col>
                            <Col span={24}>
                                <Checkbox
                                    id="save-user"
                                    text="Запомнить меня"
                                    />
                            </Col>
                            <Col span={24}>
                                <span onClick={openPassResetModal} className="def-link">Забыли пароль?</span>
                            </Col>
                            <Col span={24}>
                                <Button
                                    // onClick={openTwoAuthModal}
                                    text="Войти"
                                    fill
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