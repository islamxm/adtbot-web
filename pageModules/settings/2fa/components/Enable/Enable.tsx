import styles from './Enable.module.scss';
import { QRCode, Row, Col } from 'antd';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { useEffect, useState } from 'react';
import StatusModal from '@/modals/StatusModal/StatusModal';
import ApiService from '@/service/apiService';
import { useAppSelector, useAppDispatch } from '@/hooks/useTypesRedux';
import notify from '@/helpers/notify';
import { updateUserData } from '@/store/actions';

const service = new ApiService()


const Enable = ({
    setDone
}: {
    setDone: (arg: any) => any
}) => {
    const dispatch = useAppDispatch()
    const {tokens: {access}} = useAppSelector(s => s)
    const [secret, setSecret] = useState('')
    const [qr, setQr] = useState('')
    const [code, setCode] = useState('');
    const [warnModal, setWarnModal] = useState(false)

    const [load, setLoad] = useState(false)

    const closeWarnModal = () => setWarnModal(false);

    useEffect(() => {
        setWarnModal(true)
    }, [])

    useEffect(() => {
        if(access) {
            service.get2FData(access).then(res => {
                setSecret(res?.secret)
                setQr(res?.qrcode_url)
            })
        }
    },[access])


    const checkCode = () => {
        const stringCode = code.replace(/ /g,'')

        if(stringCode?.length === 6 && access) {
            setLoad(true)
            service.check2FCode(stringCode, access).then(res => {
                if(res === true) {
                    service.set2FStatus(true, access).then(r => {
                        if(r === true) {
                            notify('Двухфакторная аутентификация включена', 'SUCCESS')
                            setDone(true)

                            service.getUserData(access).then(userData => {
                                if(userData) {
                                    dispatch(updateUserData(userData))
                                }
                            }).finally(() => setLoad(false))
                        } else {
                            notify('Произошла ошибка', 'SUCCESS')
                        }
                    }).finally(() => setLoad(false))
                } else {
                    notify('Неправильный код', 'ERROR')
                }
            }).finally(() => setLoad(false))
        }
    }



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
                    Реализация двухфакторной аутентификации обеспечивается посредством мобильного приложения <a href="https://support.google.com/accounts/answer/1066447" target={'_blank'}>Google Authenticator</a>, доступного для устройств на базе <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2" target={'_blank'}>Android</a> и <a href="https://apps.apple.com/ru/app/google-authenticator/id388497605" target={'_blank'}>IOS</a>.
                    <br/>
                    <br/>
                    После включения 2FA для доступа к учетной записи, кроме логина и пароля, вам понадобится динамический шестизначный код, генерируемый в приложении.
                    <br/>
                    <br/>
                    Перед включением 2FA установите <a href="https://support.google.com/accounts/answer/1066447" target={'_blank'}>Google Authenticator</a> на устройство.
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
                                        status={!qr ? 'loading' : 'active'}
                                        value={qr}/>
                                </Col>
                                {/* <Col>
                                    <p>Код из приложения</p>
                                </Col> */}
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
                            Для активации 2FA отсканируйте QR-код или введите секретный ключ в <a href="https://support.google.com/accounts/answer/1066447" target={'_blank'}>Google Authenticator</a>.
                            <br/>
                            <br/>
                            Секретный ключ: <span>{secret}</span>
                            </p>
                        </div>
                    </div>
                </Col>
                <Col span={24}>
                    <div className={styles.label}>
                        Код из приложения
                    </div>
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
                                load={load}
                                onClick={checkCode}
                                disabled={code?.length !== 7}
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