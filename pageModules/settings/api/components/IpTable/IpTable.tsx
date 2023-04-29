import styles from './IpTable.module.scss';
import { Row, Col } from 'antd';
import Button from '@/components/Button/Button';
import copyValue from '@/helpers/copyValue';
import { TbCopy } from 'react-icons/tb';

const IpTable = ({
    values
}: {values?: string[]}) => {



    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                {
                    values?.map((item,index) => (
                        <div className={styles.item} key={index}>{item}</div>
                    ))
                }
            </div>
            {
                values && values?.length > 0 ? (
                    <div className={styles.action}>
                        <Button
                            onClick={() => copyValue({value: values?.join(','), notifyLabel:'Адресы скопированы'})}
                            beforeIcon={<TbCopy/>}
                            />
                    </div>
                ) : null
            }
          
        </div>
    )
}

export default IpTable;