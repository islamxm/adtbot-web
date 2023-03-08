import styles from './SidebarItem.module.scss';
import { sidebarItemPropsTypes } from '../../types';
import {FC} from 'react';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const SidebarItem:FC<sidebarItemPropsTypes> = ({
    children,
    label,
    link,
    icon,
    isActive,
    isButton,
    onClick,
    menuIsOpen,
    isSubItem
}) => {
    const [height, setHeight] = useState(0);
    const body = useRef<HTMLDivElement>(null);
    
    const clickHandle = () => {
        if(onClick) {
            onClick()
        }
    }

    useEffect(() => {
        if(menuIsOpen) {
            if(body?.current) {
                setHeight(body.current.scrollHeight)
            } 
        } else {
            setHeight(0)
        }
    }, [menuIsOpen, body])

    return (
        <div className={`${styles.wrapper} ${isActive ? styles.active : ''} ${menuIsOpen ? styles.open : ''} ${isSubItem ? styles.sub : ''}`}>
            <div className={styles.head}>
                {
                    !children && !isButton ? (
                        <Link href={link ? link : '/'} className={styles.link}>
                            <div className={styles.icon}>
                                {icon}
                            </div>
                            <div className={styles.label}>
                                {label}
                            </div>
                        </Link>
                    ) : (
                        <div onClick={clickHandle} className={styles.link}>
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
                children ? (
                    <div style={{height}} className={styles.body} ref={body}>
                        {children}
                    </div>
                ) : null
            }
        </div>
    )
}

export default SidebarItem;