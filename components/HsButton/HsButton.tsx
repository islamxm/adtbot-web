import styles from './HsButton.module.scss';
import {RiEyeLine, RiEyeCloseLine} from 'react-icons/ri';
import {motion} from 'framer-motion';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';

const HsButton = ({
    isActive, 
    onClick,
    size = 16
}: {
    isActive?: boolean, 
    onClick: (...args: any[]) => any,
    size?: number
}) => {



    return (
        <button className={styles.wrapper} onClick={() => onClick((s: boolean) => !s)}>
            {/* {
                isActive ? (
                    <motion.div
                        
                        className={styles.in}
                        >
                        <RiEyeLine size={size}/>
                    </motion.div>
                ) : (
                    <motion.div
                        className={styles.in}
                        >
                        <RiEyeCloseLine size={size}/>
                    </motion.div>
                )
            } */}
            {
                isActive ? <AiOutlineEye size={size}/> : <AiOutlineEyeInvisible size={size}/>
            }
        </button>   
    )

}

export default HsButton;