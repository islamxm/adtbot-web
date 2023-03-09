import styles from './BillingList.module.scss';
import { billingItemPropsTypes } from '../../types';
import BillingItem from '../BillingItem/BillingItem';
import StatusModal from '@/modals/StatusModal/StatusModal';
import { useState } from 'react';

const list: billingItemPropsTypes[] = [
    {
        isTop: false,
        title: 'Free',
        isCurrent: true,
        price: 0,
        list: [
            {
                head: 'Мониторинг листингов на 1 бирже:',
                ul: [
                    'Binance'
                ]
            },
            {
                head: 'Покупка на 4 биржах:',
                ul: [
                    'Gate',
                    'MEXC',
                    'KuCoin',
                    'Huobi'
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
                head: 'Мониторинг листингов на 3 биржах:',
                ul: [
                    'Binance',
                    'Coinbase',
                    'Huobi'
                ]
            },
            {
                head: 'Покупка на 4 биржах:',
                ul: [
                    'Gate',
                    'MEXC',
                    'KuCoin',
                    'Huobi'
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
                head: 'Мониторинг листингов на 5 биржах:',
                ul: [
                    'Binance',
                    'Coinbase',
                    'Huobi',
                    'KuCoin',
                    'OKX',
                ]
            },
            {
                head: 'Покупка на 4 биржах:',
                ul: [
                    'Gate',
                    'MEXC',
                    'KuCoin',
                    'Huobi'
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
                head: 'Мониторинг листингов на 10 биржах:',
                ul: [
                    'Binance',
                    'Coinbase',
                    'Huobi',
                    'KuCoin',
                    'OKX',
                    'Kraken',
                    'Bitstamp',
                    'Bitfinex',
                    'Bybit',
                    'Bithumb',
                ]
            },
            {
                head: 'Покупка на 4 биржах:',
                ul: [
                    'Gate',
                    'MEXC',
                    'KuCoin',
                    'Huobi'
                ]
            }
        ]
    }
]


const BillingList = () => {
    const [buyModal, setBuyModal] = useState<boolean>(false)

    const openBuyModal = () => setBuyModal(true)
    const closeBuyModal = () => setBuyModal(false)


    return (
        <div className={styles.wrapper}>
            <StatusModal
                title='Тариф изменен'
                status={'success'}
                open={buyModal}
                onCancel={closeBuyModal}
                />
            <div className={styles.list}>
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