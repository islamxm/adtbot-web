import styles from './DatePicker.module.scss';
import {DatePicker as AntDatePicker} from 'antd';
import {FC} from 'react';
import { RangePickerProps } from 'antd/es/date-picker';
import dayjs from 'dayjs';



const {RangePicker} = AntDatePicker
// const rangePresets = [
//     {
//       label: 'Last 7 Days',
//       value: [dayjs().add(-7, 'd'), dayjs()],
//     },
//     {
//       label: 'Last 14 Days',
//       value: [dayjs().add(-14, 'd'), dayjs()],
//     },
//     {
//       label: 'Last 30 Days',
//       value: [dayjs().add(-30, 'd'), dayjs()],
//     },
//     {
//       label: 'Last 90 Days',
//       value: [dayjs().add(-90, 'd'), dayjs()],
//     },
//   ];

const dateFormat = 'DD/MM/YYYY';

const DatePicker:FC<RangePickerProps> = (props) => {

    return (
        <div className={styles.wrapper}>
            <RangePicker
                dropdownClassName='date-pick-dropdown'
                className='date-pick'
                presets={[
                    {label: 'Сегодня', value: [dayjs(), dayjs()]},
                    {label: 'Последние 14 дней', value: [dayjs().add(-14, 'd'), dayjs()]}
                ]}
                {...props}
                />
        </div>
    )
}

export default DatePicker;