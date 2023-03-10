import styles from './Input.module.scss';
import { inputPropsTypes } from './types';
import { Popover } from 'antd';
import Hint from '../Hint/Hint';
import {AiOutlineInfoCircle} from 'react-icons/ai';

const Input = (props: inputPropsTypes) => {
    const {error, errorText, label, disabled, onClick, hint} = props || {};

    

    return (
        <div className={`${styles.wrapper} ${error ? styles.error : ''} ${disabled ? styles.disabled : ''}`}>
            {
                label ? (
                    <div className={styles.label}>
                        {label} 
                        {
                            hint ? (
                                <Popover
                                    content={
                                        <Hint>
                                            {hint}
                                        </Hint>
                                    }
                                    >
                                    <span className={styles.hint}><AiOutlineInfoCircle/></span>
                                </Popover>
                            ) : null
                        }
                    </div>
                ) : null
            }
            <input
                className={styles.input} 
                {...props}            
                />
            {
                errorText ? (
                    <div className={styles.error_text}>
                        {errorText}
                    </div>
                ) : null
            }
        </div>
    )
}

export default Input;