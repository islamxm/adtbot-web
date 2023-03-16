import styles from './Empty.module.scss';
import Image from 'next/image';
import img from '@/public/assets/bots-empty.svg';

const Empty = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.img}>
                <Image
                    src={img}
                    alt="placeholder"
                    width={180}
                    height={190}
                    />
            </div>
            <div className={`${styles.label} heading_1`}>Ботов не найдено</div>
        </div>
    )
}

export default Empty;