import styles from './TabBody.module.scss';
import {Row, Col} from 'antd';
import Input from '@/components/Input/Input';
import IpTable from '../IpTable/IpTable';
import Ex from '../Ex/Ex';
import { IKey } from '@/pages/account/settings/api';
import {FC} from 'react';

interface I {
    testTitle?: string,
    values: IKey,
    setValues: (...args: any[]) => any,
    ips?: string[],
    balance?: any
}


const TabBody:FC<I> = ({
    testTitle,
    values,
    setValues,
    balance,
    ips
}) => {

    return (
        <div className={styles.wrapper}>
            <Row gutter={[35,35]}>

                <Col span={24}>
                    Нет аккаунта на {testTitle}? <a className='def-link' href="#" target={'_blank'}>Зарегистрироваться</a>
                </Col>

                
                <Col span={24}>
                    <Row gutter={[20,20]}>
                        <Col span={24}>
                            Подключите ваш аккаунт биржи Gate.io, заполнив соответствующие поля API ключей.<br/>
                            После ввода ключей нажмите кнопку “Сохранить”.
                        </Col>
                        <Col span={24}>
                            <Input
                                // label='Публичный ключ'
                                value={values?.public}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValues((s: any) => ({...s, public: e.target.value}))}
                                nodeLabel={
                                    <div className={styles.pb}>
                                        Публичный ключ  
                                    </div>
                                }
                                style={{maxWidth: 455}}
                                placeholder={'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'}
                                />
                        </Col>
                        <Col span={24}>
                            <Input
                                value={values?.private}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValues((s: any) => ({...s, private: e.target.value}))}
                                nodeLabel={
                                    <div className={styles.pb}>
                                        Приватный ключ
                                    </div>
                                }
                                style={{maxWidth: 455}}
                                placeholder={'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'}
                                />
                        </Col>
                        <Col span={24}>
                            <Row gutter={[15,15]}>
                                <Col span={24}>
                                ВНИМАНИЕ! В целях безопасности, в настройках API ключа на Gate.io ограничьте доступ по IP адресам и разрешите использовать только следующие адреса:
                                </Col>
                                <Col span={24}>
                                    <IpTable values={ips}/>
                                </Col>
                            </Row>
                        </Col>
                        {
                            balance ? (
                                <Col span={24}>
                                    <div className={styles.balance}>
                                        Баланс на {testTitle}  <span style={{color: 'var(--green)'}}>{balance} USDT</span>
                                    </div>
                                    
                                </Col>
                            ) : null
                        }
                       
                    </Row>
                </Col>


                <Col span={24}>
                    <Ex/>
                </Col>

            </Row>
        </div>
    )
}

export default TabBody;