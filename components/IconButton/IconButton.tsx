import styles from './IconButton.module.scss';


const IconButton = ({
    icon,
    onClick,
    load,
}: {
    icon: React.ReactNode,
    onClick?: (...args: any[]) => any,
    load?: boolean
}) => {

    return (
        <button 
            onClick={() => {
                if(onClick) onClick()
            }}
            className={styles.wrapper}>
            {icon}
        </button>
    )
}

export default IconButton;