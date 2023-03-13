import { SelectProps } from "antd";

export interface selectPropsTypes extends SelectProps {
    label?: string,
    hint?: boolean | React.ReactNode | string,
    noBorder?: boolean ,
    beforeLabel?: React.ReactNode
}