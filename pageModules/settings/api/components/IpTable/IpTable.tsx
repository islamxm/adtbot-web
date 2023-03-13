import styles from './IpTable.module.scss';
import { Row, Col } from 'antd';
import Button from '@/components/Button/Button';
import copyValue from '@/helpers/copyValue';
import { TbCopy } from 'react-icons/tb';

const IpTable = ({

}) => {



    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                <div className={styles.item}>15344439055</div>
                <div className={styles.item}>15344439055</div>
                <div className={styles.item}>15344439055</div>
                <div className={styles.item}>15344439055</div>
                <div className={styles.item}>15344439055</div>
                <div className={styles.item}>15344439055</div>
                <div className={styles.item}>15344439055</div>
                <div className={styles.item}>15344439055</div>
                <div className={styles.item}>15344439055</div>
                <div className={styles.item}>15344439055</div>
            </div>
            <div className={styles.action}>
                <Button
                    onClick={() => copyValue({value: 'уточнить как нужно копировать таблицу с ip-адресами', notifyLabel:'Адресы скопированы'})}
                    beforeIcon={<TbCopy/>}
                    />
            </div>
        </div>
    )
}

export default IpTable;