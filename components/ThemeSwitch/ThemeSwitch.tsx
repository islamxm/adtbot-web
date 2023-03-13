import styles from './ThemeSwitch.module.scss';
import { switchPropsTypes } from '../Switch/types';
import {FC} from 'react';
import {TbSunLow, TbMoon} from 'react-icons/tb';



const ThemeSwitch:FC<switchPropsTypes> = (props) => {

    const {labelText} = props;

    return (
        <div className={styles.wrapper}>
            <input type="checkbox" {...props} className={styles.input}/>
            <label htmlFor={props.id} className={styles.label}>
                {
                    labelText ? (
                        <div className={styles.labelText}>{labelText}</div>
                    ) : null
                }
                <div className={styles.switch}>
                    <div className={styles.el}></div>
                    <div className={`${styles.item} ${styles.light}`}>
                        <TbSunLow/>
                    </div>
                    <div className={`${styles.item} ${styles.dark}`}>
                        <TbMoon/>
                    </div>
                </div>
            </label>
        </div>
    )
}


export default ThemeSwitch;