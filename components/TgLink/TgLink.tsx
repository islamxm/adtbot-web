import styles from './TgLink.module.scss';
import Image from 'next/image';
import img from '@/public/assets/icons/tg-lg.svg';

const TgLink = () => {

    return (
        <a className={styles.wrapper} href="" target={'_blank'}>
            <Image
                src={img}
                alt={'telegram'}
                width={76}
                height={76}
                />
        </a>
    )

}

export default TgLink;