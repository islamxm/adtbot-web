import styles from './Body.module.scss';
import {Row, Col} from 'antd';
import Button from '@/components/Button/Button';
import Link from 'next/link';
import Text from '@/components/Text/Text';
import Image from 'next/image';
import telegram from '@/public/assets/icons/telegram-fill.svg';
import twitter from '@/public/assets/icons/twitter-fill.svg';
import youtube from '@/public/assets/icons/youtube-fill.svg';
import { useAppSelector } from '@/hooks/useTypesRedux';
import ApiService from '@/service/apiService';
import {useState, useEffect, useCallback} from 'react';
import notify from '@/helpers/notify';

const service = new ApiService();

const Body = () => {
    const {tokens: {access}} = useAppSelector(s => s)
    const [text, setText] = useState('')
    const [load, setLoad] = useState(false)

    const addFeedback = useCallback(() => {
        if(access) {    
            console.log(text)
            service.addFeedback(text, access).then(res => {
                console.log(res)
                if(!res?.detail) {
                    notify('Фидбэк отправлен', 'SUCCESS')
                }
                if(res === true) {
                    notify('Произошла ошибка', 'ERROR')
                }
            }).catch(() => {
                notify('Произошла ошибка', 'ERROR')
            }).finally(() => {{
                setLoad(false)
            }})
        }
    }, [access, text])



    return (
        <div className={styles.wrapper}>
            <Row gutter={[35,35]}>
                <Col span={24}>
                    <Row gutter={[15,15]}>
                        <Col span={24}>
                            <h4 className='heading_4'>Есть вопросы? Свяжитесь с нами</h4>
                        </Col>
                        <Col span={24}>
                            <div className={styles.link}>Поддержка: <a target={'_blank'} href={'https://t.me/adtbot_support'} className="def-link">@adtbot_support</a></div>
                            <div className={styles.link}>Новости платформы: <a target={'_blank'} href={'https://t.me/adtbot_announcements'} className="def-link">@adtbot_announcements</a></div>
                            <div className={styles.link}>Чат ADTBot: <a target={'_blank'} href={'https://t.me/adtbot_club'} className="def-link">@adtbot_club</a></div>
                        </Col>
                    </Row>
                    
                </Col>
                <Col span={24}>
                    <Row gutter={[15,15]}>
                        <Col span={24}>
                            <h4 className='heading_4'>Предложить идею</h4>
                        </Col>
                        {/* <Col span={24}>
                            Введите текст
                        </Col> */}
                        <Col span={24}>
                            <Text
                                label='Введите текст'
                                height={120}
                                resize
                                // placeholder="*************************"
                                value={text}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
                                />
                        </Col>
                        <Col span={24}>
                            <Button
                                text='Отправить'
                                fill
                                disabled={!text}
                                onClick={addFeedback}
                                load={load}
                                />
                        </Col>
                    </Row>
                </Col>
                {/* <Col span={24}>
                    <div className={styles.action}>
                        <div className={`${styles.head} heading_4`}>
                            Подписывайтесь на наши социальные сети
                        </div>
                        <div className={styles.list}>
                            <a href='#' target={'_blank'} className={styles.item}>
                                <Image
                                    src={telegram}
                                    alt="telegram"
                                    width={30}
                                    height={30}
                                    />
                            </a>
                            <a href='#' target={'_blank'} className={styles.item}>
                                <Image
                                    src={twitter}
                                    alt="twitter"
                                    width={30}
                                    height={30}
                                    />
                            </a>
                            <a href='#' target={'_blank'} className={styles.item}>
                                <Image
                                    src={youtube}
                                    alt="youtube"
                                    width={30}
                                    height={30}
                                    />
                            </a>
                        </div>
                        
                    </div>
                </Col> */}
            </Row>
        </div>
    )
}

export default Body;