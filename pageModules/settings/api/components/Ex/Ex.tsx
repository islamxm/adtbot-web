import { useState, useRef, useEffect } from 'react';
import styles from './Ex.module.scss';
import {TbExternalLink} from 'react-icons/tb';
import chartImg from '@/public/assets/chart.png';
import Image from 'next/image';
import { Row, Col } from 'antd';

const Ex = () => {
    const bodyRef = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [height, setHeight] = useState(0)

    const toggleContent = () => setIsOpen(s => !s)
    useEffect(() => {
        if(bodyRef?.current) {
            if(isOpen) {
                setHeight(bodyRef.current.scrollHeight)
            } else setHeight(0)
        }
    }, [isOpen, bodyRef])

    return (
        <div className={styles.wrapper}>
            <div className={styles.head}>
                <div className={styles.main}>
                    <h3 className={styles.title}>
                        Инструкция
                    </h3>
                    <a className={styles.link} href="#" target={'_blank'}>
                        <TbExternalLink/>
                    </a>
                </div>
                <div className={styles.action}>
                    <button onClick={toggleContent}>свернуть/развернуть</button>
                </div>
            </div>
            <div className={styles.body} ref={bodyRef} style={{height: height}}>
                <div className={styles.in}>
                    <Row gutter={[20,20]}>
                        <Col span={24}>
                            Подключите ваш аккаунт биржи Gate.io, заполнив соответствующие поля API ключей. <br/>
                            После ввода ключей нажмите кнопку “Сохранить”.
                        </Col>
                        <Col span={24}>
                            <Image
                                src={chartImg}
                                alt="chart"
                                placeholder='blur'
                                width={690}
                                height={315}
                                />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Ex;