import styles from './Switch.module.scss';
import { switchPropsTypes } from './types';
import {FC} from 'react';


const Switch:FC<switchPropsTypes> = (props) => {
    

    return (
        <div className={styles.wrapper}>
            <input 
                {...props}
                type="checkbox" 
                className={styles.input}
                />
            <label className={styles.label} htmlFor={props.id}>
                <div className={styles.el}></div>
            </label>
        </div>
    )
}

export default Switch;