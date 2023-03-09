import styles from './Item.module.scss';
import {FC} from 'react';
import { itemPropsTypes } from '../../types';

const Item:FC<itemPropsTypes> = ({
    date,
    change,
    comment
}) => {

    return (
        <tr className={styles.wrapper}>
            <td className={styles.item}>{date}</td>
            <td className={styles.item}>{change}</td>
            <td className={styles.item}>{comment}</td>
        </tr>
    )
}

export default Item;