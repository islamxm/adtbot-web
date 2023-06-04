import styles from './Input.module.scss';
import { inputPropsTypes } from './types';
import { Popover } from 'antd';
import Hint from '../Hint/Hint';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import { IMaskInput } from 'react-imask';
import InputMask from 'react-input-mask';
import { useEffect, useState, useRef } from 'react';
import IconButton from '../IconButton/IconButton';
import {AiOutlineEye} from 'react-icons/ai';
import {AiOutlineEyeInvisible} from 'react-icons/ai';


const Input = (props: inputPropsTypes) => {
    const iconRef = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    const {
        error, 
        errorText, 
        label, 
        disabled, 
        onClick, 
        hint, 
        mask,
        onChange,
        onChangeMask,
        nodeLabel,
        icon
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
                nodeLabel ? (
                    <div className={styles.label}>
                        {nodeLabel} 
                        {/* {
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
                        } */}
                    </div>
                ) : null
            }
            <div className={`${styles.main} ${icon ? styles.icon : ''}`}>
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
                        <>
                            <InputMask
                                value={props.value}
                                onChange={onChange}
                                mask={mask}
                                placeholder={props.placeholder}
                                maskChar={null}
                                type={props?.type !== 'password' ? props?.type : (visible ? 'text' : 'password')}
                                className={`${styles.input} ${props?.type === 'password' ? styles.password : ''}`}
                                style={{paddingRight: iconRef?.current?.scrollWidth}}
                                />
                            {
                                props?.type === 'password' ? (
                                    <div className={styles.visible}>
                                        <IconButton
                                            
                                            icon={visible ? <AiOutlineEyeInvisible size={18}/> : <AiOutlineEye size={18}/>}
                                            />
                                    </div>
                                ) : null
                            }
                        </>
                    ) : (
                        <>
                            <input
                            
                                className={`${styles.input} ${props?.type === 'password' ? styles.password : ''}`}
                                {...props}            
                                type={props?.type !== 'password' ? props?.type : (visible ? 'text' : 'password')}
                                style={{paddingRight: iconRef?.current?.scrollWidth}}
                                />
                            {
                                props?.type === 'password' ? (
                                    <div className={styles.visible}>
                                        <IconButton
                                            onClick={() => setVisible(s => !s)}
                                            icon={visible ? <AiOutlineEyeInvisible size={18}/> : <AiOutlineEye size={18}/>}
                                            />
                                    </div>
                                ) : null
                            }
                        </>
                    )
                }

                {
                    icon && <div ref={iconRef} className={styles.icon}>{icon}</div>
                }
                
            </div>
            
            
            {
                errorText && error ? (
                    <div className={styles.error_text}>
                        {errorText}
                    </div>
                ) : null
            }
        </div>
    )
}

export default Input;