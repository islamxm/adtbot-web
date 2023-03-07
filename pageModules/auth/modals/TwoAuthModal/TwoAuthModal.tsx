import styles from './TwoAuthModal.module.scss';
import {Modal, ModalProps, Row, Col} from 'antd';
import {FiUnlock} from 'react-icons/fi';
import {useState, useEffect} from 'react';
import AuthCode from 'react-auth-code-input';
import Button from '@/components/Button/Button';



const TwoAuthModal: React.FC<ModalProps> = ({
    open,
    width,
    title,
    onCancel,
}) => {
    const [error, setError] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')


    useEffect(() => {
        value === '000000' ? setError(true) : setError(false)
    }, [value])


    return (
        <Modal
            open={open}
            onCancel={onCancel}
            title={title}
            width={width}
            className={`${styles.wrapper} modal`}
            >
            <div className={styles.body}>
                <Row gutter={[30, 30]}>
                    <Col span={24}>
                        <div className={styles.icon}>
                            <div className={`${styles.icon_el} ${error ? styles.error : ''}`}>
                                <FiUnlock/>
                            </div>
                        </div>  
                    </Col>
                    <Col span={24}>
                        <Row gutter={[10,10]}>
                            <Col span={24}>
                                <h4 className={`${styles.title} heading_1`}>Двухфакторная аутентификация</h4>
                            </Col>
                            <Col span={24}>
                                <div className={styles.subtitle}>Введите 6-значный код из приложения для двухфакторной аутентификации.</div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <div className={styles.code}>
                            <AuthCode containerClassName={`${styles.fields} ${error ? styles.error : ''}`} inputClassName={styles.input} onChange={setValue} allowedCharacters={'numeric'}/>
                        </div>
                    </Col>
                    <Col span={24}>
                        <Button
                            text='Войти'
                            fill
                            />
                    </Col>
                </Row>
            </div>
        </Modal>
    )
}

export default TwoAuthModal;