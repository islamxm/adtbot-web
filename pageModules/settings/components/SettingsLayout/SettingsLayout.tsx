import Button from '@/components/Button/Button';
import styles from './SettingsLayout.module.scss';


const SettingsLayout = ({
    children,
    onSave,
    load = false,
    disabled = false
}: {
    children?: React.ReactNode,
    onSave?: (...args: any[]) => any,
    load?: boolean,
    disabled?: boolean
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
                            disabled={disabled}
                            load={load}
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