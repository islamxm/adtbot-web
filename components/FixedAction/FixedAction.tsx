import styles from './FixedAction.module.scss';
import Button from '../Button/Button';
import img from '@/public/assets/icons/tg-lg.svg';
import Image from 'next/image';
import {AiOutlinePlus} from 'react-icons/ai';


const FixedAction = () => {

    return (
        <a href='https://t.me/adtbot_support' target='_blank' className={styles.wrapper}>
             <div className={styles.item}>
                <Button
                    rounded
                    beforeIcon={<AiOutlinePlus/>}
                    />
            </div>
            <div className={styles.item}>
                <a className={styles.link} target={'_blank'}>
                    <Image
                        src={img}
                        width={76}
                        height={76}
                        alt={'telegram'}
                        />
                </a>
            </div>
           
            
            
        </a>
    )
}

export default FixedAction;