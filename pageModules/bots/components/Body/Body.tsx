import styles from './Body.module.scss';
import TableHead from '@/components/TableHead/TableHead';
import { mock } from './mock';
import TableRow from '@/components/TableRow/TableRow';
import StopBotModal from '../../modals/StopBotModal/StopBotModal';
import DeleteBotModal from '../../modals/DeleteBotModal/DeleteBotModal';
import Pag from '@/components/Pag/Pag';
import { useState } from 'react';
import Select from '@/components/Select/Select';
import HsButton from '@/components/HsButton/HsButton';
import Empty from '../Empty/Empty';
import WarnPanel from '@/components/WarnPanel/WarnPanel';

const statusOptions = [
    {value: '1', label: 'Все'},
    {value: '2', label: 'Активный'},
    {value: '3', label: 'В режиме ожидания'},
    {value: '4', label: 'Остановлен'},
]

 


const Body = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [status, setStatus] = useState<string>('1');
    const [hidden, setHidden] = useState(false)

    return (
        <div className={styles.wrapper}>
            <StopBotModal/>
            <DeleteBotModal/>
            <div className='table'>
                <div className="table-top">
                    <div className={styles.top}>
                        <div className={styles.item}>
                            <Select 
                                noBorder
                                value={status}
                                options={statusOptions}
                                onChange={setStatus}
                                />
                        </div>
                        <div className={styles.item}>
                            <HsButton
                                onClick={setHidden}
                                isActive={hidden}
                                />
                        </div>
                    </div>
                </div>
                <div className="table-main custom-scroll-horizontal">
                    <table className="table-wrapper">
                        <TableHead list={mock?.head}/>
                        <tbody>
                            {
                                mock?.body?.map((list, index) => (
                                    <TableRow list={list} key={index}/>
                                ))
                            }
                            
                        </tbody>
                    </table>
                </div>
                <div className="table-bottom">
                    <Pag
                        pageSize={1}
                        total={10}
                        current={currentPage}
                        onChange={setCurrentPage}
                        />
                </div>
            </div>
            {/* <Empty/> */}
            {/* <WarnPanel/> */}
        </div>
    )
}

export default Body;