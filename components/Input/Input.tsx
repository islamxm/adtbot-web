import styles from './Input.module.scss';
import { inputPropsTypes } from './types';
import { Popover } from 'antd';
import Hint from '../Hint/Hint';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import { IMaskInput } from 'react-imask';
import InputMask from 'react-input-mask';

const Input = (props: inputPropsTypes) => {
    const {
        error, 
        errorText, 
        label, 
        disabled, 
        onClick, 
        hint, 
        mask,
        onChange,
        onChangeMask
    } = props || {};

    

    return (
        <div className={`${styles.wrapper} ${error ? styles.error : ''} ${disabled ? styles.disabled : ''}`} style={props.style}>
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
            {
                mask ? (
                    // <IMaskInput
                    //     placeholderChar=''
                    //     mask={mask}
                    //     value={props.value}
                    //     onAccept={(val,mask) => {
                    //         if(onChangeMask) {
                    //             onChangeMask(val)
                    //         }
                    //     }}

                    //     />
                    <InputMask
                        value={props.value}
                        onChange={onChange}
                        mask={mask}
                        placeholder={props.placeholder}
                        maskChar={null}
                        />
                ) : (
                    <input
                        className={styles.input} 
                        {...props}            
                        />
                )
            }
            
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