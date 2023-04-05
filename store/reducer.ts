import {Cookies} from 'typescript-cookie'; 

const globalState = {
    isMenuOpen: false,
    tokens: {
        access: Cookies.get('adtbot-console-access-token') ? Cookies.get('adtbot-console-access-token') : null,
        refresh: Cookies.get('adtbot-console-refresh-token') ? Cookies.get('adtbot-console-refresh-token') : null
    }
}

const reducer = (state = globalState, action: any) => {
    switch(action.type) {
        case 'TOGGLE_MENU':
            return {
                ...globalState,
                isMenuOpen: action.bool
            }
        case 'UPDATE_TOKENS':
            return {
                ...globalState,
                tokens: action.tokens
            }
        default:
            return state;
    }
}

export default reducer;