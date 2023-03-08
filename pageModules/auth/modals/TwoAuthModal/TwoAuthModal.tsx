import styles from './TwoAuthModal.module.scss';
import {Modal, ModalProps, Row, Col} from 'antd';
import {FiUnlock} from 'react-icons/fi';
import {useState, useEffect} from 'react';
import AuthCode from 'react-auth-code-input';
import Button from '@/components/Button/Button';
import Router from 'next/router';


const TwoAuthModal: React.FC<ModalProps> = ({
    open,
    width,
    title,
    onCancel,
}) => {
    const [status, setStatus] = useState<string>('')
    const [value, setValue] = useState<string>('')
    

    useEffect(() => {
        if(value?.length === 6 && value !== '000000') {
            setStatus('success')
        } 
        if(value?.length === 6 && value === '000000') {
            setStatus('error')
        }
        if(value?.length < 6) {
            setStatus('')
        }
        
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
                            <div className={`${styles.icon_el} ${status === 'error' ? styles.error : ''} ${status === 'success' ? styles.success : ''}`}>
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
                            <AuthCode containerClassName={`${styles.fields} ${status === 'error' ? styles.error : ''} ${status === 'success' ? styles.success : ''}`} inputClassName={styles.input} onChange={setValue} allowedCharacters={'numeric'}/>
                        </div>
                    </Col>
                    <Col span={24}>
                        <Button
                            text='Войти'
                            fill
                            onClick={() => Router.push('/console/my-bots')}
                            />
                    </Col>
                </Row>
            </div>
        </Modal>
    )
}

export default TwoAuthModal;