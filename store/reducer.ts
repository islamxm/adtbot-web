const globalState = {
    isMenuOpen: false
}

const reducer = (state = globalState, action: any) => {
    switch(action.type) {
        case 'TOGGLE_MENU':
            return {
                ...globalState,
                isMenuOpen: action.bool
            }
        default:
            return state;
    }
}

export default reducer;