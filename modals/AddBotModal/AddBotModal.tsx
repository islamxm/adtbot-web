import styles from './AddBotModal.module.scss';
import {FC, useState, useEffect, useCallback} from 'react';
import { addBotModalPropsTypes } from './types';
import { Modal } from 'antd';
import {Row, Col} from 'antd';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import Select from '@/components/Select/Select';
import { lastCreatedBot } from '@/store/actions';
import { useAppSelector, useAppDispatch } from '@/hooks/useTypesRedux';
import ApiService from '@/service/apiService';
import notify from '@/helpers/notify';


const service = new ApiService();

// const anonceOpts = [
//     {value: '1', label: 'Binance'},
//     {value: '2', label: 'Coinbase'},
//     {value: '3', label: 'Kraken'},
//     {value: '4', label: 'KuCoin'},
//     {value: '5', label: 'Bitstamp'},
//     {value: '6', label: 'Bitfinex'},
//     {value: '7', label: 'OKX'},
//     {value: '8', label: 'Bybit'},
//     {value: '9', label: 'Upbit'},
//     {value: '10', label: 'Huobi'},
// ]

const buyOpts = [
    {value: '1', label: 'Gate.io'},
    {value: '2', label: 'MEXC'},
    {value: '3', label: 'KuCoin'},
    {value: '4', label: 'Huobi'},
]


