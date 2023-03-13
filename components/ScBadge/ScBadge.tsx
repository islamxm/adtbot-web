import styles from './ScBadge.module.scss';
import {FC} from 'react';
import { scBadgePropsTypes } from './types';
import {HiCheckCircle} from 'react-icons/hi2';

const ScBadge:FC<scBadgePropsTypes> = ({
    label,
    onClick,
    btnLabel
}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.label}>
                <div className={styles.icon}><HiCheckCircle/></div>
                {label}
            </div>
            <button onClick={onClick} className={`${styles.btn} def-link`}>{btnLabel}</button>
        </div>
    )
}

export default ScBadge;