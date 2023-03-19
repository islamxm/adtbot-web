import icon from '@/public/assets/icons/bitfinex.svg';
import icon2 from '@/public/assets/icons/coinbase.svg';
import { tableHeadItemType } from '@/components/TableHead/types';

export const  mock = {
    head: [
        {
            label:'Анонс',
            value: '',
            sort: true
        },
        {
            label:'Покупка',
            value: '',
            sort: true
        },
        {
            label:'Пара',
            value: '',
            sort: true
        },
        {
            label:'Сумма',
            value: '',
            sort: true
        },
        {
            label:'Покупка',
            value: '',
            sort: true
        },
        {
            label:'Продажа',
            value: '',
            sort: true
        },
        {
            label:'PNL',
            value: '',
            sort: true
        },
        {
            label:'Активация',
            value: '',
            sort: true
        },
        {
            label:'Остановка',
            value: '',
            sort: true
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
                running: false,
                main: true
            },
            {
                label: 'Coinbase',
                isLink: true,
                icon: icon2,
                action: false,
                pnl: '',
                share: false,
                running: false,
                main: false
            },
            {
                label: 'BTC/USDT',
                isLink: false,
                icon: null,
                action: false,
                pnl: '',
                share: false,
                running: false,
                main: false
            },
            {
                label: '150 USDT',
                isLink: false,
                icon: null,
                action: false,
                pnl: '',
                share: false,
                running: false,
                main: false
            },
            {
                label: '',
                isLink: false,
                icon: null,
                action: false,
                pnl: '',
                share: false,
                running: false,
                main: false
            },
            {
                label: '',
                isLink: false,
                icon: null,
                action: false,
                pnl: '',
                share: false,
                running: false,
                main: false
            },
            {
                label: '132 USDT (+11,23%)',
                isLink: false,
                icon: null,
                action: false,
                pnl: '+',
                share: false,
                running: false,
                main: true
            },
            {
                label: '',
                isLink: false,
                icon: null,
                action: true,
                pnl: '',
                share: false,
                running: false,
                main: false
            },
            {
                label: '',
                isLink: false,
                icon: null,
                action: true,
                pnl: '',
                share: true,
                running: false,
                main: true
            },
        ],
        
    ]
}