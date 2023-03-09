import styles from './Table.module.scss';
import { itemPropsTypes } from '../../types';
import Item from '../Item/Item';




const Table = ({list}: {list: itemPropsTypes[]}) => {


    return (
        <div className={`${styles.wrapper} custom-scroll`}>
            <table className={styles.table}>
                <tr className={styles.head}>
                    <th className={styles.item}>Дата и время</th>
                    <th className={styles.item}>Изменение баланса</th>
                    <th className={styles.item}>Комментарий</th>
                </tr>
                <tbody className={styles.body}> 
                    {
                        list?.map((item, index) => (
                            <Item
                                {...item}
                                key={index}
                                />
                        ))
                    }
                </tbody>
                
            </table>
        </div>
        
    )
}

export default Table;