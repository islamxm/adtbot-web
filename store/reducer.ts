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
        email_notifications_enabled: boolean
    },
    captcha: string
}  


const globalState: IState = {
    isMenuOpen: false,
    tokens: {
        access: process?.browser && Cookies.get('adtbot-console-access-token') ? Cookies.get('adtbot-console-access-token') : null,
        refresh: process?.browser &&  Cookies.get('adtbot-console-refresh-token') ? Cookies.get('adtbot-console-refresh-token') : null
    },
    captcha: '',
    userData: null
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
        default:
            return state;
    }
}

export default reducer;