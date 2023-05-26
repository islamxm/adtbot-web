import styles from './Done.module.scss';
import {HiCheckCircle} from 'react-icons/hi2';
import StatusModal from '@/modals/StatusModal/StatusModal';
import { useEffect, useState } from 'react';
import ScBadge from '@/components/ScBadge/ScBadge';
import { useAppSelector, useAppDispatch } from '@/hooks/useTypesRedux';
import ApiService from '@/service/apiService';
import ConfirmModal from '@/modals/ConfirmModal/ConfirmModal';
import { updateUserData } from '@/store/actions';
import notify from '@/helpers/notify';

const service = new ApiService()

const Done = ({
    setDone
}: {
    setDone: (arg: any) => any
}) => {
    const dispatch = useAppDispatch()
    const {tokens: {access}} = useAppSelector(s => s)
    const [successModal, setSuccessModal] = useState(false)
    const [confirmModal, setConfirmModal] = useState(false)
    const [load, setLoad] = useState(false)

    const closeSuccessModal = () => setSuccessModal(false)

    useEffect(() => {
        setSuccessModal(true)
    }, [])


    

    const disable2Fa = () => {
        if(access) {
            setLoad(true)
            service.set2FStatus(false, access).then(res => {
                if(res === true) {
                    service.getUserData(access).then(userData => {
                        if(userData) {
                            setDone(false)
                            notify('Двухфакторная аутентификация отключена', 'SUCCESS')
                            dispatch(updateUserData(userData))
                        }
                    }).finally(() => setLoad(false))
                }   
            }).finally(() => setLoad(false))
        }
    } 




    return (
        <div className={styles.wrapper}>
            <StatusModal
                width={460}
                status={'success'}
                title={'Двухфакторная аутентификация  включена'}
                text={'2FA значительно повышает безопасность вашей учетной записи'}
                open={successModal}
                onCancel={closeSuccessModal}
                />
            <ConfirmModal
                open={confirmModal}
                load={load}
                text='Вы уверены что хотите отключить двухфакторную аутентификацию'
                onConfirm={disable2Fa}
                onCancel={() => setConfirmModal(false)}
                />
            <ScBadge
                label='Двухфакторная аутентификация включена'
                btnLabel='Отключить (не рекомендуется)'
                onClick={() => setConfirmModal(true)}
                />
        </div>
    )
}

export default Done;