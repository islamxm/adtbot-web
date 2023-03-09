import { ModalFuncProps, Modal } from "antd";

export type statusTypes = 'error' | 'success'


export interface statusModalPropsTypes extends ModalFuncProps {
    status?: statusTypes,
    title?: string,
    text?: string,
    buttonText?: string,
    errorIcon?: React.ReactNode,
    successIcon?: React.ReactNode,
    defaultIcon?: React.ReactNode
}