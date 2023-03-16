import styles from './Enable.module.scss';
import { QRCode, Row, Col } from 'antd';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { useEffect, useState } from 'react';
import StatusModal from '@/modals/StatusModal/StatusModal';


const Enable = ({
    setDone
}: {
    setDone: (arg: any) => any
}) => {
    const [code, setCode] = useState('');
    const [warnModal, setWarnModal] = useState(false)

    const closeWarnModal = () => setWarnModal(false);

    useEffect(() => {
        setWarnModal(true)
    }, [])


    return (
        <div className={styles.wrapper}>
            <StatusModal
                width={460}
                status={'error'}
                title={'Двухфакторная аутентификация не включена'}
                text={'2FA значительно повышает безопасность вашей учетной записи'}
                open={warnModal}
                onCancel={closeWarnModal}
                />
            <Row gutter={[35,35]}>
                <Col span={24}>
                    <p>
                    Двухфакторная аутентификация (2FA) значительно повышает безопасность вашей учетной записи и защищает ее от доступа посторонних лиц.
                    <br/>
                    <br/>
                    Реализация двухфакторной аутентификации обеспечивается посредством мобильного приложения Google Authenticator, доступного для устройств на базе Android и IOS.
                    <br/>
                    <br/>
                    После включения 2FA для доступа к учетной записи, кроме логина и пароля, вам понадобится динамический шестизначный код, генерируемый в приложении.
                    <br/>
                    <br/>
                    Перед включением 2FA установите Google Authenticator на устройство.
                    </p>
                </Col>
                <Col span={24}>
                    <div className={styles.main}>
                        <div className={styles.qr}>
                            <Row gutter={[15,15]}>
                                <Col span={24}>
                                    <p>
                                    Отсканируйте QR-код
                                    </p>
                                </Col>
                                <Col span={24}>
                                    <QRCode 
                                        size={260}
                                        color={'#6F91EE'}
                                        value='https://console.adtbot.com/'/>
                                </Col>
                                <Col>
                                    <p>Код из приложения</p>
                                </Col>
                            </Row>
                        </div>
                        <div className={styles.descr}>
                            <p>
                            Сохраните секретный ключ, запишите его в блокнот.
                            <br/>
                            <br/>
                            В случае утери секретного ключа, получение доступа к учетной записи или отключение 2FA станет невозможен без обращения в техническую поддержку. Процесс может занять до 30 дней.
                            <br/>
                            <br/>
                            Для активации 2FA отсканируйте QR-код или введите секретный ключ в Google Authenticator.
                            <br/>
                            <br/>
                            Секретный ключ: <span>kdgslgs8sdf40nd934mx3s89fugsd5gwrjwrw</span>
                            </p>
                        </div>
                    </div>
                </Col>
                <Col span={24}>
                    <div className={styles.check}>
                        <div className={styles.input}>
                            <Input
                                placeholder={"000 000"}
                                style={{maxWidth: 90}}
                                value={code}
                                mask={'*** ***'}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
                                //onChangeMask={(e) => setCode(e.target.value)}
                                />
                        </div>
                        <div className={styles.btn}>
                            <Button
                                onClick={() => setDone(true)}
                                // disabled={code?.length !== 6}
                                text='Проверить'
                                style={{paddingLeft: 30, paddingRight: 30}}
                                />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Enable;