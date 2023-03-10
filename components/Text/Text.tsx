import styles from './Text.module.scss';
import { textPropsTypes } from './types';

const Text = (props: textPropsTypes) => {
    const {error, label, errorText, disabled,onClick, resize, height} = props || {};


    return (
        <div className={`${styles.wrapper} ${error ? styles.error : ''} ${disabled ? styles.disabled : ''}`}>
            {
                label ? (
                    <div className={styles.label}>
                        {label}
                    </div>
                ) : null
            }
            <textarea
                className={`${styles.input} ${!resize ? styles.nonresize : ''}`} 
                {...props}   
                style={{height: height}}    
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

export default Text;