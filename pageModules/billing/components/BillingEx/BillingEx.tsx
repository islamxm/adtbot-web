import styles from './BillingEx.module.scss';


const BillingEx = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>*₮ — Tether USD (USDT)</div>
            <div className={styles.item}>**Списания производятся ежедневно</div>
        </div>
    )

}

export default BillingEx;