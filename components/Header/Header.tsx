import styles from './Header.module.scss';
import { headerPropsTypes } from './types';
import {FC} from 'react';
import Balance from '../Balance/Balance';

const Header:FC<headerPropsTypes> = ({
    head
}) => {

    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>
                <h2 className={styles.head}>
                    {head}
                </h2>
                <div className={styles.body}>
                    <div className={styles.item}>
                        <Balance/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;