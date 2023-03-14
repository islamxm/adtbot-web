import styles from './SidebarList.module.scss';
import { sidebarListPropsTypes } from '../../types';
import {FC} from 'react';


const SidebarList:FC<sidebarListPropsTypes> = ({
    children,
}) => {


    return (
        <div className={styles.list}>
            {children}
        </div>
    )
}

export default SidebarList;



