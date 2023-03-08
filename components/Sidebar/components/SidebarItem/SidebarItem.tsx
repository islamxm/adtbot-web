import styles from './SidebarItem.module.scss';
import { sidebarItemPropsTypes } from '../../types';
import {FC} from 'react';
import Link from 'next/link';


const SidebarItem:FC<sidebarItemPropsTypes> = ({
    list,
    label,
    link,
    icon,
    isActive,
    isButton
}) => {

    return (
        <div className={`${styles.wrapper} ${isActive ? styles.active : ''}`}>
            <div className={styles.head}>
                {
                    !list && !isButton ? (
                        <Link href={link ? link : '/'} className={styles.link}>
                            <div className={styles.icon}>
                                {icon}
                            </div>
                            <div className={styles.label}>
                                {label}
                            </div>
                        </Link>
                    ) : (
                        <div className={styles.link}>
                            <div className={styles.icon}>
                                {icon}
                            </div>
                            <div className={styles.label}>
                                {label}
                            </div>
                        </div>
                    )
                }
            </div>
            {
                list ? (
                    <div className={styles.body}>
                        {list}
                    </div>
                ) : null
            }
        </div>
    )
}

export default SidebarItem;