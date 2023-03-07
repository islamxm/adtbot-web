import styles from './PassResetModal.module.scss';
import {Modal, ModalProps} from 'antd';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import {Row, Col} from 'antd';

const PassResetModal:React.FC<ModalProps> = ({
    open = true,
    onCancel,
    width = 455,
    title,
    centered = false
}) => {


    return (
        <Modal
            onCancel={onCancel}
            open={open}
            width={width}
            title={title}
            centered={centered}
            className={`${styles.wrapper} modal`}
            >
            <div className={styles.body}>
                <Row gutter={[15,15]}>
                    <Col span={24}>
                        <Input  
                            placeholder='debra.holt@example.com'
                            type='email'
                            label='Email'
                            />
                    </Col>
                    <Col span={24}>
                        <Button
                            text='Сброс пароля'
                            fill
                            />
                    </Col>
                </Row>
            </div>
        </Modal>
    )
}

export default PassResetModal;

