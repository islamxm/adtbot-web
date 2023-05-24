import styles from './ConfirmModal.module.scss';
import { confirmModalPropsTypes } from './types';
import {FC} from 'react';
import {Modal, Row, Col} from 'antd';
import Button from '@/components/Button/Button';

const ConfirmModal:FC<confirmModalPropsTypes> = (props) => {

    const {onCancel,text,onConfirm, load} = props

    const onClose = () => {
        onCancel && onCancel()
    }
    
    return (
        <Modal {...props} className={`${styles.wrapper} modal`}>
            <h2 className={`${styles.text} heading_4 bold`}>{text}</h2>
            <div className={styles.action}>
                <Row gutter={[15,15]}>
                    <Col span={12}>
                        <Button
                            text='Подтвердить'
                            onClick={() => onConfirm && onConfirm()}
                            load={load}
                            variant={'blue'}
                            style={{width: '100%'}}
                            />
                    </Col>
                    <Col span={12}>
                        <Button
                            variant={'danger'}
                            text='Отмена'
                            onClick={onClose}
                            style={{width: '100%'}}
                            />
                    </Col>
                </Row>
            </div>
        </Modal>
    )
}

export default ConfirmModal