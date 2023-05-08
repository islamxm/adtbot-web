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
    {value: '2', label: 'Активные'},
    {value: '3', label: 'В режиме ожидания'},
    {value: '4', label: 'Остановлен'},
]
const tableSizes = [
    {value: '1', label: '10 строк'},
    {value: '2', label: '25 строк'},
    {value: '3', label: '50 строк'},
    {value: '4', label: '100 строк'},
]
 

const switchTableSize = (value: any) => {
    if(value === '1') {
        return 10
    }
    if(value === '2') {
        return 25
    }
    if(value === '3') {
        return 50
    }
    if(value === '4') {
        return 100
    }
    return 10
}


const Body = () => {
    const {tokens: {access}} = useAppSelector(s => s)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [hidden, setHidden] = useState(false)
    const [tableSize, setTableSize] = useState('1')
    const [addBotModal, setAddBotModal] = useState(false)

    const openAddBotModal = () => setAddBotModal(true)
    const closeAddBotModal = () => setAddBotModal(false)

    const [list, setList] = useState<any[]>([])

    const [totalCount, setTotalCount] = useState(0)

    // filter
    const [bot_filter, setBot_filter] = useState<1 | 2 | 3 | 4>(1) //ALL = 1 ACTIVE = 2 WAITING = 3 STOPPED = 4
    const [limit, setLimit] = useState(0)
    const [offset, setOffset] = useState(0)
    const [ordering, setOrdering] = useState(['monitor', 'exchange', 'budget_usdt', 'daily_volume', 'take_profit', 'stop_loss', 'stop_buy'])

    const [page, setPage] = useState(1)


    useEffect(() => {
        if(tableSize) {
            setPage(1)
            setLimit(switchTableSize(tableSize))
        }
    }, [tableSize])

    useEffect(() => {
        setPage(1)
    }, [bot_filter])

    const updateList = useCallback(() => {
        
        if(access) {

            service.getBots({
                bot_filter,
                limit,
                offset: page === 1 ? offset : limit * (page - 1),
                ordering: ordering
            }, access).then(res => {
                console.log(res)
                console.log(res?.bots_info)
                setTotalCount(res?.bots_count)
                setList(res?.bots_info)
            })

        }


    }, [bot_filter, limit, offset, ordering, access, page])

    

    useEffect(() => {
        updateList && updateList()
    }, [bot_filter, limit, offset, ordering, access, page])

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
                                    defaultValue={bot_filter.toString()}
                                    options={statusOptions}
                                    onChange={(e, v) => setBot_filter(e)}
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
                                list?.map((item, index) => (
                                    <TableRow head={mock?.head} bot={item} key={index}/>
                                ))
                            }
                            
                        </tbody>
                    </table>
                </div>
                {
                    totalCount > limit ? (
                        <div className="table-bottom">
                            <Pag
                                pageSize={1}
                                total={Math.ceil(totalCount / limit)}
                                current={page}
                                onChange={setPage}
                                />
                        </div>
                    ) : null
                }
            </div>
            {/* <Empty/> */}
            {/* <WarnPanel/> */}
        </div>
    )
}

export default Body;