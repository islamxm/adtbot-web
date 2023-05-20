import styles from './Body.module.scss';
import Pag from '@/components/Pag/Pag';
import { useEffect, useState } from 'react';
import Select from '@/components/Select/Select';
import HsButton from '@/components/HsButton/HsButton';
import { mock } from './mock';
import TableHead from '@/components/TableHead/TableHead';
import TableRow from '@/components/TableRow/TableRow';
import {Row, Col} from 'antd';
import DatePicker from '@/components/DatePicker/DatePicker';
import moment from 'moment';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import {TbExternalLink} from 'react-icons/tb';
import { useAppSelector } from '@/hooks/useTypesRedux';
import ApiService from '@/service/apiService';
// import locale from 'antd/es/date-picker/locale/ru_RU';


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
    const {tokens: {access}} = useAppSelector(s => s)
    const [hidden, setHidden] = useState<boolean>(false);
    const [tableSize, setTableSize] = useState('1')

    const [date, setDate] = useState<any>([dayjs(moment(Date.now()).format('DD/MM/YYYY'), dateFormat), dayjs(moment(Date.now()).format('DD/MM/YYYY'), dateFormat)])


    const [list, setList] = useState<any[]>([])
    const [limit, setLimit] = useState(0)
    const [totalCount, setTotalCount] = useState(0)
    const [offset, setOffset] = useState(0)
    const [ordering, setOrdering] = useState(['id', 'monitor', 'exchange', 'bot_budget_usdt', 'activation_datetime', 'pair', 'announce_datetime', 'buy_price', 'sell_price', 'pnl', 'pnl_percentage', 'stop_datetime'])

    const [page, setPage] = useState(1)


    // useEffect(() => {
    //     updateList()
    // }, [access])

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
                offset,
                announce_source: 1
            }, access).then(res => {
                console.log(res)
            })

        }
    }

    useEffect(() => {
        updateList && updateList()
    }, [limit, offset, ordering, access, page])



    return (
        <div className={styles.wrapper}>
            <div className="table">
                <div className="table-top">
                    <div className={styles.top}>
                        <div className={styles.part}>
                            <div className={styles.item}>
                                
                                {/* Date */}
                                
                                <DatePicker
                                    placeholder={['Дата начала', 'Дата конца']}
                                    defaultValue={date}
                                    onChange={setDate}
                                    // locale={locale}
                                    />

                                {/* Date */}

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
                                <HsButton isActive={hidden} onClick={setHidden}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-main custom-scroll-horizontal">
                    <table className="table-wrapper">
                        <TableHead list={mock?.head}/>
                        <tbody>
                            {/* {
                                mock?.body?.map((list, index) => (
                                    <TableRow head={mock.head} list={list} key={index}/>
                                ))
                            } */}
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
                                            <div className={styles.head}>Всего</div>
                                            <ul className={styles.body}>
                                                <li className={styles.body_item}>Анонсы Binance: 1</li>
                                                <li className={styles.body_item}>Анонсы Coinbase: 1</li>
                                                <li className={styles.body_item}>Анонсы Huobi: 2</li>
                                                <li className={styles.body_item}>Отработанные боты: 4</li>
                                                <li className={styles.body_item}>PNL: 726 USDT</li>
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
                            <Col span={24}>
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
                            </Col>
                        </Row>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Body;