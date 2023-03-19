import styles from './BillingEx.module.scss';
import Button from '@/components/Button/Button';
import PmHistoryModal from '@/modals/PmHistoryModal/PmHistoryModal';
import { useState } from 'react';

const BillingEx = () => {
    const [modal, setModal] = useState(false)

    const openModal = () => setModal(true)
    const closeModal = () => setModal(false)

    return (
        <div className={styles.wrapper}>
            <PmHistoryModal
                open={modal}
                onCancel={closeModal}
                />
            <div className={styles.item}>*₮ — Tether USD (USDT)</div>
            <div className={styles.item}>**Списания производятся ежедневно</div>
            <div className={styles.item}>
                <Button
                    onClick={openModal}
                    text='История'
                    style={{paddingLeft: 50, paddingRight: 50}}
                    />
            </div>
        </div>
    )

}

export default BillingEx;