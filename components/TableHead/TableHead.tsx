import { tableHeadPropsTypes } from "./types";
import {FC} from 'react';
import { Popover } from "antd";
import Hint from "../Hint/Hint";
import {AiOutlineInfoCircle} from 'react-icons/ai';

const TableHead:FC<tableHeadPropsTypes> = ({list}) => {

    return (
        <tr className='table-row table-headrow'>
            {
                list?.map((item, index) => (
                    <th className='table-row__item table-headrow__item' key={index}>
                        <div className="table-headrow__item_in">
                            <div className="table-headrow__item_label">
                                {item.label}
                            </div>
                            {
                                item?.hint || item?.value ? (
                                    <div className="table-headrow__item_action">
                                        {
                                            item.hint ? (
                                                <Popover
                                                    content={
                                                        <Hint>
                                                            {item.hint}
                                                        </Hint>
                                                    }
                                                    >
                                                    <button className="headrow__item_action_btn">
                                                        <AiOutlineInfoCircle color="var(--yellow)"/> 
                                                    </button>  
                                                </Popover>
                                            ) : null
                                        }
                                        {
                                            item.value ? (
                                                <div></div>
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