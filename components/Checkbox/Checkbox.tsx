import styles from './Checkbox.module.scss';
import { checkboxPropsTypes } from './types';
import {BsCheck} from 'react-icons/bs';

const Checkbox = (props: checkboxPropsTypes) => {
    const {text} = props;


    return (
        <div className={`${styles.wrapper}`}>
            <input 
                {...props}
                className={styles.input} 
                type="checkbox" 
                />
            <label 
                className={styles.label}
                htmlFor={props?.id}>
                <div className={styles.el}>
                    <div className={styles.icon}>
                        <BsCheck/>
                    </div>
                </div>
                {
                    text ? (
                        <div className={styles.text}>
                            {text}
                        </div>
                    ) : null
                }
            </label>
        </div>
    )
}

export default Checkbox;