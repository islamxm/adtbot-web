import styles from './TabBody.module.scss';
import {Row, Col} from 'antd';
import Input from '@/components/Input/Input';
import IpTable from '../IpTable/IpTable';
import Ex from '../Ex/Ex';

const TabBody = ({
    testTitle
}: {testTitle?: string}) => {

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
                                label='Публичный ключ'
                                style={{maxWidth: 455}}
                                placeholder={'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'}
                                />
                        </Col>
                        <Col span={24}>
                            <Input
                                label='Приватный ключ'
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
                                    <IpTable/>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <div className={styles.balance}>
                                Баланс на Gate.io  <span style={{color: 'var(--green)'}}>125 USDT</span>
                            </div>
                            
                        </Col>
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