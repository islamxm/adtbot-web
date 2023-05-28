import styles from './Enable.module.scss';
import {Row, Col} from 'antd';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { useState } from 'react';
import { useAppSelector } from '@/hooks/useTypesRedux';
import ApiService from '@/service/apiService';
import notify from '@/helpers/notify';


const service = new ApiService()

const Enable = ({
    setDone
}: {
    setDone: (arg: any) => any
}) => {
    const {tokens: {access}} = useAppSelector(s => s)
    const [value, setValue] = useState('')
    const [load, setLoad] = useState(false)

    const onSubmit = () => {
        if(access && value) {
            setLoad(true)
            service.setTgKey(value, access).then(res => {
                if(res?.status === 200) {
                    res?.json().then(r => {
                        if(r === true) {
                            notify('Телеграм-бот подключен', 'SUCCESS')
                            setDone(true)
                        }
                    })
                } else {
                    notify('Произошла ошибка', 'ERROR')
                }
            }).finally(() => setLoad(false))
        }
    }

    return (
        <div className={styles.wrapper}>
            <Row gutter={[35,35]}>
                <Col span={24}>
                    <h3 className={styles.head}>Telegram-бот не подключен</h3>
                </Col>
                <Col span={24}>
                    <div className={styles.body}>
                        <p>
                            <span>Для подключения telegram-бота выполните следующие шаги:</span>
                            <br/>
                            <br/>
                            Перейдите по ссылке <a href="https://t.me/adt_notifications_bot" target={'_blank'} className="def-link">@adt_notifications_bot</a>,
                            <br/>
                            <br/>
                            либо найдите бот с именем &quot;@adt_notifications_bot&quot; любым другим способом в Telegram.
                            <br/>
                            <br/>
                            Нажмите кнопку &quot;START&quot;, либо введите сообщение &quot;/start&quot;
                        </p>
                    </div>
                </Col>
                <Col span={24}>
                    <div className={styles.action}>
                        <div className={styles.label}>
                            Введите код, который прислал бот
                        </div>
                        <div className={styles.body}>
                            <div className={styles.input}>
                                <Input
                                    placeholder='Telegram code'
                                    style={{maxWidth: 236}}
                                    value={value}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                                    />
                            </div>
                            <Button
                                load={load}
                                disabled={!value}
                                text='Подключить'
                                onClick={onSubmit}
                                />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Enable;