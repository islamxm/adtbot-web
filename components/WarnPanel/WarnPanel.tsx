import styles from './WarnPanel.module.scss';
import Button from '../Button/Button';
import { ReactNode, useState } from 'react';
import DepositModal from '@/modals/DepositModal/DepositModal';

const WarnPanel = ({
    text = <p>
        На балансе платформы закончились средства.<br/>
        Функционал платформы ограничен.
    </p>
}: {
    text?: ReactNode
}) => {
    const [depositModal, setDepositModal] = useState(false)

    return (
        <div className={styles.wrapper}>
            <DepositModal
                open={depositModal}
                onCancel={() => setDepositModal(false)}
                />
            <div className={styles.body}>
                {text}
            </div>
            <div className={styles.action}>
                <Button
                    onClick={() => setDepositModal(true)}
                    variant={'danger'}
                    text='Пополнить'
                    fill
                    />
            </div>
        </div>
    )
}

export default WarnPanel;