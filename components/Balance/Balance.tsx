import styles from './Balance.module.scss';
import {IoWalletOutline, IoWarningOutline} from 'react-icons/io5';
import Link from 'next/link';

const Balance = ({
    warning
}: {
    warning?: boolean
}) => {

    return (
        <Link href={'/account/billing'} className={`${styles.wrapper} ${warning ? styles.error : ''}`}>
            <div className={styles.icon}>
                {
                    warning ? (
                        <IoWarningOutline/>
                    ) : (
                        <IoWalletOutline/>
                    )
                }
                
            </div>
            <div className={styles.body}>
                <div className={styles.value}>8.22 / 26 дней</div>
                <div className={styles.label}>Ваш баланс</div>
            </div>
        </Link>
    )
}

export default Balance;