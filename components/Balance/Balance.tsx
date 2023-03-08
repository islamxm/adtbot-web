import styles from './Balance.module.scss';
import {IoWalletOutline} from 'react-icons/io5';

const Balance = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.icon}>
                <IoWalletOutline/>
            </div>
            <div className={styles.body}>
                <div className={styles.value}>8.22 / 26 дней</div>
                <div className={styles.label}>Ваш баланс</div>
            </div>
        </div>
    )
}

export default Balance;