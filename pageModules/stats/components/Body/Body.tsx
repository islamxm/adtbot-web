import styles from './Body.module.scss';
import Pag from '@/components/Pag/Pag';
import { useState } from 'react';
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
// import locale from 'antd/es/date-picker/locale/ru_RU';

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

const Body = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [hidden, setHidden] = useState<boolean>(false);
    const [period, setPeriod] = useState('2')
    const [tableSize, setTableSize] = useState('1')
    const [date, setDate] = useState(moment(Date.now()).format('DD/MM/YYYY'))


    return (
        <div className={styles.wrapper}>
            <div className="table">
                <div className="table-top">
                    <div className={styles.top}>
                        <div className={styles.part}>
                            <div className={styles.item}>
                                
                                {/* Date */}
                                
                                <DatePicker
                                    placeholder='Выберите дату'
                                    defaultValue={dayjs(date, dateFormat)}
                                    // locale={locale}
                                    />

                                {/* Date */}

                            </div>
                            <div className={styles.item}>
                                <Select
                                    options={periods}
                                    value={period}
                                    onChange={setPeriod}
                                    noBorder
                                    />
                            </div>
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
                            {
                                mock?.body?.map((list, index) => (
                                    <TableRow list={list} key={index}/>
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
                                            <div className={styles.head}>Всего</div>
                                            <ul className={styles.body}>
                                                <li className={styles.body_item}>Анонсы Binance - 1</li>
                                                <li className={styles.body_item}>Анонсы Coinbase - 1</li>
                                                <li className={styles.body_item}>Анонсы Huobi - 2</li>
                                                <li className={styles.body_item}>Отработанные боты - 4</li>
                                                <li className={styles.body_item}>PNL - 726 USDT</li>
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
                                <div className={styles.pag}>
                                    <Pag
                                        pageSize={1}
                                        total={10}
                                        current={currentPage}
                                        onChange={setCurrentPage}
                                        />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Body;