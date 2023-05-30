import { tableRowPropsTypes } from '@/components/TableRow/types';
import {FC, useEffect, useRef, useState} from 'react';
import Image from "next/image";
import {HiOutlineStopCircle} from 'react-icons/hi2';
import {HiOutlinePlay} from 'react-icons/hi';
import IconButton from '@/components/IconButton/IconButton';
import {BsShare} from 'react-icons/bs';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import Hint from '@/components/Hint/Hint';
import { Popover } from "antd";
import exchangeBuyList from "@/helpers/exchangeBuyList";
import exchangeMonitorList from "@/helpers/exchangeMonitorList";
import moment from 'moment';
import senseValue from '@/helpers/senseValue';
import { useAppSelector } from "@/hooks/useTypesRedux";
import ApiService from "@/service/apiService";

import notify from "@/helpers/notify";


const service = new ApiService()


const switchPnl = (value?: string) => {
    switch(value) {
        case '+':
            return 'profit'
        case '-':
            return 'loss'
        default:
            return ''
    }
}


const TableRow:FC<tableRowPropsTypes> = ({bot, head, updateList}) => {
    const {tokens: {access}, hideSensValue} = useAppSelector(s => s)
    const bodyRef = useRef<HTMLTableRowElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [height, setHeight] = useState<number>(0)

    const [shareLoad, setShareLoad] = useState(false)

    

    const toggleBody = () => setIsOpen(s => !s)


    useEffect(() => {
        if(bodyRef?.current) {
            if(isOpen) {
                setHeight(bodyRef.current?.scrollHeight)
            } else {
                setHeight(0)
            }
        }
    }, [isOpen, bodyRef])


    


  


    return (
        <>
            <tr className='table-row table-bodyrow'>
                <td className={`table-row__item table-bodyrow__item`}>
                    <div className="table-bodyrow__item_in">
                        <div className={'table-bodyrow__item_toggle'}>
                            <IconButton
                                onClick={toggleBody}
                                icon={isOpen ? <AiOutlineMinus size={10} color="#fff"/> : <AiOutlinePlus size={10} color="#fff"/>}
                                bg={'var(--blue'}
                                round
                                />
                        </div>
                        <div className="table-bodyrow__item_icon">
                            <Image width={16} height={16} src={exchangeMonitorList.find(i => i.value === bot?.monitor?.toString())?.icon} alt={''}/>
                        </div>
                        <div className="table-bodyrow__item_label">
                            {exchangeMonitorList.find(i => i.value === bot?.monitor?.toString())?.label}
                        </div>
                    </div>
                </td>
                <td className={`table-row__item table-bodyrow__item table-bodyrow__item--nonmain`}>
                    <div className="table-bodyrow__item_in">
                        <div className="table-bodyrow__item_icon">
                            <Image width={16} height={16} src={exchangeBuyList.find(i => i.value === bot?.exchange?.toString())?.icon} alt={''}/>
                        </div>
                        <div className="table-bodyrow__item_label">
                            {exchangeBuyList.find(i => i.value === bot?.exchange?.toString())?.label}
                        </div>
                    </div>
                </td>
                <td className={`table-row__item table-bodyrow__item table-bodyrow__item--nonmain`}>
                    <div className="table-bodyrow__item_in">
                        <div className="table-bodyrow__item_label">
                            {bot?.pair}
                        </div>
                    </div>
                </td>
                <td className={`table-row__item table-bodyrow__item table-bodyrow__item--nonmain`}>
                    <div className="table-bodyrow__item_in">
                        <div className="table-bodyrow__item_label">
                            {senseValue(hideSensValue, bot?.budget_usdt)}
                        </div>
                    </div>
                </td>
                <td className={`table-row__item table-bodyrow__item table-bodyrow__item--nonmain`}>
                    <div className="table-bodyrow__item_in">
                        <div className="table-bodyrow__item_label">
                            {bot?.buy_price}
                        </div>
                    </div>
                </td>
                <td className={`table-row__item table-bodyrow__item table-bodyrow__item--nonmain`}>
                    <div className="table-bodyrow__item_in">
                        <div className="table-bodyrow__item_label">
                            {bot?.sell_price}
                        </div>
                    </div>
                </td>
                <td className={`table-row__item table-bodyrow__item`}>
                    <div className="table-bodyrow__item_in">
                        <div className={`table-bodyrow__item_label ${Number(bot?.pnl_percentage) > 0 ? 'table-bodyrow__item_label-green' : ''}`}>
                            {bot?.pnl} USDT {
                                senseValue(hideSensValue, `${Number(bot?.pnl_percentage > 0) ? '+' : ''}${bot?.pnl_percentage}`)
                            }%
                        </div>
                    </div>
                </td>
                <td className={`table-row__item table-bodyrow__item table-bodyrow__item--nonmain`}>
                    <div className="table-bodyrow__item_in">
                        <div className="table-bodyrow__item_label">
                            {moment(bot?.activation_datetime).format('YYYY-MM-DD hh:mm:ss')}
                        </div>
                    </div>
                </td>
                 <td className={`table-row__item table-bodyrow__item activation`}>
                    <div className="table-bodyrow__item_in">
                        <div className={'activation-label'}>{moment(bot?.stop_datetime).format('YYYY-MM-DD hh:mm:ss')}</div>
                        <div className="activation-action">
                            <div className="activation-action_item">
                                <IconButton
                                    icon={<BsShare color="#545454" size={16}/>}
                                    />
                            </div>
                        </div>
                    </div>
                </td>
            </tr>

            <tr  className='table-row table-dropdown'>
                <td colSpan={2} className={'table-dropdown__body'}>
                    <div style={{height}} ref={bodyRef} className="table-dropdown__body_in">
                        <div className="table-dropdown__body_table">
                            <div className="table-dropdown__body_table_item">
                                <div className="table-dropdown__body_table_item_name">
                                Покупка
                                </div>
                                <div className="table-dropdown__body_table_item_value">
                                {exchangeBuyList.find(i => i.value === bot?.exchange?.toString())?.label}
                                </div>
                            </div>
                            <div className="table-dropdown__body_table_item">
                                <div className="table-dropdown__body_table_item_name">
                                Пара
                                </div>
                                <div className="table-dropdown__body_table_item_value">
                                {bot?.pair}
                                </div>
                            </div>
                            <div className="table-dropdown__body_table_item">
                                <div className="table-dropdown__body_table_item_name">
                                Сумма
                                </div>
                                <div className="table-dropdown__body_table_item_value">
                                {senseValue(hideSensValue, bot?.budget_usdt)}
                                </div>
                            </div>
                            <div className="table-dropdown__body_table_item">
                                <div className="table-dropdown__body_table_item_name">
                                Цена покупки
                                </div>
                                <div className="table-dropdown__body_table_item_value">
                                {bot?.buy_price}
                                </div>
                            </div>
                            <div className="table-dropdown__body_table_item">
                                <div className="table-dropdown__body_table_item_name">
                                Цена продажи
                                </div>
                                <div className="table-dropdown__body_table_item_value">
                                {bot?.sell_price}
                                </div>
                            </div>
                            <div className="table-dropdown__body_table_item">
                                <div className="table-dropdown__body_table_item_name">
                                Активация
                                </div>
                                <div className="table-dropdown__body_table_item_value">
                                {moment(bot?.activation_datetime).format('YYYY-MM-DD hh:mm:ss')}
                                </div>
                            </div>
                            <div className="table-dropdown__body_table_item">
                                <div className="table-dropdown__body_table_item_name">
                                Остановка
                                </div>
                                <div className="table-dropdown__body_table_item_value">
                                {moment(bot?.stop_datetime).format('YYYY-MM-DD hh:mm:ss')}
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr> 
            
        </>
        
    )
}

export default TableRow;