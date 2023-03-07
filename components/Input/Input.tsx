import styles from './Input.module.scss';
import { inputPropsTypes } from './types';

const Input = (props: inputPropsTypes) => {
    const {error, errorText, label, disabled, onClick} = props || {};

    

    return (
        <div className={`${styles.wrapper} ${error ? styles.error : ''} ${disabled ? styles.disabled : ''}`}>
            {
                label ? (
                    <div className={styles.label}>
                        {label}
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