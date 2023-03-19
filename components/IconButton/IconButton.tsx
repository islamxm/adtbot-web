import styles from './IconButton.module.scss';


const IconButton = ({
    icon,
    onClick,
    load,
    round,
    bg
}: {
    icon: React.ReactNode,
    onClick?: (...args: any[]) => any,
    load?: boolean,
    round?:boolean,
    bg?: string
}) => {

    return (
        <button 
            onClick={() => {
                if(onClick) onClick()
            }}
            className={`${styles.wrapper} ${round ? styles.round : ''}`} style={{backgroundColor: bg}}>
            {icon}
        </button>
    )
}

export default IconButton;