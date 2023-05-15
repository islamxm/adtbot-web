import { tableRowPropsTypes } from "./types";
import {FC, useEffect, useRef, useState} from 'react';
import Image from "next/image";
import {HiOutlineStopCircle} from 'react-icons/hi2';
import {HiOutlinePlay} from 'react-icons/hi';
import IconButton from "../IconButton/IconButton";
import {BsShare} from 'react-icons/bs';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import Hint from "../Hint/Hint";
import { Popover } from "antd";
import {AiOutlineInfoCircle} from 'react-icons/ai';
import exchangeBuyList from "@/helpers/exchangeBuyList";
import exchangeMonitorList from "@/helpers/exchangeMonitorList";
import switchBotStatus from "@/helpers/switchBotStatus";
import { useAppSelector } from "@/hooks/useTypesRedux";
import ApiService from "@/service/apiService";
import {BiTrash} from 'react-icons/bi';
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
    const {tokens: {access}} = useAppSelector(s => s)
    const bodyRef = useRef<HTMLTableRowElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [height, setHeight] = useState<number>(0)

    const [enableLoad, setEnableLoad] = useState(false)
    const [deleteLoad, setDeleteLoad] = useState(false)
    const [disableLoad, setDisableLoad] = useState(false)

    const {id} = bot || {}

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


    const enableBot = () => {
        if(access && id) {
            setEnableLoad(true)
            service.enableBot(id, access).then(res => {
                if(res) {
                    updateList && updateList()
                    notify('Бот запущен', 'SUCCESS')
                } else {
                    notify('Произоша ошибка', 'ERROR')
                }
            }).finally(() => setEnableLoad(false))
        }
    }


    const disableBot = () => {
        if(access && id) {
            setDisableLoad(true)
            service.disableBot(id, access).then(res => {
                if(res) {
                    updateList && updateList()
                    notify('Бот остановлен', 'SUCCESS')
                } else {
                    notify('Произоша ошибка', 'ERROR')
                }
            }).finally(() => setDisableLoad(false))
        }
    }

    const editBot = () => {

    }

    const deleteBot = () => {
        if(access && id) {
            setDeleteLoad(true)
            service.deleteBot(id, access).then(res => {
                console.log(res)
                if(res) {
                    updateList && updateList()
                    notify('Бот удален', 'SUCCESS')
                } else {
                    notify('Произошла ошибка', 'SUCCESS')
                }
            }).finally(() => setDeleteLoad(false))
        }
    }



    const switchStatusAction = (status: number) => {
        switch(status) {
            case 1:
                return (
                    <td className={`table-row__item table-bodyrow__item activation table-bodyrow__item--nonmain`}>
                        <div className="table-bodyrow__item_in">
                            <div className={'activation-label'}>Активен</div>
                            <div className="activation-action">
                                <div className="activation-action_item">
                                    <IconButton
                                        onClick={disableBot}
                                        load={disableLoad}
                                        icon={<HiOutlineStopCircle color="var(--red)" size={16}/>}
                                        />
                                    
                                </div>
                            </div>
                        </div>
                    </td>
                )
            case 2:
                return (
                    <td className={`table-row__item table-bodyrow__item activation table-bodyrow__item--nonmain`}>
                        <div className="table-bodyrow__item_in">
                        <div className={'activation-label'}>В ожидании</div>
                            <div className="activation-action">
                                <div className="activation-action_item">
                                    <IconButton
                                        icon={<HiOutlineStopCircle color="var(--red)" size={16}/>}
                                        />
                                </div>
                                <div className="activation-action_item">
                                    <IconButton
                                        load={deleteLoad}
                                        onClick={deleteBot}
                                        icon={<BiTrash color="var(--red)" size={16}/>}
                                        />
                                    
                                </div>
                            </div>
                        </div>
                    </td>
                )
            case 3:
                return (
                    <td className={`table-row__item table-bodyrow__item activation table-bodyrow__item--nonmain`}>
                        <div className="table-bodyrow__item_in">
                        <div className={'activation-label'}>Остановлен</div>
                            <div className="activation-action">
                                <div className="activation-action_item">
                                    <IconButton
                                        onClick={enableBot}
                                        load={enableLoad}
                                        icon={<HiOutlinePlay color="var(--green)" size={16}/>}
                                        />
                                    
                                </div>
                                <div className="activation-action_item">
                                    <IconButton
                                        load={deleteLoad}
                                        onClick={deleteBot}
                                        icon={<BiTrash color="var(--red)" size={16}/>}
                                        />
                                    
                                </div>
                                {/* {
                                    item.share ? (
                                        <div className="activation-action_item">
                                            <IconButton
                                                icon={<BsShare size={16}/>}
                                                />
                                        </div>
                                    ) : null
                                } */}
                            </div>
                        </div>
                    </td>   
                )
            default:
                return (
                    <td className={`table-row__item table-bodyrow__item activation table-bodyrow__item--nonmain`}>
                        <div className="table-bodyrow__item_in">
                            <div className={'activation-label'}>Не известно</div>
                        </div>
                    </td>
                )
        }
    }


    return (
        <>
            <tr className='table-row table-bodyrow'>
                {/* {
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
                } */}
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
                <td className={`table-row__item table-bodyrow__item`}>
                    <div className="table-bodyrow__item_in">
                        <div className="table-bodyrow__item_icon">
                            <Image width={16} height={16} src={exchangeBuyList.find(i => i.value === bot?.exchange?.toString())?.icon} alt={''}/>
                        </div>
                        <div className="table-bodyrow__item_label">
                            {exchangeBuyList.find(i => i.value === bot?.exchange?.toString())?.label}
                        </div>
                    </div>
                </td>
                <td className={`table-row__item table-bodyrow__item`}>
                    <div className="table-bodyrow__item_in">
                        <div className="table-bodyrow__item_label">
                            {bot?.pair}
                        </div>
                    </div>
                </td>
                <td className={`table-row__item table-bodyrow__item`}>
                    <div className="table-bodyrow__item_in">
                        <div className="table-bodyrow__item_label">
                            {bot?.budget_usdt}
                        </div>
                    </div>
                </td>
                <td className={`table-row__item table-bodyrow__item`}>
                    <div className="table-bodyrow__item_in">
                        <div className="table-bodyrow__item_label">
                            {bot?.daily_volume}
                        </div>
                    </div>
                </td>
                <td className={`table-row__item table-bodyrow__item`}>
                    <div className="table-bodyrow__item_in">
                        <div className="table-bodyrow__item_label">
                            {bot?.stop_buy}
                        </div>
                    </div>
                </td>
                <td className={`table-row__item table-bodyrow__item`}>
                    <div className="table-bodyrow__item_in">
                        <div className="table-bodyrow__item_label">
                            {bot?.take_profit}
                        </div>
                    </div>
                </td>
                <td className={`table-row__item table-bodyrow__item`}>
                    <div className="table-bodyrow__item_in">
                        <div className="table-bodyrow__item_label">
                            {bot?.stop_loss}
                        </div>
                    </div>
                </td>
                <td className={`table-row__item table-bodyrow__item`}>
                    <div className="table-bodyrow__item_in">
                        <div className="table-bodyrow__item_label">
                            {bot?.buy_price}
                        </div>
                    </div>
                </td>
                <td className={`table-row__item table-bodyrow__item`}>
                    <div className="table-bodyrow__item_in">
                        <div className="table-bodyrow__item_label">
                            {bot?.sell_price}
                        </div>
                    </div>
                </td>
                <td className={`table-row__item table-bodyrow__item`}>
                    <div className="table-bodyrow__item_in">
                        <div className="table-bodyrow__item_label">
                            {bot?.pnl}USDT ({bot?.pnl_percentage}%)
                        </div>
                    </div>
                </td>
                {
                    switchStatusAction(switchBotStatus({
                        enabled: bot?.enabled,
                        stop_datetime: bot?.stop_datetime,
                        activation_datetime: bot?.activation_datetime
                    }))
                }
                <td className={`table-row__item table-bodyrow__item`}>
                    <div className="table-bodyrow__item_in">
                        <div className="table-bodyrow__item_label">
                            
                        </div>
                    </div>
                </td>
            </tr>

            {/* <tr  className='table-row table-dropdown'>
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
             */}
        </>
        
    )
}

export default TableRow;