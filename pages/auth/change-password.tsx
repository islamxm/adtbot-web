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

const ResetPage = () => {
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
                    <Col span={12}>
                        <AuthForm
                            title="Изменить пароль"
                            >
                            <Row gutter={[15,15]}>
                                <Col span={24}>
                                    <Input
                                        type="password"
                                        placeholder="Новый пароль"
                                        label="Новый пароль"
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        type="password"
                                        placeholder="Повторите пароль"
                                        label="Повторите пароль"
                                        />  
                                </Col>
                                <Col span={24}>
                                    <Button
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