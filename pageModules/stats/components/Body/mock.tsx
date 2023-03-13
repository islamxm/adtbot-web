import icon from '@/public/assets/icons/bitfinex.svg';
import icon2 from '@/public/assets/icons/coinbase.svg';
import { tableHeadItemType } from '@/components/TableHead/types';

export const  mock = {
    head: [
        {
            label:'Анонс',
            value: '',
        },
        {
            label:'Покупка',
            value: '',
        },
        {
            label:'Пара',
            value: '',
        },
        {
            label:'Сумма',
            value: '',
        },
        {
            label:'Цена покупки',
            value: '',
        },
        {
            label:'Цена продажи',
            value: '',
        },
        {
            label:'PNL',
            value: '',
        },
        {
            label:'Активация',
            value: '',
        },
        {
            label:'Остановка',
            value: '',
        }
    ],
    body: [
        [
            {
                label: 'Bitfinex',
                isLink: true,
                icon: icon,
                action: false,
                pnl: '',
                share: false,
                running: false
            },
            {
                label: 'Coinbase',
                isLink: true,
                icon: icon2,
                action: false,
                pnl: '',
                share: false,
                running: false
            },
            {
                label: 'BTC/USDT',
                isLink: false,
                icon: null,
                action: false,
                pnl: '',
                share: false,
                running: false
            },
            {
                label: '150 USDT',
                isLink: false,
                icon: null,
                action: false,
                pnl: '',
                share: false,
                running: false
            },
            {
                label: '',
                isLink: false,
                icon: null,
                action: false,
                pnl: '',
                share: false,
                running: false
            },
            {
                label: '',
                isLink: false,
                icon: null,
                action: false,
                pnl: '',
                share: false,
                running: false
            },
            {
                label: '132 USDT (+11,23%)',
                isLink: false,
                icon: null,
                action: false,
                pnl: '+',
                share: false,
                running: false
            },
            {
                label: '',
                isLink: false,
                icon: null,
                action: true,
                pnl: '',
                share: false,
                running: false
            },
            {
                label: '',
                isLink: false,
                icon: null,
                action: true,
                pnl: '',
                share: true,
                running: false
            },
        ],
    ]
}