import styles from './PmHistoryModal.module.scss';
import {Modal, ModalFuncProps} from 'antd';
import {FC} from 'react';
import Table from './components/Table/Table';
import { itemPropsTypes } from './types';


const historyList:itemPropsTypes[] = [
    {
        date: '20.09.2022 13:53:31',
        change: '+135 USDT',
        comment: 'Списание со счета хххххххххххххххх'
    },
    {
        date: '20.09.2022 13:53:31',
        change: '+135 USDT',
        comment: 'Списание со счета хххххххххххххххх'
    },
    {
        date: '20.09.2022 13:53:31',
        change: '+135 USDT',
        comment: 'Списание со счета хххххххххххххххх'
    },
    {
        date: '20.09.2022 13:53:31',
        change: '+135 USDT',
        comment: 'Списание со счета хххххххххххххххх'
    },
    {
        date: '20.09.2022 13:53:31',
        change: '+135 USDT',
        comment: 'Списание со счета хххххххххххххххх'
    },
    {
        date: '20.09.2022 13:53:31',
        change: '+135 USDT',
        comment: 'Списание со счета хххххххххххххххх'
    },
    {
        date: '20.09.2022 13:53:31',
        change: '+135 USDT',
        comment: 'Списание со счета хххххххххххххххх'
    },
    {
        date: '20.09.2022 13:53:31',
        change: '+135 USDT',
        comment: 'Списание со счета хххххххххххххххх'
    },
    {
        date: '20.09.2022 13:53:31',
        change: '+135 USDT',
        comment: 'Списание со счета хххххххххххххххх'
    },
    {
        date: '20.09.2022 13:53:31',
        change: '+135 USDT',
        comment: 'Списание со счета хххххххххххххххх'
    },
    {
        date: '20.09.2022 13:53:31',
        change: '+135 USDT',
        comment: 'Списание со счета хххххххххххххххх'
    },
    {
        date: '20.09.2022 13:53:31',
        change: '+135 USDT',
        comment: 'Списание со счета хххххххххххххххх'
    },
    {
        date: '20.09.2022 13:53:31',
        change: '+135 USDT',
        comment: 'Списание со счета хххххххххххххххх'
    }
]

const PmHistoryModal:FC<ModalFuncProps> = ({
    onCancel,
    width = 650,
    open,
}) => {

    const closeHandle = () => {
        if(onCancel) {
            onCancel()
        }
    }


    return (
        <Modal
            title={'История платежей'}
            open={open}
            width={width}
            onCancel={closeHandle}
            className={`${styles.wrapper} modal`}
            >
            <Table
                list={historyList}
                />
        </Modal>
    )
}


export default PmHistoryModal

