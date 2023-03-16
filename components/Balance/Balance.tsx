import styles from './Balance.module.scss';
import {IoWalletOutline} from 'react-icons/io5';
import Link from 'next/link';
const Balance = () => {

    return (
        <Link href={'/profile/billing'} className={styles.wrapper}>
            <div className={styles.icon}>
                <IoWalletOutline/>
            </div>
            <div className={styles.body}>
                <div className={styles.value}>8.22 / 26 дней</div>
                <div className={styles.label}>Ваш баланс</div>
            </div>
        </Link>
    )
}

export default Balance;