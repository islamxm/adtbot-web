import styles from './Select.module.scss';
import { Select as AntSelect, Popover } from 'antd';
import { selectPropsTypes } from './types';
import {FC} from 'react';
import Hint from '../Hint/Hint';
import {AiOutlineInfoCircle} from 'react-icons/ai';


const Select:FC<selectPropsTypes> = (props) => {
    const {label, hint} = props;


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
                <AntSelect
                    {...props}
                    />
            </div>
        </div>
    )
}

export default Select;