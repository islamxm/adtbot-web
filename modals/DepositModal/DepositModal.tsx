import {Modal, ModalFuncProps} from 'antd';
import styles from './DepositModal.module.scss';
import {FC} from 'react';


const DepositModal:FC<ModalFuncProps> = ({
    onCancel,
    width,
    open,
    title
}) => {

    const closeHandle = () => {
        if(onCancel) {
            onCancel()
        }
    }

    return (
        <Modal
            title={title}
            open={open}
            width={width}
            onCancel={closeHandle}
            className={`${styles.wrapper} modal`}
            >
            
        </Modal>
    )
}