const AddBotModal:FC<addBotModalPropsTypes> = ({
    open,
    onCancel,
    updateList,
    data
}) => {
    const dispatch = useAppDispatch()
    const {tokens: {access}} = useAppSelector(s => s)
    const [firstLoad, setFirstLoad] = useState(false)
    const [secondLoad, setSecondLoad] = useState(false)

    const [anonces, setAnonces] = useState<{value: number, label: string}[]>([])

    //errors
    const [budget_usdt_error, setBudget_usdt_error] = useState(false)
    const [take_profit_error, setTake_profit_error] = useState(false)
    const [stop_loss_error, setStop_loss_error] = useState(false)
    const [stop_buy_error, setStop_buy_error] = useState(false)
    const [daily_volume_error, setDaily_volume_error] = useState(false)



    const [monitor, setMonitor] = useState<any>(1)
    const [exchange, setExchange] = useState<any>(1)
    const [budget_usdt, setBudget_usdt] = useState<any>()
    const [take_profit, setTake_profit] = useState<any>()
    const [stop_loss, setStop_loss] = useState<any>()
    const [stop_buy, setStop_buy] = useState<any>()
    const [enabled, setEnabled] = useState<any>(true)
    const [daily_volume, setDaily_volume] = useState<any>()




    const [bot_code, setBot_code] = useState<any>('')

    const [id, setId] = useState<any>()


    useEffect(() => {
        if(data) {
            console.log(data)
            setId(data?.bot_id)

            setMonitor(data?.bot_info?.monitor)
            setExchange(data?.bot_info?.exchange)
            setBudget_usdt(data?.bot_info?.budget_usdt)
            setTake_profit(data?.bot_info?.take_profit)
            setStop_loss(data?.bot_info?.stop_loss)
            setStop_buy(data?.bot_info?.stop_buy)
            setEnabled(data?.bot_info?.enabled)
            setDaily_volume(data?.bot_info?.daily_volume)
            setBot_code(data?.bot_info?.bot_code)
        }
    }, [data])

    useEffect(() => {
        if(access) {
            service.getTarifExchanges(access).then(res => {
                setAnonces(res?.map((i:any) => ({value: i.value.toString(), label: i.label})))
            })
        }
    }, [access])


    const closeHandle = () => {
        if(onCancel) {
            onCancel()

            setMonitor(1)
            setExchange(1)
            setBudget_usdt('')
            setTake_profit('')
            setStop_loss('')
            setStop_buy('')
            setEnabled(true)
            setDaily_volume('')
            setBot_code('')
        }
    }
    

    const createBot = () => {
        if(monitor && exchange && budget_usdt && take_profit && stop_loss && stop_buy && daily_volume) {
            if(access) {
                setSecondLoad(true)
                service.createBot({
                    bot_info: {
                        monitor,
                        exchange,
                        budget_usdt,
                        take_profit,
                        stop_loss,
                        stop_buy,
                        enabled: false,
                        daily_volume
                    },
                    bot_code: ''
                }, access).then(res => {
                    if(res?.id) {
                        notify('Бот создан', 'SUCCESS')
                        closeHandle()
                        dispatch(lastCreatedBot(res))
                        closeHandle()
                        // updateList && updateList()
                    } 
                    if(res?.detail === 'Bad user tariff!') {
                        notify('Ваш тариф не позволяет выполнить данное действие', 'ERROR')
                    }
                }).finally(() => {
                    setSecondLoad(false)
                })
            }
        } else {
            notify('Заполните все поля', 'ERROR')
            !budget_usdt ? setBudget_usdt_error(true) : setBudget_usdt_error(false)
            !take_profit ? setTake_profit_error(true) : setTake_profit_error(false)
            !stop_loss ? setStop_loss_error(true) : setStop_loss_error(false)
            !stop_buy ? setStop_buy_error(true) : setStop_buy_error(false)
            !daily_volume ? setDaily_volume_error(true) : setDaily_volume_error(false)
        }

        
        
    }

    const createAndEnableBot = () => {
        if(access) {
            setFirstLoad(true)
            service.createBot({
                bot_info: {
                    monitor,
                    exchange,
                    budget_usdt,
                    take_profit,
                    stop_loss,
                    stop_buy,
                    enabled: true,
                    daily_volume
                },
                bot_code: ''
            }, access).then(res => {
                if(res?.id) {
                    // 
                    // service.enableBot(res.id, access).then(r => {
                    //     console.log(r)
                    //     if(r?.id) {
                    //         notify('Бот создан и запущен', 'SUCCESS')
                    //         dispatch(lastCreatedBot(res))
                    //     } else {
                    //         notify('Бот создался но не запустился', 'ERROR')
                    //         dispatch(lastCreatedBot(res))
                    //     }
                    // }).finally(() => {
                    //     closeHandle()
                    //     setFirstLoad(false)
                    // })
                    dispatch(lastCreatedBot(res))
                    notify('Бот создан и запущен', 'SUCCESS')
                    closeHandle()
                } else {
                    notify('Произошла ошибка', 'ERROR')
                }
                if(res?.detail === 'Bad user tariff!') {
                    notify('Ваш тариф не позволяет выполнить данное действие', 'ERROR')
                }
            }).finally(() => {
                setFirstLoad(false)

            })
        }
    }


    const editBot = () => {
        if(access && id) {
            setFirstLoad(true)
            if(enabled) {
                service.disableBot(id, access).then(res => {
                    if(res === true) {
                        service.editBot({
                            bot_id: id,
                            bot_info: {
                                monitor,
                                exchange,
                                budget_usdt: Number(budget_usdt),
                                take_profit: Number(take_profit),
                                stop_loss: Number(stop_loss),
                                stop_buy: Number(stop_buy),
                                daily_volume: Number(daily_volume),
                                enabled: true
                            }
                        }, access).then(r => {
                            if(r?.id) {
                                notify('Бот изменен', 'SUCCESS')
                                notify('Бот запущен', 'SUCCESS')
                                closeHandle()
                                dispatch(lastCreatedBot(res))
                                closeHandle()
                            } else {
                                notify('Произошла ошибка', 'ERROR')
                            }
                        }).finally(() => setFirstLoad(false))
                    } else {
                        console.log('error when disable bot')
                    }
                })
            } else {
                service.editBot({
                    bot_id: id,
                    bot_info: {
                        monitor,
                        exchange,
                        budget_usdt: Number(budget_usdt),
                        take_profit: Number(take_profit),
                        stop_loss: Number(stop_loss),
                        stop_buy: Number(stop_buy),
                        daily_volume: Number(daily_volume)
                    }
                }, access).then(res => {
                    if(res?.id) {
                        notify('Бот изменен', 'SUCCESS')
                        closeHandle()
                        dispatch(lastCreatedBot(res))
                        closeHandle()
                    } else {
                        notify('Произошла ошибка', 'ERROR')
                    }
                }).finally(() => setFirstLoad(false))
            }
            

            
        }
    }
    


    return (
        <Modal
            open={open}
            onCancel={closeHandle}
            width={635}
            title="Создание бота"
            className={`${styles.wrapper} modal`}
            >
            <Row gutter={[25,25]}>
                <Col span={24}>
                    {/* body */}
                    <Row gutter={[15,15]}>
                        <Col span={24} sm={12}>
                            <Row gutter={[20,20]}>
                                <Col span={24}>
                                    <Select
                                        hint={'Биржа, которую будет парсить бот на предмет выхода анонса листинга. В списке представлены биржи, соответствующие вашему тарифному плану.'}
                                        label={'Анонс'}
                                        options={anonces}
                                        onSelect={e => setMonitor(Number(e))}
                                        value={monitor.toString()}
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        hint={'Суточный объем монеты'}
                                        label='Мин. суточный объем (млн. USDT)'
                                        // placeholder='140 USDT'
                                        type={'number'}
                                        value={daily_volume}
                                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setDaily_volume(e.target.value)}
                                        error={daily_volume_error}
                                        onFocus={() => setDaily_volume_error(false)}
                                        icon={'млн. USDT'}
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        hint={'При увеличении цены на указанный процент, исполнится лимитный ордер на продажу'}
                                        label='Take Profit (%)'
                                        // placeholder='2%'
                                        value={take_profit}
                                        type={'number'}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTake_profit(e.target.value)}
                                        error={take_profit_error}
                                        onFocus={() => setTake_profit_error(false)}
                                        icon={'%'}
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        hint={'Количество USDT, на которые будет совершена покупка монет'}
                                        label='Обьем (USDT)'
                                        // placeholder='150 USDT'
                                        type='number'
                                        value={budget_usdt}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBudget_usdt(e.target.value)}
                                        error={budget_usdt_error}
                                        onFocus={() => setBudget_usdt_error(false)}
                                        icon='USDT'
                                        />
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24} sm={12}>
                            <Row gutter={[20,20]}>
                                <Col span={24}>
                                    <Select
                                        hint={'Биржа, на которой будет осуществлена покупка в момент анонса'}
                                        label={'Покупка'}
                                        options={buyOpts}
                                        value={exchange.toString()}
                                        onSelect={e => setExchange(Number(e))}
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        hint={'Отклонение цены монеты от первой покупки, при котором бот прекращает покупку по маркету, если не выкуплено на всю сумму, указанную в поле “Сумма USDT”. Например, первая маркетная покупка произошла по цене 1, то при выставленном 10% в данном поле, последующие покупки при наличии выделенных средств прекращаются при достижении цены 1.1)'}
                                        label='Slippage'
                                        // placeholder='30%'
                                        type='number'
                                        value={stop_buy}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStop_buy(e.target.value)}
                                        error={stop_buy_error}
                                        onFocus={() => setStop_buy_error(false)}
                                        icon={'%'}
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        hint={'При снижении цены на указанный процент, исполнится лимитный ордер на продажу'}
                                        label='Stop Loss'
                                        // placeholder='3%'
                                        type='number'
                                        value={stop_loss}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStop_loss(e.target.value)}
                                        error={stop_loss_error}
                                        onFocus={() => setStop_loss_error(false)}
                                        icon={'%'}
                                        />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    {/* action */}
                    <div className={styles.action}>
                        {
                            data ? (
                                <div className={styles.item}>
                                    <Button
                                        load={firstLoad}
                                        text={enabled ? 'Сохранить и перезапустить' : 'Сохранить'}
                                        onClick={editBot}
                                        // disabled
                                        />
                                </div>
                            ) : (
                               <>
                                    <div className={styles.item}>
                                        <Button
                                            load={firstLoad}
                                            text='Создать и запустить'
                                            onClick={createAndEnableBot}
                                            // disabled
                                            />
                                    </div>
                                    <div className={styles.item}>
                                        <Button
                                            onClick={createBot}
                                            load={secondLoad}
                                            text='Создать'
                                            variant={'simple'}
                                            // disabled
                                            />
                                    </div>
                               </>
                            )
                        }
                    </div>
                </Col>
            </Row>
        </Modal>
    )
}

export default AddBotModal;