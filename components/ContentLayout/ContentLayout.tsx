import styles from './ContentLayout.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import { contentLayoutPropsTypes } from './types';
import {FC} from 'react';
import { useRouter } from 'next/router';

const ContentLayout:FC<contentLayoutPropsTypes> = ({
    children,
    head
}) => {

    return (
        <div className={`${styles.wrapper} custom-scroll custom-scroll-lg`}>
            <div className={styles.main}>
                <div className={styles.head}>
                    <Header
                        head={head}
                        />
                </div>
                <div className={styles.body}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ContentLayout;