import styles from './Switch.module.scss';
import { switchPropsTypes } from './types';
import {FC} from 'react';


const Switch:FC<switchPropsTypes> = (props) => {
    const {wrapperWidth, labelText} = props;

    return (
        <div className={styles.wrapper} >
            <input 
                {...props}
                type="checkbox" 
                className={styles.input}
                />
            
            <label className={styles.label} htmlFor={props.id} style={{width: wrapperWidth}}>
                {
                    labelText ? (
                        <div className={styles.labelText}>{labelText}</div>
                    ) : null
                }

                <div className={styles.switch}><div className={styles.el}></div></div>
            </label>
        </div>
    )
}

export default Switch;