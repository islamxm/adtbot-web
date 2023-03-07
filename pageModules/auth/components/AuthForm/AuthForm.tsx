import styles from './AuthForm.module.scss';
import { authFormPropsTypes } from './types';
import logoImg from '@/public/assets/logo.svg';
import Image from 'next/image';
import {Row, Col} from 'antd';

const AuthForm = ({
    children,
    title,
    logo = true
} : authFormPropsTypes) => {
    return (
        <div className={styles.wrapper}>
            <Row gutter={[45,45]}>
                {
                    logo ? (
                        <Col span={24}>
                            <div className={styles.logo}>
                                <Image
                                    width={122}
                                    height={30}
                                    src={logoImg}
                                    alt={'Logotype'}
                                    />
                            </div>
                        </Col>
                    ) : null
                }
                {
                    title ? (
                        <Col span={24}>
                            <h3 className={`${styles.title} heading_1 bold`}>{title}</h3>
                        </Col>
                    ) : null
                }
                <Col span={24}>
                    <div className={styles.body}>
                        {children}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AuthForm;