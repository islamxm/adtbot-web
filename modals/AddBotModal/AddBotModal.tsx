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
    onCancel,
    updateList
}) => {
    const {tokens: {access}} = useAppSelector(s => s)
    const [firstLoad, setFirstLoad] = useState(false)
    const [secondLoad, setSecondLoad] = useState(false)


    const [monitor, setMonitor] = useState<number>(1)
    const [exchange, setExchange] = useState<number>(1)
    const [budget_usdt, setBudget_usdt] = useState<any>()
    const [take_profit, setTake_profit] = useState<any>()
    const [stop_loss, setStop_loss] = useState<any>()
    const [stop_buy, setStop_buy] = useState<any>()
    const [enabled, setEnabled] = useState(true)
    const [daily_volume, setDaily_volume] = useState<any>()

    const [code, setCode] = useState('')


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
            setCode('')
        }
    }
    

    const createBot = () => {
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
                    updateList && updateList()
                } 
                if(res?.detail === 'Bad user tariff!') {
                    notify('Ваш тариф не позволяет выполнить данное действие', 'ERROR')
                }
            }).finally(() => {
                setSecondLoad(false)
            })
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
                    notify('Бот создан и запущен', 'SUCCESS')
                    closeHandle()
                    updateList && updateList()
                }
                if(res?.detail === 'Bad user tariff!') {
                    notify('Ваш тариф не позволяет выполнить данное действие', 'ERROR')
                }
            }).finally(() => setFirstLoad(false))
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
                                        label='Объем (млн. USDT)'
                                        placeholder='140 USDT'
                                        type={'number'}
                                        value={daily_volume}
                                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setDaily_volume(e.target.value)}
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        hint={'При увеличении цены на указанный процент, исполнится лимитный ордер на продажу'}
                                        label='TP (%)'
                                        placeholder='2%'
                                        value={take_profit}
                                        type={'number'}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTake_profit(e.target.value)}
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        hint={'Количество USDT, на которые будет совершена покупка монет'}
                                        label='Обьем (USDT)'
                                        placeholder='150 USDT'
                                        type='number'
                                        value={budget_usdt}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBudget_usdt(e.target.value)}
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
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStop_buy(e.target.value)}
                                        />
                                </Col>
                                <Col span={24}>
                                    <Input
                                        hint={'При снижении цены на указанный процент, исполнится лимитный ордер на продажу'}
                                        label='SL'
                                        placeholder='3%'
                                        type='number'
                                        value={stop_loss}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStop_loss(e.target.value)}
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