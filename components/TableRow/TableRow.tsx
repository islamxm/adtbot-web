import { tableRowPropsTypes } from "./types";
import {FC} from 'react';
import Image from "next/image";
import {HiOutlineStopCircle} from 'react-icons/hi2';
import IconButton from "../IconButton/IconButton";
import {BsShare} from 'react-icons/bs';


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


const TableRow:FC<tableRowPropsTypes> = ({list}) => {


    return (
        <tr className='table-row table-bodyrow'>
            {
                list?.map((item, index) => {
                    if(item?.action) {
                        return (
                            <td className={`table-row__item table-bodyrow__item activation ${switchPnl(item?.pnl)}`} key={index}>
                                <div className="table-bodyrow__item_in">
                                    <div className="activation-label">12.03.2022 12:56:13</div>
                                    <div className="activation-action">
                                        {
                                            item.running ? (
                                                <div className="activation-action_item">
                                                    <IconButton
                                                        icon={<HiOutlineStopCircle color="var(--red)" size={16}/>}
                                                        />
                                                    
                                                </div>
                                            ) : null //возможно сюда можно вывести функцию-свитчер для вывода статуса ожидане/остановлен
                                        }
                                        {
                                            item.share ? (
                                                <div className="activation-action_item">
                                                    <IconButton
                                                        icon={<BsShare size={16}/>}
                                                        />
                                                </div>
                                            ) : null
                                        }
                                    </div>
                                </div>
                            </td>
                        )
                    } else {
                        return (
                            <td className={`table-row__item table-bodyrow__item ${switchPnl(item?.pnl)}`} key={index}>
                                <div className="table-bodyrow__item_in">
                                    {
                                        item?.icon ? (
                                            <div className="table-bodyrow__item_icon">
                                                <Image width={16} height={16} src={item.icon} alt={''}/>
                                            </div>
                                        ) : null
                                    }
                                    <div className="table-bodyrow__item_label">
                                        {item.label}
                                    </div>
                                </div>
                            </td>
                        )
                    }
                    
                })
            }
            
        </tr>
    )
}

export default TableRow;