import styles from './ConfirmModal.module.scss';
import { confirmModalPropsTypes } from './types';
import {FC} from 'react';
import {Modal} from 'antd';


const ConfirmModal:FC<confirmModalPropsTypes> = (props) => {

    return (
        <Modal {...props} className="modal">

        </Modal>
    )
}

export default ConfirmModal