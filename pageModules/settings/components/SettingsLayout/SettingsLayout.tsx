import Button from '@/components/Button/Button';
import styles from './SettingsLayout.module.scss';


const SettingsLayout = ({
    children,
    onSave
}: {
    children?: React.ReactNode,
    onSave?: (...args: any[]) => any
}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                {children}
            </div>
            {
                onSave ? (
                    <div className={styles.action}>
                        <Button
                            onClick={onSave}
                            text='Сохранить'
                            style={{paddingLeft: 50, paddingRight: 50}}
                            />
                    </div>
                ) : null
            }
        </div>
    )
}

export default SettingsLayout;