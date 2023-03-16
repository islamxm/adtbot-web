import styles from './WarnPanel.module.scss';
import Button from '../Button/Button';


const WarnPanel = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                <p>
                На балансе платформы закончились средства.<br/>
                Функционал платформы ограничен.
                </p>
            </div>
            <div className={styles.action}>
                <Button
                    variant={'danger'}
                    text='Пополнить'
                    fill
                    />
            </div>
        </div>
    )
}

export default WarnPanel;