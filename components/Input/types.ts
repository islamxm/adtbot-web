export interface inputPropsTypes extends React.HTMLProps<HTMLInputElement> {
    error?: boolean,
    label?: string,
    errorText?: string,
    hint?: boolean | React.ReactNode | string
}