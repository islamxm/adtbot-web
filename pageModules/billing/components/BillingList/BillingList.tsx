import styles from './BillingList.module.scss';
import { billingItemPropsTypes } from '../../types';
import BillingItem from '../BillingItem/BillingItem';
import StatusModal from '@/modals/StatusModal/StatusModal';
import {HiOutlineCash} from 'react-icons/hi';
import { useState } from 'react';
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
        isTop: false,
        title: 'Free',
        isCurrent: true,
        price: 0,
        list: [
            {
                head: 'Мониторинг анонсов листингов на 1 бирже:',
                ul: [
                    {link: '/', label: 'Binance', icon: binance}
                ]
            },
            {
                head: 'Покупка на 4 биржах:',
                ul: [
                    {link: '/', label: 'Gate', icon: gate},
                    {link: '/', label: 'MEXC', icon: mexc},
                    {link: '/', label: 'KuCoin', icon: kucoin},
                    {link: '/', label: 'Huobi', icon: huobi},
                ]
            }
        ],
    },
    {
        isTop: false,
        title: 'Standart',
        isCurrent: false,
        price: 10,
        list: [
            {
                head: 'Мониторинг анонсов листингов на 3 биржах:',
                ul: [
                    {link: '/', label: 'Binance', icon: binance},
                    {link: '/', label: 'Coinbase', icon: coinbase},
                    {link: '/', label: 'Huobi', icon: huobi},
                ]
            },
            {
                head: 'Покупка на 4 биржах:',
                ul: [
                    {link: '/', label: 'Gate', icon: gate},
                    {link: '/', label: 'MEXC', icon: mexc},
                    {link: '/', label: 'KuCoin', icon: kucoin},
                    {link: '/', label: 'Huobi', icon: huobi},
                ]
            }
        ]
    },
    {
        isTop: true,
        title: 'Pro',
        isCurrent: false,
        price: 20,
        list: [
            {
                head: 'Мониторинг анонсов листингов на 5 биржах:',
                ul: [
                    {link: '/', label: 'Binance', icon: binance},
                    {link: '/', label: 'Coinbase', icon: coinbase},
                    {link: '/', label: 'Huobi', icon: huobi},
                    {link: '/', label: 'KuCoin', icon: kucoin},
                    {link: '/', label: 'OKX', icon: okx},
                ]
            },
            {
                head: 'Покупка на 4 биржах:',
                ul: [
                    {link: '/', label: 'Gate', icon: gate},
                    {link: '/', label: 'MEXC', icon: mexc},
                    {link: '/', label: 'KuCoin', icon: kucoin},
                    {link: '/', label: 'Huobi', icon: huobi},
                ]
            }
        ]
    },
    {
        isTop: false,
        title: 'Premium',
        isCurrent: false,
        price: 30,
        list: [
            {
                head: 'Мониторинг анонсов листингов на 10 биржах:',
                ul: [
                    {link: '/', label: 'Binance', icon: binance},
                    {link: '/', label: 'Coinbase', icon: coinbase},
                    {link: '/', label: 'Huobi', icon: huobi},
                    {link: '/', label: 'KuCoin', icon: kucoin},
                    {link: '/', label: 'OKX', icon: okx},
                    {link: '/', label: 'Kraken', icon: kraken},
                    {link: '/', label: 'Bitstamp', icon: bitstamp},
                    {link: '/', label: 'Bitfinex', icon: bitfinex},
                    {link: '/', label: 'Bybit', icon: bybit},
                    {link: '/', label: 'Upbit', icon: upbit},
                ]
            },
            {
                head: 'Покупка на 4 биржах:',
                ul: [
                    {link: '/', label: 'Gate', icon: gate},
                    {link: '/', label: 'MEXC', icon: mexc},
                    {link: '/', label: 'KuCoin', icon: kucoin},
                    {link: '/', label: 'Huobi', icon: huobi},
                ]
            }
        ]
    }
]


const BillingList = () => {
    const [buyModal, setBuyModal] = useState<boolean>(false)
    const [depositModal, setDepositModal] = useState(false)

    const openBuyModal = () => setBuyModal(true)
    const closeBuyModal = () => setBuyModal(false)

    const openDepositModal = () => setDepositModal(true)
    const closeDepositModal = () => setDepositModal(false)

    return (
        <div className={styles.wrapper}>
            <DepositModal
                open={depositModal}
                onCancel={closeDepositModal}
                />
            <StatusModal
                title='Тариф изменен'
                status={'success'}
                open={buyModal}
                onCancel={closeBuyModal}
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
                                onSelect={openBuyModal}
                                />
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default BillingList;