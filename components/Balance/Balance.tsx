import styles from './Balance.module.scss';
import {IoWalletOutline, IoWarningOutline} from 'react-icons/io5';
import Link from 'next/link';
import * as _ from 'lodash';
import { useAppSelector } from '@/hooks/useTypesRedux';
import { useState } from 'react';

const Balance = () => {
    const {userData} = useAppSelector(s => s)
    const [warning, setWarning] = useState(false)

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
                <div className={styles.value}>{userData?.days_before_lock}/{userData?.days_in_month} дней</div>
                <div className={styles.label}>Ваш баланс</div>
            </div>
        </Link>
    )
}

export default Balance;