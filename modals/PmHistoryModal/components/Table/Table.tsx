import styles from './Table.module.scss';
import { itemPropsTypes } from '../../types';
import Item from '../Item/Item';
import {useRef, useState, useEffect} from 'react';



const Table = ({list}: {list: itemPropsTypes[]}) => {
    const bodyRef = useRef<HTMLDivElement>(null)
    const [scrolled, setScrolled] = useState<boolean>(false);


    const getScroll = () => {
        if(bodyRef?.current && bodyRef?.current?.scrollTop > 10) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
       
    }

    useEffect(() => {
        if(bodyRef?.current) {  
            bodyRef.current.addEventListener('scroll', getScroll)   
        }

        return () => {
            if(bodyRef?.current) {
                bodyRef.current.removeEventListener('scroll', getScroll)
            }   
        }
    }, [bodyRef])

    return (
        <div ref={bodyRef} className={`${styles.wrapper} custom-scroll ${scrolled ? styles.scrolled : ''}`}>
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