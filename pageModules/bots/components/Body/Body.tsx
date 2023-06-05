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
import { useAppDispatch } from '@/hooks/useTypesRedux';
import { updateSenseValue } from '@/store/actions';
import { useSubscription, gql, useApolloClient } from '@apollo/client';

const service = new ApiService();



const tableHead = [
    {
        label:'Анонс',
        hint: 'Биржа, на которой будет парситься анонс листинга',
        value: 'monitor',
        sort: true,
        main: true
    },
    {
        label:'Покупка',
        hint: 'Биржа, на которой будет осуществлена покупка в момент анонса',
        value: 'exchange',
        sort: true,
        main: false
    },
    {
        label:'Пара',
        hint: 'Название купленной монеты к USDT',
        value: '',
        sort: false,
        main: false
    },
    {
        label:'Сумма',
        hint: 'Количество USDT, на которые будет совершена покупка анонсируемых монет',
        value: 'budget_usdt',
        sort: true,
        main: false
    },
    {
        label:'Объем',
        hint: 'Суточный объем монеты',
        value: 'daily_volume',
        sort: true,
        main: false
    },
    {
        label:'Slippage',
        hint: 'Проскальзывание. Максимальное изменение цены монеты, при котором прекращается покупка',
        value: '',
        sort: false,
        main: false
    },
    {
        label:'TP',
        hint: 'Take Profit. При каком увеличении цены в процентах выставляется лимитный ордер на продажу',
        value: 'take_profit',
        sort: true,
        main: false
    },
    {
        label:'SL',
        hint: 'Stop Loss. При каком уменьшении цены в процентах выставляется лимитный ордер на продажу',
        value: 'stop_loss',
        sort: true,
        main: false
    },
    {
        label:'Buy',
        hint: 'Цена покупки',
        value: '',
        sort: true,
        main: false
    },
    {
        label:'Sell',
        hint: 'Цена продажи',
        value: '',
        sort: false,
        main: false
    },
    {
        label:'PNL',
        hint: 'Profits and Losts. Заработок (или убыток) бота в USDT и процентах от суммы сделки',
        value: '',
        sort: false,
        main: true
    },
    {
        label:'Статус бота',
        hint: 'Статус бота. Для отработанного бота указывается дата и время активации, для созданного бота — В ожидании, для черновика — Остановлен',
        value: '',
        sort: false,
        main: false
    },
]


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


const TEST_SUB = gql`
  subscription OnPNLUpdate {
    bot_info {
      bot_id
      pnl
    }
  }
`;


const Body = () => {
    const client = useApolloClient
    const {data, error} = useSubscription(TEST_SUB, {
        onSubscriptionComplete: () => {
            console.log('SUBS COMPLETE')
        },
        onError: (e) => {
            console.log('ERROR IN SUBSCRIPTION')
            console.log(e)
        },
        onData: (e) => {
            console.log(e)
        } 
    })
    const {tokens: {access}, lastCreatedBot, hideSensValue} = useAppSelector(s => s)
    const dispatch = useAppDispatch()
    


    const [tableSize, setTableSize] = useState('1')
    const [addBotModal, setAddBotModal] = useState(false)

    const openAddBotModal = () => setAddBotModal(true)
    const closeAddBotModal = () => {
        setAddBotModal(false)
        setEditData(null)
    }

    
   
   

    const [list, setList] = useState<any[]>([])

    const [totalCount, setTotalCount] = useState(0)

    // filter
    const [bot_filter, setBot_filter] = useState<1 | 2 | 3 | 4>(1) //ALL = 1 ACTIVE = 2 WAITING = 3 STOPPED = 4
    const [limit, setLimit] = useState(0)
    const [offset, setOffset] = useState(0)
    const [ordering, setOrdering] = useState([
        'monitor', 
        'exchange', 
        'budget_usdt', 
        'daily_volume', 
        'take_profit', 
        'stop_loss', 
        'stop_buy'
    ])

    const [page, setPage] = useState(1)

    const [editData, setEditData] = useState(null)



    // useEffect(() => {
    //     console.log(data)
    // }, [data])


    useEffect(() => {
        if(lastCreatedBot && access) {
            updateList()
        }
    }, [lastCreatedBot, access])

    useEffect(() => {
        if(tableSize) {
            setPage(1)
            setLimit(switchTableSize(tableSize))
        }
    }, [tableSize])

    useEffect(() => {
        setPage(1)
    }, [bot_filter])

    const updateList = () => {
        if(access) {
            service.getBots({
                bot_filter,
                limit,
                offset: page === 1 ? offset : limit * (page - 1),
                ordering: ordering
            }, access).then(res => {
                setTotalCount(res?.bots_count)
                setList(res?.bots_info)
            })

        }
    }

    

    useEffect(() => {
        updateList && updateList()
    }, [bot_filter, limit, offset, ordering, access, page])


    const onTableSort = (item: string) => {
        console.log(item)
        const find = ordering?.find(i => i === item)
        console.log(find)
        if(find) {
            setOrdering(s => {
                const m = s;
                const rm = m.splice(m.findIndex(i => i === find), 1, `-${item}`)
                return [...m]
            })
        } else {    
            const tr = `-${item}`;
            setOrdering(s => {
                const m = s;
                const rm = m.splice(m.findIndex(i => i === tr), 1, item)
                return [...m]
            })          
        }
    }


    const openEdit = (data: any) => {
        setEditData(data)
        openAddBotModal()
    }






    return (
        <div className={styles.wrapper}>
            <AddBotModal
                data={editData}
                updateList={updateList}
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
                                    onClick={() => hideSensValue ? dispatch(updateSenseValue(false)) : dispatch(updateSenseValue(true))}
                                    isActive={hideSensValue}
                                    />
                            </div>
                        </div>
                        
                    </div>
                </div>
                {
                    list?.length > 0 ? (
                        <div className="table-main custom-scroll-horizontal">
                            <table className="table-wrapper">
                                <TableHead onSort={onTableSort} list={tableHead}/>
                                <tbody>
                                    {   
                                        list?.map((item, index) => (
                                            <TableRow
                                                onEdit={openEdit}
                                                updateList={updateList} 
                                                head={tableHead} 
                                                bot={item} 
                                                key={index}/>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    ) : <Empty/>
                }
                
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