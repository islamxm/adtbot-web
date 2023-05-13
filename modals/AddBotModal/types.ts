import {  ModalFuncProps, ModalProps } from "antd";

export interface addBotModalPropsTypes extends ModalFuncProps {
    updateList?: (...args: any[]) => any
} 