import { radioPropsTypes } from "./types";
import {FC} from 'react';
import styles from './Radio.module.scss';


const Radio:FC<radioPropsTypes> = (props) => {

    const {wrapperWidth, labelText} = props;

    return (
        <div className={styles.wrapper}>
            <input type="radio"  className={styles.input} {...props}/>
            <label className={styles.label} style={{width: wrapperWidth}} htmlFor={props.id}>
                {
                    labelText ? (
                        <div className={styles.labelText}>{labelText}</div>
                    ) : null
                }
                <div className={styles.radio}></div>
            </label>
        </div>
    )
}

export default Radio;