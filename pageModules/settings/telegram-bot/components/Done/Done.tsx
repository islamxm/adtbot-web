import styles from './Done.module.scss';
import ScBadge from '@/components/ScBadge/ScBadge';
import StatusModal from '@/modals/StatusModal/StatusModal';
import { useEffect, useState } from 'react';
import ApiService from '@/service/apiService';
import { useAppSelector } from '@/hooks/useTypesRedux';
import notify from '@/helpers/notify';

const service = new ApiService()

const Done = ({
    setDone
}: {
    setDone: (arg: any) => any
}) => {
    const {tokens: {access}} = useAppSelector(s => s)

    
    const onSubmit = () => {
        if(access) {
            service.setTgKey(null, access).then(res => {
                if(res?.status === 200) {
                    setDone(false)
                    notify('Телеграм-бот отключен', 'SUCCESS')
                } else {
                    notify('Произошла ошибка', 'ERROR')
                }
            })
        }
    }



    return (
        <div className={styles.wrapper}>
            {/* <StatusModal
                width={460}
                status={'success'}
                title={'Telegram бот подключен'}
                text={'В случае блокировки сайта Telegram на территории Вашей страны Вы можете установить десктопное приложение Telegram'}
                open={modal}
                onCancel={closeModal}
                /> */}
            <ScBadge
                label='Telegram бот подключен'
                btnLabel='Отключить (не рекомендуется)'
                onClick={onSubmit}
                />
        </div>
    )
}

export default Done;