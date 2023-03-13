import styles from './Done.module.scss';
import ScBadge from '@/components/ScBadge/ScBadge';
import StatusModal from '@/modals/StatusModal/StatusModal';
import { useEffect, useState } from 'react';


const Done = ({
    setDone
}: {
    setDone: (arg: any) => any
}) => {
    const [modal, setModal] = useState(false)

    const closeModal = () => setModal(false)

    useEffect(() => {
        setModal(true)
    }, [])

    return (
        <div className={styles.wrapper}>
            <StatusModal
                width={460}
                status={'success'}
                title={'Telegram бот подключен'}
                text={'В случае блокировки сайта Telegram на территории Вашей страны Вы можете установить десктопное приложение Telegram'}
                open={modal}
                onCancel={closeModal}
                />
            <ScBadge
                label='Telegram бот подключен'
                btnLabel='Отключить (не рекомендуется)'
                onClick={() => setDone(false)}
                />
        </div>
    )
}

export default Done;