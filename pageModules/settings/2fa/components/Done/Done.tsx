import styles from './Done.module.scss';
import {HiCheckCircle} from 'react-icons/hi2';
import StatusModal from '@/modals/StatusModal/StatusModal';
import { useEffect, useState } from 'react';
import ScBadge from '@/components/ScBadge/ScBadge';
const Done = ({
    setDone
}: {
    setDone: (arg: any) => any
}) => {
    const [successModal, setSuccessModal] = useState(false)

    const closeSuccessModal = () => setSuccessModal(false)

    useEffect(() => {
        setSuccessModal(true)
    }, [])



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
            <ScBadge
                label='Двухфакторная аутентификация включена'
                btnLabel='Отключить (не рекомендуется)'
                onClick={() => setDone(false)}
                />
        </div>
    )
}

export default Done;