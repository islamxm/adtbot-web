import styles from './Select.module.scss';
import { Select as AntSelect, Popover } from 'antd';
import { selectPropsTypes } from './types';
import {FC} from 'react';
import Hint from '../Hint/Hint';
import {AiOutlineInfoCircle} from 'react-icons/ai';


const Select:FC<selectPropsTypes> = (props) => {
    const {label, hint, noBorder, beforeLabel} = props;


    return (
        <div className={styles.wrapper}>
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
                                    <span className={styles.hint}>
                                        <AiOutlineInfoCircle/>
                                    </span>    
                                </Popover>
                            ) : null
                        }
                    </div>
                ) : null
            }
            <div className={styles.main}>
                {
                    beforeLabel ? (
                        <div className={styles.before}>{beforeLabel}</div>
                    ) : null
                }
                <AntSelect
                    {...props}
                    className={`${props.className} ${noBorder ? ' noborder ' : ''}`}
                    />
            </div>
        </div>
    )
}

export default Select;