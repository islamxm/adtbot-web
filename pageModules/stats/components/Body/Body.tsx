import styles from './Body.module.scss';
import Pag from '@/components/Pag/Pag';
import { useEffect, useState } from 'react';
import Select from '@/components/Select/Select';
import HsButton from '@/components/HsButton/HsButton';
import { mock } from './mock';
import TableHead from '@/components/TableHead/TableHead';
import TableRow from '../TableRow/TableRow';
import {Row, Col} from 'antd';
import DatePicker from '@/components/DatePicker/DatePicker';
import moment from 'moment';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import {TbExternalLink} from 'react-icons/tb';
import { useAppSelector } from '@/hooks/useTypesRedux';
import ApiService from '@/service/apiService';
import { useAppDispatch } from '@/hooks/useTypesRedux';
import { updateSenseValue } from '@/store/actions';

// import locale from 'antd/es/date-picker/locale/ru_RU';


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
        sort: true,
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
        label:'Цена покупки',
        hint: 'Цена покупки',
        value: 'buy_price',
        sort: true,
        main: false
    },
    {
        label:'Цена продажи',
        hint: 'Цена продажи',
        value: 'sell_price',
        sort: true,
        main: false
    },
    {
        label:'PNL',
        hint: 'Profits and Losts. Заработок (или убыток) бота в USDT и процентах от суммы сделки',
        value: 'pnl',
        sort: false,
        main: true
    },
    {
        label:'Активация',
        // hint: 'Статус бота. Для отработанного бота указывается дата и время активации, для созданного бота — В ожидании, для черновика — Остановлен',
        value: '',
        sort: true,
        main: false
    },
    {
        label:'Остановка',
        // hint: 'Статус бота. Для отработанного бота указывается дата и время активации, для созданного бота — В ожидании, для черновика — Остановлен',
        value: '',
        sort: true,
        main: false
    },
]


const service = new ApiService()
const dateFormat = 'DD/MM/YYYY';

const periods = [
    {value:'1', label: 'Сегодня'},
    {value:'2', label: 'Последние 2 недели'},
    {value:'3', label: 'Месяц'},
    {value:'4', label: 'Полгода'},
    {value:'5', label: 'Год'},
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
    const dispatch = useAppDispatch()
    const {tokens: {access}, hideSensValue} = useAppSelector(s => s)
    const [hidden, setHidden] = useState<boolean>(false);
    const [tableSize, setTableSize] = useState('1')

    const [date, setDate] = useState<any>([dayjs(dayjs().add(-30, 'd'), dateFormat), dayjs(dayjs(), dateFormat)])

    
    const [list, setList] = useState<any[]>([])
    const [limit, setLimit] = useState(10)
    const [totalCount, setTotalCount] = useState(0)
    const [offset, setOffset] = useState(0)
    const [ordering, setOrdering] = useState(['id', 'monitor', 'exchange', 'bot_budget_usdt', 'activation_datetime', 'pair', 'announce_datetime', 'buy_price', 'sell_price', 'pnl', 'pnl_percentage', 'stop_datetime'])

    const [page, setPage] = useState(1)

    const [announces_count, setannounces_count] = useState(0)
    const [binance_announces, setbinance_announces] = useState(0)
    const [coinbase_announces, setcoinbase_announces] = useState(0)
    const [huobi_announces, sethuobi_announces] = useState(0)
    const [used_bots, setused_bots] = useState(0) 

    useEffect(() => {
        if(tableSize) {
            setPage(1)
            setLimit(switchTableSize(tableSize))
        }
    }, [tableSize])
  

    const updateList = () => {
        if(access) {
            service.announceStats({
                first_date: date[0]?.format('YYYY-MM-DD'),
                second_date: date[1]?.format('YYYY-MM-DD'),
                ordering,
                limit: 10,
                offset:  page === 1 ? offset : limit * (page - 1),
                announce_source: 1
            }, access).then(res => {
                console.log(res)
                setList(res?.announces)
                setTotalCount(res?.announces_count)
                setannounces_count(res?.announces_count)
                setbinance_announces(res?.binance_announces)
                setcoinbase_announces(res?.coinbase_announces)
                sethuobi_announces(res?.huobi_announces)
                setused_bots(res?.used_bots)
            })

        }
    }

    useEffect(() => {
        updateList && updateList()
    }, [limit, offset, ordering, access, page, date])

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



    return (
        <div className={styles.wrapper}>
            <div className="table">
                <div className="table-top">
                    <div className={styles.top}>
                        <div className={styles.part}>
                            <div className={styles.item}>
                                <DatePicker
                                    placeholder={['Дата начала', 'Дата конца']}
                                    defaultValue={date}
                                    onChange={setDate}
                                    />
                            </div>
                            {/* <div className={styles.item}>
                                <Select
                                    options={periods}
                                    value={period}
                                    onChange={setPeriod}
                                    noBorder
                                    />
                            </div> */}
                        </div>
                        <div className={styles.part}>
                            <div className={styles.item}>
                                <Select
                                    beforeLabel="Показывать"
                                    options={tableSizes}
                                    value={tableSize}
                                    onChange={setTableSize}
                                    noBorder
                                    />
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
                <div className="table-main custom-scroll-horizontal">
                    <table className="table-wrapper">
                        <TableHead onSort={onTableSort} list={tableHead}/>
                        <tbody>
                            {
                                list?.map((item, index) => (
                                    <TableRow 
                                        head={tableHead} 
                                        bot={item} 
                                        key={index}/>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="table-bottom">
                    <div className={styles.bottom}>
                        <Row gutter={[50, 50]}>
                            <Col span={24}>
                                <Row gutter={[10,10]}>
                                    <Col span={12}>
                                        <div className={styles.info}>
                                            <div className={styles.head}>Всего: {announces_count}</div>
                                            <ul className={styles.body}>
                                                <li className={styles.body_item}>Анонсы Binance: {binance_announces}</li>
                                                <li className={styles.body_item}>Анонсы Coinbase: {coinbase_announces}</li>
                                                <li className={styles.body_item}>Анонсы Huobi: {huobi_announces}</li>
                                                <li className={styles.body_item}>Отработанные боты: {used_bots}</li>
                                                {/* <li className={styles.body_item}>PNL: 726 USDT</li> */}
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <div className={styles.action}>
                                            <div className={styles.item}>
                                                <button className={styles.btn}> <span><TbExternalLink/></span> Экспорт</button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                
                            </Col>
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
                        </Row>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Body;