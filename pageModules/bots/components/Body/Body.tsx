import styles from './Body.module.scss';
import TableHead from '@/components/TableHead/TableHead';
import { mock } from './mock';
import TableRow from '@/components/TableRow/TableRow';
import StopBotModal from '../../modals/StopBotModal/StopBotModal';
import DeleteBotModal from '../../modals/DeleteBotModal/DeleteBotModal';
import Pag from '@/components/Pag/Pag';
import { useState, useEffect, useCallback } from 'react';
import Select from '@/components/Select/Select';
import HsButton from '@/components/HsButton/HsButton';
import Empty from '../Empty/Empty';
import WarnPanel from '@/components/WarnPanel/WarnPanel';
import ApiService from '@/service/apiService';
import { useAppSelector } from '@/hooks/useTypesRedux';
import { getCookie } from 'typescript-cookie';
import Button from '@/components/Button/Button';
import {AiOutlinePlus} from 'react-icons/ai';
import AddBotModal from '@/modals/AddBotModal/AddBotModal';


const service = new ApiService();


const statusOptions = [
    {value: '1', label: 'Все'},
    {value: '2', label: 'Активный'},
    {value: '3', label: 'В режиме ожидания'},
    {value: '4', label: 'Остановлен'},
    {value: '5', label: 'Отработан'},
]
const tableSizes = [
    {value: '1', label: '10 строк'},
    {value: '2', label: '25 строк'},
    {value: '3', label: '50 строк'},
    {value: '4', label: '100 строк'},
]
 


const Body = () => {
    const {tokens: {access}} = useAppSelector(s => s)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [status, setStatus] = useState<string>('1');
    const [hidden, setHidden] = useState(false)
    const [tableSize, setTableSize] = useState('1')
    const [addBotModal, setAddBotModal] = useState(false)

    const openAddBotModal = () => setAddBotModal(true)
    const closeAddBotModal = () => setAddBotModal(false)

    const [list, setList] = useState<any[]>([])


    const getList = useCallback(() => {
        if(access) {
            service.getBots(access).then(res => {
                console.log(res)
                setList(res)
            })
        }
    }, [access])

    useEffect(() => {
        getList() 
    }, [access])

    return (
        <div className={styles.wrapper}>
            <AddBotModal
                open={addBotModal}
                onCancel={closeAddBotModal}
                />
            <StopBotModal/>
            <DeleteBotModal/>
            <div className={styles.action}>
                <Button
                    onClick={openAddBotModal} 
                    beforeIcon={<AiOutlinePlus/>} 
                    style={{paddingLeft: 30, paddingRight: 30}} 
                    text='Создать бот'/>
            </div>
            <div className='table'>
                <div className="table-top">
                    <div className={styles.top}>
                        <div className={styles.part}>
                            <div className={styles.item}>
                                <Select 
                                    noBorder
                                    value={status}
                                    options={statusOptions}
                                    onChange={setStatus}
                                    />
                            </div>
                        </div>
                        <div className={styles.part}>
                            <div className={styles.item}>
                                <div className={styles.item}>
                                    <Select
                                        beforeLabel="Показывать"
                                        options={tableSizes}
                                        value={tableSize}
                                        onChange={setTableSize}
                                        noBorder
                                        />
                                </div>  
                            </div>
                            <div className={styles.item}>
                                <HsButton
                                    onClick={setHidden}
                                    isActive={hidden}
                                    />
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="table-main custom-scroll-horizontal">
                    <table className="table-wrapper">
                        <TableHead list={mock?.head}/>
                        <tbody>
                            {
                                mock?.body?.map((list, index) => (
                                    <TableRow head={mock?.head} list={list} key={index}/>
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