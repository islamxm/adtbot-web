import styles from './Balance.module.scss';
import {IoWalletOutline, IoWarningOutline} from 'react-icons/io5';
import Link from 'next/link';
import * as _ from 'lodash';
import { useAppSelector } from '@/hooks/useTypesRedux';
import { useEffect, useState } from 'react';

const Balance = () => {
    const {userData} = useAppSelector(s => s)
    const [warning, setWarning] = useState(false)


    useEffect(() => {
        if(typeof userData?.money === 'number' && userData?.money <= 3) {
            setWarning(true)
        }  else setWarning(false)
    }, [userData])

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
                <div className={styles.value}>{userData?.money} / {userData?.money === 0 ? '∞' : userData?.days_before_lock} дней</div>
                <div className={styles.label}>Ваш баланс</div>
            </div>
        </Link>
    )
}

export default Balance;