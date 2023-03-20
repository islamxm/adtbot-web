import { tableRowPropsTypes } from "./types";
import {FC, useEffect, useRef, useState} from 'react';
import Image from "next/image";
import {HiOutlineStopCircle} from 'react-icons/hi2';
import IconButton from "../IconButton/IconButton";
import {BsShare} from 'react-icons/bs';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import Hint from "../Hint/Hint";
import { Popover } from "antd";
import {AiOutlineInfoCircle} from 'react-icons/ai';


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


const TableRow:FC<tableRowPropsTypes> = ({list, head}) => {
    const bodyRef = useRef<HTMLTableRowElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [height, setHeight] = useState<number>(0)


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
                {
                    list?.map((item, index) => {
                        if(item?.action) {
                            return (
                                <td className={`table-row__item table-bodyrow__item activation ${switchPnl(item?.pnl)} ${!item?.main ? 'table-bodyrow__item--nonmain' : ''}`} key={index}>
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
                                <td className={`table-row__item table-bodyrow__item ${switchPnl(item?.pnl)} ${!item?.main ? 'table-bodyrow__item--nonmain' : ''}`} key={index}>
                                    <div className="table-bodyrow__item_in">
                                        {
                                            index === 0 ? (
                                                <div className={'table-bodyrow__item_toggle'}>
                                                    <IconButton
                                                        onClick={toggleBody}
                                                        icon={isOpen ? <AiOutlineMinus size={10} color="#fff"/> : <AiOutlinePlus size={10} color="#fff"/>}
                                                        bg={'var(--blue'}
                                                        round
                                                        />
                                                </div>
                                                
                                            ) : null
                                        }
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

            <tr  className='table-row table-dropdown'>
                <td colSpan={list?.filter(i => i.main).length} className={'table-dropdown__body'}>
                    <div style={{height}} ref={bodyRef} className="table-dropdown__body_in">
                        <div className="table-dropdown__body_table">
                            {
                                list?.map((item,index) => {
                                    if(!item?.main) {
                                        return (
                                            <div className="table-dropdown__body_table_item" key={index}>
                                                <div className="table-dropdown__body_table_item_name">
                                                    {head[index].label}
                                                    {
                                                        head[index]?.hint ? (
                                                            <Popover
                                                                content={
                                                                    <Hint>
                                                                        {head[index].hint}
                                                                    </Hint>
                                                                }
                                                                >
                                                                <button className="table-dropdown__body_table_item_name_hint">
                                                                    <AiOutlineInfoCircle color="var(--yellow)"/> 
                                                                </button>  
                                                            </Popover>
                                                        ) : null
                                                    }
                                                </div>
                                                <div className="table-dropdown__body_table_item_value">
                                                    {item?.label}
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return null
                                    }
                                })
                            }
                        </div>
                    </div>
                </td>
            </tr> 
            
        </>
        
    )
}

export default TableRow;