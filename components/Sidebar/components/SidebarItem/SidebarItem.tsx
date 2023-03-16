import styles from './SidebarItem.module.scss';
import { sidebarItemPropsTypes } from '../../types';
import {FC} from 'react';
import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import {HiOutlineChevronDown} from 'react-icons/hi2';


const SidebarItem:FC<sidebarItemPropsTypes> = ({
    children,
    label,
    link,
    icon,
    isActive,
    isButton,
    onClick,
    menuIsOpen,
    isSubItem,
    isParentHidden,
}) => {
    const [height, setHeight] = useState(0);
    const body = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);

    const [labelPos, setLabelPos] = useState<number>(0)
    
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

    const getPos = useCallback(() => {
        if(iconRef?.current && !isSubItem) {
            if(isParentHidden) {
                console.log(iconRef.current.getBoundingClientRect().top)
                setLabelPos(iconRef.current.getBoundingClientRect().top)
            }
        }
    }, [isParentHidden, iconRef, isSubItem])

    // useEffect(() => {
    //     getPos()
    // }, [isParentHidden, iconRef, isSubItem])

    
    // useEffect(() => {
    //     if(sidebarBody?.current) {
    //         sidebarBody.current.addEventListener('scroll', getPos)
    //     }
    // }, [sidebarBody, iconRef, isParentHidden, isSubItem])


    return (
        <div 
            className={`${styles.wrapper} ${isActive ? styles.active : ''} ${menuIsOpen ? styles.open : ''} ${isSubItem ? styles.sub : ''} ${isParentHidden ? styles.parent_hidden : ''}`}
            onMouseOver={getPos}
            >
            <div className={styles.head}>
                {
                    !children && !isButton ? (
                        <Link data-link href={link ? link : '/'} className={styles.link}>
                            <div ref={iconRef} className={styles.icon}>
                                {icon}
                            </div>
                            <div className={styles.label} style={{top: labelPos}}>
                                {label}
                            </div>
                            {
                                children && !isParentHidden ? (
                                    <div className={styles.dropArrow}>
                                        <HiOutlineChevronDown/>
                                    </div>
                                ) : null
                            }
                        </Link>
                    ) : (
                        <div data-link onClick={clickHandle} className={styles.link}>
                            <div ref={iconRef} className={styles.icon}>
                                {icon}
                            </div>
                            <div className={styles.label} style={{top: labelPos}}>
                                {label}
                            </div>
                            {
                                children && !isParentHidden ? (
                                    <div className={styles.dropArrow}>
                                        <HiOutlineChevronDown/>
                                    </div>
                                ) : null
                            }
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