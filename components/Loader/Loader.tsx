import styles from './Loader.module.scss';
import { GridLoader } from 'react-spinners';


const Loader = () => {

    return (
        <div className={styles.wrapper}>
            <GridLoader color='var(--blue)' size={20} margin={2} style={{width: 100}}/>
        </div>
    )
}


export default Loader;