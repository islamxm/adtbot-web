import styles from './AddBotModal.module.scss';
import {FC, useState, useEffect, useCallback} from 'react';
import { addBotModalPropsTypes } from './types';
import { Modal } from 'antd';
import {Row, Col} from 'antd';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import Select from '@/components/Select/Select';

import { useAppSelector } from '@/hooks/useTypesRedux';
import ApiService from '@/service/apiService';
import notify from '@/helpers/notify';


const service = new ApiService();

const anonceOpts = [
    {value: '1', label: 'Binance'},
    {value: '2', label: 'Coinbase'},
    {value: '3', label: 'Kraken'},
    {value: '4', label: 'KuCoin'},
    {value: '5', label: 'Bitstamp'},
    {value: '6', label: 'Bitfinex'},
    {value: '7', label: 'OKX'},
    {value: '8', label: 'Bybit'},
    {value: '9', label: 'Upbit'},
    {value: '10', label: 'Huobi'},
]

const buyOpts = [
    {value: '1', label: 'Gate.io'},
    {value: '2', label: 'MEXC'},
    {value: '3', label: 'KuCoin'},
    {value: '4', label: 'Huobi'},
]


const AddBotModal:FC<addBotModalPropsTypes> = ({
    open,
    onCancel
}) => {
    const {tokens: {access}} = useAppSelector(s => s)
    const [firstLoad, setFirstLoad] = useState(false)
    const [secondLoad, setSecondLoad] = useState(false)


    const [monitor, setMonitor] = useState(1)
    const [exchange, setExchange] = useState(1)
    const [budget_usdt, setBudget_usdt] = useState(0)
    const [take_profit, setTake_profit] = useState(0)
    const [stop_loss, setStop_loss] = useState(0)
    const [stop_buy, setStop_buy] = useState(0)
    const [enabled, setEnabled] = useState(true)
    const [daily_volume, setDaily_volume] = useState(1)

    const [code, setCode] = useState('')


    const closeHandle = () => {
        if(onCancel) {
            onCancel()

            setMonitor(1)
            setExchange(1)
            setBudget_usdt(0)
            setTake_profit(0)
            setStop_loss(0)
            setStop_buy(0)
            setEnabled(true)
            setDaily_volume(1)
            setCode('')
        }
    }
    

    const createBot = () => {
        if(access) {
            console.log(access)
            setSecondLoad(true)
            service.createBot({
                bot_info: {
                    monitor,
                    exchange,
                    budget_usdt,
                    take_profit,
                    stop_loss,
                    stop_buy,
                    enabled,
                    daily_volume
                },
                bot_code: ''
            }, access).then(res => {
                console.log(res)
                if(res?.id) {
                    notify('Бот создан', 'SUCCESS')
                    closeHandle()
                }
            }).finally(() => {
                setSecondLoad(false)
            })
        }
    }

    const createAndEnableBot = () => {
        // if(access) {
        //     service.createBot({
        //         monitor,
        //         exchange,
        //         budget_usdt,
        //         take_profit,
        //         stop_loss,
        //         stop_buy,
        //         enabled,
        //         daily_volume
        //     }, access).then(res => {
        //         console.log(res)

        //         if(res) {
        //             //enable func
        //             service.enableBot(1, access).then(res => {
        //                 console.log(res)
        //             })
        //         } else {

        //         }
        //     })
        // }
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
                        <Col span={12}>
                            <Row gutter={[20,20]}>
                                <Col span={24}>
                                    <Select
                                        hint={'Биржа, которую будет парсить бот на предмет выхода анонса листинга'}
                                        label={'Анонс'}
                                        options={anonceOpts}
                                        onSelect={e => setMonitor(Number(e))}
                                        value={monitor.toString()}
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        hint={'Суточный объем монеты'}
                                        label='Объем'
                                        placeholder='140 USDT'
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        hint={'При увеличении цены на указанный процент, исполнится лимитный ордер на продажу'}
                                        label='TP'
                                        placeholder='2%'
                                        value={take_profit}
                                        type={'number'}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTake_profit(Number(e.target.value))}
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        hint={'Количество USDT, на которые будет совершена покупка монет'}
                                        label='Сумма'
                                        placeholder='150 USDT'
                                        type='number'
                                        value={budget_usdt}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBudget_usdt(Number(e.target.value))}
                                        />
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
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
                                        placeholder='30%'
                                        type='number'
                                        value={stop_buy}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStop_buy(Number(e.target.value))}
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        hint={'При снижении цены на указанный процент, исполнится лимитный ордер на продажу'}
                                        label='SL'
                                        placeholder='3%'
                                        type='number'
                                        value={stop_loss}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStop_loss(Number(e.target.value))}
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        // hint={'Код бота'}
                                        label='Код бота'
                                        placeholder=''
                                        // type='number'
                                        value={code}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
                                        />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    {/* action */}
                    <div className={styles.action}>
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
                    </div>
                </Col>
            </Row>
        </Modal>
    )
}

export default AddBotModal;