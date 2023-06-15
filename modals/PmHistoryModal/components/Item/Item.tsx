import styles from './Item.module.scss';
import {FC} from 'react';
import { itemPropsTypes } from '../../types';
import moment from 'moment';
const Item:FC<itemPropsTypes> = ({
    reg_datetime,
    money
}) => {

    return (
        <tr className={styles.wrapper}>
            <td className={styles.item}>{moment(reg_datetime).format('DD.MM.YYYY hh:mm:ss')}</td>
            <td className={styles.item}>{`${money} USDT`}</td>
            <td className={styles.item}>{'-'}</td>
        </tr>
    )
}

export default Item;