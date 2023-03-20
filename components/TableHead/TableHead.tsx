import { tableHeadPropsTypes } from "./types";
import {FC} from 'react';
import { Popover } from "antd";
import Hint from "../Hint/Hint";
import {AiOutlineInfoCircle} from 'react-icons/ai';
import SortIcon from "@/icons/SortIcon";

const TableHead:FC<tableHeadPropsTypes> = ({list}) => {

    return (
        <tr className='table-row table-headrow'>
            {
                list?.map((item, index) => (
                    <th className={`table-row__item table-headrow__item ${!item?.main ? 'table-headrow__item--nonmain' : ''}`} key={index}>
                        <div className="table-headrow__item_in">
                            <div className="table-headrow__item_label">
                                {item.label}
                            </div>
                            {
                                item?.hint || item?.value || item.sort ? (
                                    <div className="table-headrow__item_action">
                                        
                                        {
                                            item.value ? (
                                                <div></div>
                                            ) : null
                                        }
                                        {
                                            item.sort ? (
                                                <button className="table-headrow__item_action_btn">
                                                    <SortIcon color="#9094A6"/> 
                                                </button>  
                                            ) : null
                                        }
                                        {
                                            item.hint ? (
                                                <Popover
                                                    content={
                                                        <Hint>
                                                            {item.hint}
                                                        </Hint>
                                                    }
                                                    >
                                                    <button className="table-headrow__item_action_btn">
                                                        <AiOutlineInfoCircle color="var(--yellow)"/> 
                                                    </button>  
                                                </Popover>
                                            ) : null
                                        }
                                    </div>
                                ) : null
                            }
                        </div>
                    </th>
                ))
            }
            
        </tr>
    )
}

export default TableHead;