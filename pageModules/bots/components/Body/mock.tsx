import icon from '@/public/assets/icons/bitfinex.svg';
import icon2 from '@/public/assets/icons/coinbase.svg';
import { tableHeadItemType } from '@/components/TableHead/types';

export const  mock = {
    head: [
        {
            label:'Анонс',
            hint: 'Биржа, на которой будет парситься анонс листинга. Активными отображаются биржи, соответствующие вашему тарифному плану',
            value: '',
        },
        {
            label:'Покупка',
            hint: 'Биржа, на которой будет осуществлена покупка в момент анонса',
            value: '',
        },
        {
            label:'Пара',
            hint: 'Название купленной монеты к USDT',
            value: '',
        },
        {
            label:'Сумма',
            hint: 'Количество USDT, на которые будет совершена покупка анонсируемых монет',
            value: '',
        },
        {
            label:'Объем',
            hint: 'Суточный объем монеты',
            value: '',
        },
        {
            label:'Slippage',
            hint: 'Или “Проскальзывание”. Максимальное изменение цены монеты, при котором прекращается покупка (выставление лимитных ордеров)',
            value: '',
        },
        {
            label:'TP',
            hint: 'Take Profit. При каком увеличении цены в процентах выставляется лимитный ордер на продажу',
            value: '',
        },
        {
            label:'SL',
            hint: 'Stop Loss. При каком уменьшении цены в процентах выставляется лимитный ордер на продажу',
            value: '',
        },
        {
            label:'Buy',
            hint: 'Цена покупки',
            value: '',
        },
        {
            label:'Sell',
            hint: 'Цена продажи',
            value: '',
        },
        {
            label:'PNL',
            hint: 'Profits and Losts. Заработок (или убыток) бота в USDT и процентах от суммы сделки',
            value: '',
        },
        {
            label:'Активация',
            hint: 'Статус бота. Для отработанного бота указывается дата и время активации, для созданного бота — В ожидании, для черновика — Остановленt',
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