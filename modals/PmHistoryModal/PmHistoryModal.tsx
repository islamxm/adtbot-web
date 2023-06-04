import styles from './PmHistoryModal.module.scss';
import {Modal, ModalFuncProps} from 'antd';
import {FC, useEffect, useRef, useState} from 'react';
import Table from './components/Table/Table';
import { itemPropsTypes } from './types';
import ApiService from '@/service/apiService';
import { useAppSelector } from '@/hooks/useTypesRedux';

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

const service = new ApiService()

const PmHistoryModal:FC<ModalFuncProps> = ({
    onCancel,
    width = 650,
    open,
}) => {
    const {tokens: {access}} = useAppSelector(s => s)
    const [list,setList] = useState([])


    const closeHandle = () => {
        if(onCancel) {
            onCancel()
        }
    }

    useEffect(() => {
        if(access) {
            service.getPaymentHistory(access).then(res => {
                console.log(res)
                
            })
        }
    }, [access])

    return (
        <Modal
            title={'История платежей'}
            open={open}
            width={width}
            onCancel={closeHandle}
            className={`${styles.wrapper} modal`}
            >
            <Table
                list={list}
                />
        </Modal>
    )
}


export default PmHistoryModal

