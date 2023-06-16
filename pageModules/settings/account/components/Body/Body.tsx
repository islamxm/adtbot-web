import styles from './Body.module.scss';
import {Row, Col} from 'antd';
import Input from '@/components/Input/Input';
import Switch from '@/components/Switch/Switch';
import Radio from '@/components/Radio/Radio';
import ThemeSwitch from '@/components/ThemeSwitch/ThemeSwitch';
import {useState, useEffect, useCallback} from 'react';
import ApiService from '@/service/apiService';
import { useAppSelector } from '@/hooks/useTypesRedux';


const service = new ApiService()


const Body = (props: {
    username?: string,
    email?: string,
    password?: string,
    old_password?: string,
    rep?: string,
    email_notifications_enabled: boolean,
    tg_notifications_enabled: boolean,
    setemail_notifications_enabled: (...args: any[]) => any,
    settg_notifications_enabled: (...args: any[]) => any,
    submitEmailNot: (status: boolean) => any,
    submitTgNot: (status: boolean) => any,
    setEmail: (...args: any[]) => any,
    setUsername: (...args: any[]) => any
    setPassword: (...args: any[]) => any
    setOld_password: (...args: any[]) => any
    setRep: (...args: any[]) => any
}) => {
    const {
        email, 
        username, 
        password, 
        old_password, 
        rep,
        email_notifications_enabled,
        tg_notifications_enabled, 
        submitEmailNot,
        submitTgNot,
        setemail_notifications_enabled,
        settg_notifications_enabled,
        setEmail, 
        setPassword, 
        setOld_password, 
        setRep, 
        setUsername
    } = props


    


    return (
        <div className={styles.wrapper}>
            <Row gutter={[35,35]}>
                <Col span={24}>
                    <Row gutter={[15,15]}>
                        <Col span={24}>
                            <Input
                                readOnly
                                type='email'
                                label='Email'
                                placeholder='debra.holt@example.com'
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                />
                        </Col>
                        <Col span={24}>
                            <Input
                                label='Имя'
                                placeholder='Bessie Cooper'
                                value={username}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                                />
                        </Col>
                        <Col span={24}>
                            <Input
                                label='Текущий пароль'
                                type='password'
                                placeholder='*************************'
                                value={old_password}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOld_password(e.target.value)}
                                />
                        </Col>
                        <Col span={24}>
                            <Input
                                label='Новый пароль'
                                type='password'
                                placeholder='*************************'
                                value={password}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                />
                        </Col>
                        <Col span={24}>
                            <Input
                                label='Повторить новый пароль'
                                type='password'
                                placeholder='*************************'
                                value={rep}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRep(e.target.value)}
                                error={rep && rep !== password ? true : false}
                                errorText='Пароли не совпадают'
                                />
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <div className={styles.ex}>
                        <Row gutter={[35,35]}>
                            <Col span={24}>
                                <div className={styles.part}>
                                    <h3 className={styles.head}>Управление уведомлениями</h3>
                                    <div className={styles.body}>
                                        <Row gutter={[15,15]}>
                                            <Col span={24}>
                                                <Switch
                                                    checked={email_notifications_enabled}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                        setemail_notifications_enabled(e.target.checked)
                                                        submitEmailNot(e.target.checked)
                                                    }}
                                                    id='mail'
                                                    labelText='Почта'
                                                    />
                                            </Col>
                                            <Col span={24}>
                                                <Switch
                                                    checked={tg_notifications_enabled}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                        settg_notifications_enabled(e.target.checked)
                                                        submitTgNot(e.target.checked)
                                                    }}
                                                    id='telegram'
                                                    labelText='Телеграм'
                                                    />
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                            {/* <Col span={24}>
                                <div className={styles.part}>
                                    <h3 className={styles.head}>Язык</h3>
                                    <div className={styles.body}>
                                        <Row gutter={[15,15]}>
                                            <Col span={24}>
                                                <Radio
                                                    value={'en'}
                                                    id='en'
                                                    name='lang'
                                                    labelText='Английский'
                                                    />
                                            </Col>
                                            <Col span={24}>
                                                <Radio
                                                    id='ua'
                                                    labelText='Українська'
                                                    value={'ua'}
                                                    name={'lang'}
                                                    />
                                            </Col>
                                            <Col span={24}>
                                                <Radio
                                                    id='ru'
                                                    labelText='Русский'
                                                    value={'ru'}
                                                    name={'lang'}
                                                    />
                                            </Col>
                                            
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className={styles.part}>
                                    <div className={styles.body}>
                                        <ThemeSwitch
                                            id='theme'
                                            labelText='Цветовой режим'
                                            />
                                    </div>
                                </div>
                            </Col> */}
                        </Row>
                        
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Body;