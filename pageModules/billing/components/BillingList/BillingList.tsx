import styles from './BillingList.module.scss';
import { billingItemPropsTypes } from '../../types';
import BillingItem from '../BillingItem/BillingItem';
import StatusModal from '@/modals/StatusModal/StatusModal';
import {HiOutlineCash} from 'react-icons/hi';
import { useState, FC } from 'react';
import mexc from '@/public/assets/icons/mexc.svg';
import coinbase from '@/public/assets/icons/coinbase.svg';
import huobi from '@/public/assets/icons/huobi.svg';
import kucoin from '@/public/assets/icons/kucoin.svg';
import okx from '@/public/assets/icons/okx.svg';
import kraken from '@/public/assets/icons/kraken.svg';
import bitstamp from '@/public/assets/icons/bitstamp.svg';
import bitfinex from '@/public/assets/icons/bitfinex.svg';
import bybit from '@/public/assets/icons/bybit.svg';
import upbit from '@/public/assets/icons/upbit.svg';
import binance from '@/public/assets/icons/binance.svg';
import gate from '@/public/assets/icons/gate.svg';
import Button from '@/components/Button/Button';
import DepositModal from '@/modals/DepositModal/DepositModal';



const list: billingItemPropsTypes[] = [
    {
        id: 1,
        isTop: false,
        title: 'Free',
        isCurrent: true,
        price: 0,
        list: [
            {
                head: 'Мониторинг анонсов листингов на 1 бирже:',
                ul: [
                    {link: 'http://adtbot.com/binance', label: 'Binance', icon: binance}
                ]
            },
            {
                head: 'Покупка на 4 биржах:',
                ul: [
                    {link: 'http://adtbot.com/gate', label: 'Gate', icon: gate},
                    {link: 'http://adtbot.com/mexc', label: 'MEXC', icon: mexc},
                    {link: 'http://adtbot.com/kucoin', label: 'KuCoin', icon: kucoin},
                    {link: 'http://adtbot.com/huobi', label: 'Huobi', icon: huobi},
                ]
            }
        ],
    },
    {
        id: 2,
        isTop: false,
        title: 'Standart',
        isCurrent: false,
        price: 9.90,
        list: [
            {
                head: 'Мониторинг анонсов листингов на 3 биржах:',
                ul: [
                    {link: 'http://adtbot.com/binance', label: 'Binance', icon: binance},
                    {link: 'https://coinbase.com/', label: 'Coinbase', icon: coinbase},
                    {link: 'http://adtbot.com/kucoin', label: 'Huobi', icon: huobi},
                ]
            },
            {
                head: 'Покупка на 4 биржах:',
                ul: [
                    {link: 'http://adtbot.com/gate', label: 'Gate', icon: gate},
                    {link: 'http://adtbot.com/mexc', label: 'MEXC', icon: mexc},
                    {link: 'http://adtbot.com/kucoin', label: 'KuCoin', icon: kucoin},
                    {link: 'http://adtbot.com/huobi', label: 'Huobi', icon: huobi},
                ]
            }
        ]
    },
    {
        id: 3,
        isTop: true,
        title: 'Pro',
        isCurrent: false,
        price: 19.90,
        list: [
            {
                head: 'Мониторинг анонсов листингов на 5 биржах:',
                ul: [
                    {link: 'http://adtbot.com/binance', label: 'Binance', icon: binance},
                    {link: 'https://coinbase.com/', label: 'Coinbase', icon: coinbase},
                    {link: 'http://adtbot.com/huobi', label: 'Huobi', icon: huobi},
                    {link: 'http://adtbot.com/kucoin', label: 'KuCoin', icon: kucoin},
                    {link: 'http://adtbot.com/okx', label: 'OKX', icon: okx},
                ]
            },
            {
                head: 'Покупка на 4 биржах:',
                ul: [
                    {link: 'http://adtbot.com/gate', label: 'Gate', icon: gate},
                    {link: 'http://adtbot.com/mexc', label: 'MEXC', icon: mexc},
                    {link: 'http://adtbot.com/kucoin', label: 'KuCoin', icon: kucoin},
                    {link: 'http://adtbot.com/huobi', label: 'Huobi', icon: huobi},
                ]
            }
        ]
    },
    {
        id: 4,
        isTop: false,
        title: 'Premium',
        isCurrent: false,
        price: 29.90,
        list: [
            {
                head: 'Мониторинг анонсов листингов на 10 биржах:',
                ul: [
                    {link: 'http://adtbot.com/binance', label: 'Binance', icon: binance},
                    {link: 'https://coinbase.com/', label: 'Coinbase', icon: coinbase},
                    {link: 'http://adtbot.com/huobi', label: 'Huobi', icon: huobi},
                    {link: 'http://adtbot.com/kucoin', label: 'KuCoin', icon: kucoin},
                    {link: 'http://adtbot.com/okx', label: 'OKX', icon: okx},
                    {link: 'https://www.kraken.com/', label: 'Kraken', icon: kraken},
                    {link: 'https://www.bitstamp.net/', label: 'Bitstamp', icon: bitstamp},
                    {link: 'http://adtbot.com/bitfinex', label: 'Bitfinex', icon: bitfinex},
                    {link: 'http://adtbot.com/bybit', label: 'Bybit', icon: bybit},
                    {link: 'https://upbit.com/', label: 'Upbit', icon: upbit},
                ]
            },
            {
                head: 'Покупка на 4 биржах:',
                ul: [
                    {link: 'http://adtbot.com/gate', label: 'Gate', icon: gate},
                    {link: 'http://adtbot.com/mexc', label: 'MEXC', icon: mexc},
                    {link: 'http://adtbot.com/kucoin', label: 'KuCoin', icon: kucoin},
                    {link: 'http://adtbot.com/huobi', label: 'Huobi', icon: huobi},
                ]
            }
        ]
    }
]


const BillingList:FC<{
    active?: number,
    onChange?: (id: number) => any,
    load?: boolean
}> = ({
    active,
    onChange,
    load
}) => {
    const [depositModal, setDepositModal] = useState(false)

    const openDepositModal = () => setDepositModal(true)
    const closeDepositModal = () => setDepositModal(false)

    return (
        <div className={styles.wrapper}>
            <DepositModal
                open={depositModal}
                onCancel={closeDepositModal}
                />
            <div className={styles.action}>
                <Button
                    onClick={openDepositModal} 
                    text='Пополнить' 
                    variant={'blue'} 
                    style={{paddingLeft: 30, paddingRight: 30}} 
                    beforeIcon={<HiOutlineCash/>}/>
            </div>
            <div className={`${styles.list} custom-scroll-horizontal`}>
                {
                    list?.map((item,index) => (
                        <div className={styles.item} key={index}>
                            <BillingItem
                                {...item}
                                load={load}
                                isCurrent={active === item.id}
                                onSelect={(id) => onChange && onChange(id)}
                                />
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default BillingList;