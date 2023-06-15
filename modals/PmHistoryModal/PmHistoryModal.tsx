import styles from './PmHistoryModal.module.scss';
import {Modal, ModalFuncProps} from 'antd';
import {FC, useEffect, useRef, useState} from 'react';
import Table from './components/Table/Table';
import ApiService from '@/service/apiService';
import { useAppSelector } from '@/hooks/useTypesRedux';



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
                setList(res)
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

