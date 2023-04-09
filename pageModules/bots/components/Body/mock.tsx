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
            label:'Объем',
            hint: 'Суточный объем монеты',
            value: '',
            sort: true,
            main: false
        },
        {
            label:'Slippage',
            hint: 'Проскальзывание. Максимальное изменение цены монеты, при котором прекращается покупка',
            value: '',
            sort: true,
            main: false
        },
        {
            label:'TP',
            hint: 'Take Profit. При каком увеличении цены в процентах выставляется лимитный ордер на продажу',
            value: '',
            sort: true,
            main: false
        },
        {
            label:'SL',
            hint: 'Stop Loss. При каком уменьшении цены в процентах выставляется лимитный ордер на продажу',
            value: '',
            sort: true,
            main: false
        },
        {
            label:'Buy',
            hint: 'Цена покупки',
            value: '',
            sort: true,
            main: false
        },
        {
            label:'Sell',
            hint: 'Цена продажи',
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
        {
            label:'Статус бота',
            hint: 'Статус бота. Для отработанного бота указывается дата и время активации, для созданного бота — В ожидании, для черновика — Остановлен',
            value: '',
            sort: true,
            main: false
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
                label: '30%',
                isLink: false,
                icon: null,
                action: false,
                pnl: '',
                share: false,
                running: false,
                main: false
            },
            {
                label: '2%',
                isLink: false,
                icon: null,
                action: false,
                pnl: '',
                share: false,
                running: false,
                main: false
            },
            {
                label: '3%',
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
                pnl: '+',
                isLink: false,
                icon: null,
                action: false,
                share: false,
                running: false,
                main: true
            },
            {
                label: '',
                isLink: false,
                icon: null,
                action: true,
                pnl:'',
                share: false,
                running: true,
                main: true
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
                label: '30%',
                isLink: false,
                icon: null,
                action: false,
                pnl: '',
                share: false,
                running: false,
                main: false
            },
            {
                label: '2%',
                isLink: false,
                icon: null,
                action: false,
                pnl: '',
                share: false,
                running: false,
                main: false
            },
            {
                label: '3%',
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
                main: true
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
                label: '132 USDT (-11,23%)',
                pnl: '-',
                isLink: false,
                icon: null,
                action: false,
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
                running: true,
                main: true
            },
        ]
    ]
}