import styles from './DatePicker.module.scss';
import {DatePicker as AntDatePicker} from 'antd';
import {FC} from 'react';
import { DatePickerProps } from 'antd';


const DatePicker:FC<DatePickerProps> = (props) => {

    return (
        <div className={styles.wrapper}>
            <AntDatePicker
                dropdownClassName='date-pick-dropdown'
                className='date-pick'
                {...props}
                />
        </div>
    )
}

export default DatePicker;