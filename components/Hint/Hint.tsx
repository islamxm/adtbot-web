import styles from './Hint.module.scss';


const Hint = ({children} : {children: React.ReactNode}) => {

    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default Hint;