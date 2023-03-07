import styles from './PageLayout.module.scss';
import {FC} from 'react';

const PageLayout = ({children}: {children?:React.ReactNode}) => {

    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default PageLayout;