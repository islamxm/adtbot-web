import icon from '@/public/assets/icons/bitfinex.svg';
import icon2 from '@/public/assets/icons/coinbase.svg';
import { tableHeadItemType } from '@/components/TableHead/types';

export const  mock = {
    head: [
        {
            label:'Анонс',
            hint: 'Биржа, на которой будет парситься анонс листинга',
            value: '',
            sort: true,
            main: true
        },
        {
            label:'Покупка',
            hint: 'Биржа, на которой будет осуществлена покупка в момент анонса',
            value: '',
            sort: true,
            main: false
        },
        {
            label:'Пара',
            hint: 'Название купленной монеты к USDT',
            value: '',
            sort: true,
            main: false
        },
        {
            label:'Сумма',
            hint: 'Количество USDT, на которые будет совершена покупка анонсируемых монет',
            value: '',
            sort: true,
            main: false
        },
        {
            label:'Цена покупки',
            value: '',
            sort: true,
            main: false
        },
        {
            label:'Цена продажи',
            value: '',
            sort: true,
            main: false
        },
        
        {
            label:'Статус бота',
            hint: 'Статус бота. Для отработанного бота указывается дата и время активации, для созданного бота — В ожидании, для черновика — Остановлен',
            value: '',
            sort: true,
            main: false
        },
        {
            label:'Остановка',
            value: '',
            sort: true,
            main: false
        },
        {
            label:'PNL',
            hint: 'Profits and Losts. Заработок (или убыток) бота в USDT и процентах от суммы сделки',
            value: '',
            sort: true,
            main: true
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
                share: false,
                running: false,
                main: true
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
        ],
        
    ]
}