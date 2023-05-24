import { IBot } from "@/models/IBot";
import {  ModalFuncProps, ModalProps } from "antd";

export interface addBotModalPropsTypes extends ModalFuncProps {
    updateList?: (...args: any[]) => any,
    data?: {
        bot_id: number,
        bot_info?: IBot
    } | null
} 