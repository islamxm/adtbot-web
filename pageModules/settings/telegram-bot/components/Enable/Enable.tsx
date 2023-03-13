import styles from './Enable.module.scss';
import {Row, Col} from 'antd';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';

const Enable = ({
    setDone
}: {
    setDone: (arg: any) => any
}) => {


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
                            Перейдите по ссылке <a href="#" target={'_blank'} className="def-link">xxxxxxxxxxxxxxxxxxxxxxxxxx</a>,
                            <br/>
                            <br/>
                            либо найдите бот с именем "@adtbot" любым другим способом в Telegram.
                            <br/>
                            <br/>
                            (в случае блокировки сайта Telegram на территории вашей страны вы можете установить десктопное приложение Telegram, либо воспользоваться браузером Opera с включенной функцией VPN)
                            <br/>
                            <br/>
                            В нажмите кнопку "START", либо введите сообщение "/start"
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
                                    />
                            </div>
                            <Button
                                text='Подключить'
                                onClick={() => setDone(true)}
                                />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Enable;