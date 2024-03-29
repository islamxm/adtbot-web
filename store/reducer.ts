import {Cookies} from 'typescript-cookie'; 


type IState = {
    isMenuOpen: boolean,
    tokens: {
        access: string | { [property: string]: string; } | null | undefined,
        refresh: string | { [property: string]: string; } | null | undefined,
    },
    userData: null | {
        email: string,
        username: string,
        tariff: 1 | 2 | 3 | 4,
        is_first_login: boolean,
        two_factor_enabled: boolean,
        tg_notifications_enabled: boolean,
        email_notifications_enabled: boolean,
        is_superuser: boolean,
        money: number,
        reg_datetime: string,
        tariff_ends: any,
        user_login_count: number,
        user_own_referal: any,
        days_before_lock?: any,
        days_in_month?:any,
        has_trial?:any
    },
    captcha: string,
    lastCreatedBot: null | any,
    hideSensValue: boolean,
    socket: null | WebSocket
}  


const globalState: IState = {
    isMenuOpen: false,
    tokens: {
        access: process?.browser && Cookies.get('adtbot-console-access-token') ? Cookies.get('adtbot-console-access-token') : null,
        refresh: process?.browser &&  Cookies.get('adtbot-console-refresh-token') ? Cookies.get('adtbot-console-refresh-token') : null
    },
    captcha: '',
    userData: null,
    lastCreatedBot: null,
    hideSensValue: false,
    socket: null
}

const reducer = (state = globalState, action: any) => {
    switch(action.type) {
        case 'TOGGLE_MENU':
            return {
                ...state,
                isMenuOpen: action.bool
            }
        case 'UPDATE_TOKENS':
            return {
                ...state,
                tokens: action.tokens
            }
        case 'UPDATE_CAPTCHA':
            return {
                ...state,
                captcha: action.captcha
            }
        case 'UPDATE_USER_DATA':
            return {
                ...state,
                userData: action.data
            }
        case 'CREATED_BOT':
            return {
                ...state,
                lastCreatedBot: action.data
            }
        case 'UPDATE_SENSE_VALUE':
            return {
                ...state,
                hideSensValue: action.data
            }
        case 'UPDATE_SOCKET':
            return {
                ...state,
                socket: action.data
            }
        default:
            return state;
    }
}

export default reducer;