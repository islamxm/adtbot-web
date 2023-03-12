import { tableRowPropsTypes } from "./types";
import {FC} from 'react';
import Image from "next/image";
import {HiOutlineStopCircle} from 'react-icons/hi2';


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
                                        <button className="activation-action_item">
                                            <HiOutlineStopCircle color="var(--red)"/>
                                        </button>
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