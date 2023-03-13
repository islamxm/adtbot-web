import styles from './Pag.module.scss';
import {FC} from 'react';
import { pagPropsTypes } from './types';
import { Pagination } from 'antd';

const Pag:FC<pagPropsTypes> = (props) => {


    return (
        <div className={styles.wrapper}>
            <Pagination
                {...props}
                className="pag"
                />
        </div>
    )
}

export default Pag;