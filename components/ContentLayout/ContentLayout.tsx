import styles from './ContentLayout.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import { contentLayoutPropsTypes } from './types';
import {FC} from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/hooks/useTypesRedux';
import WarnPanel from '../WarnPanel/WarnPanel';
const ContentLayout:FC<contentLayoutPropsTypes> = ({
    children,
    head
}) => {
    const {userData} = useAppSelector(s => s)



    return (
        <div className={`${styles.wrapper} custom-scroll custom-scroll-lg`}>
            <div className={styles.main}>
                <div className={styles.head}>
                    <Header
                        head={head}
                        />
                </div>
                <div className={styles.body}>
                    {
                        (userData?.has_trial === false && userData?.money === 0) && <WarnPanel/>
                    }
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ContentLayout;