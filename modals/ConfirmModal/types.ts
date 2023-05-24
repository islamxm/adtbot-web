import { ModalFuncProps } from "antd";

export interface confirmModalPropsTypes extends ModalFuncProps {
    text?: string,
    onConfirm?: (...args: any[]) => any,
    load?: boolean
}