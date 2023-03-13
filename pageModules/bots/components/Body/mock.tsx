import icon from '@/public/assets/icons/bitfinex.svg';
import icon2 from '@/public/assets/icons/coinbase.svg';
import { tableHeadItemType } from '@/components/TableHead/types';

export const  mock = {
    head: [
        {
            label:'Анонс',
            hint: 'some text',
            value: '',
        },
        {
            label:'Покупка',
            hint: 'some text',
            value: '',
        },
        {
            label:'Пара',
            hint: 'some text',
            value: '',
        },
        {
            label:'Сумма',
            hint: 'some text',
            value: '',
        },
        {
            label:'Объем',
            hint: 'some text',
            value: '',
        },
        {
            label:'Slippage',
            hint: 'some text',
            value: '',
        },
        {
            label:'TP',
            hint: 'some text',
            value: '',
        },
        {
            label:'SL',
            hint: 'some text',
            value: '',
        },
        {
            label:'Buy',
            hint: 'some text',
            value: '',
        },
        {
            label:'Sell',
            hint: 'some text',
            value: '',
        },
        {
            label:'PNL',
            hint: 'some text',
            value: '',
        },
        {
            label:'Активация',
            hint: 'some text',
            value: '',
        },
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
                label: '30%',
                isLink: false,
                icon: null,
                action: false,
                pnl: '',
                share: false,
                running: false
            },
            {
                label: '2%',
                isLink: false,
                icon: null,
                action: false,
                pnl: '',
                share: false,
                running: false
            },
            {
                label: '3%',
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
                pnl: '+',
                isLink: false,
                icon: null,
                action: false,
                share: false,
                running: false
            },
            {
                label: '',
                isLink: false,
                icon: null,
                action: true,
                pnl:'',
                share: false,
                running: true
            },
        ],
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
                label: '30%',
                isLink: false,
                icon: null,
                action: false,
                pnl: '',
                share: false,
                running: false
            },
            {
                label: '2%',
                isLink: false,
                icon: null,
                action: false,
                pnl: '',
                share: false,
                running: false
            },
            {
                label: '3%',
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
                label: '132 USDT (-11,23%)',
                pnl: '-',
                isLink: false,
                icon: null,
                action: false,
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
                running: true
            },
        ]
    ]
}