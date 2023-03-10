export interface textPropsTypes extends React.HTMLProps<HTMLTextAreaElement> {
    error?: boolean,
    label?: string,
    errorText?: string,
    height?: number | string,
    resize?: boolean
}