export const toggleMenu = (bool: boolean) => ({type: 'TOGGLE_MENU', bool: bool})
export const updateTokens = (tokens: {access: string, refresh: string}) => ({type: 'UPDATE_TOKENS', tokens})
export const updateCaptcha = (captcha: string) => ({type: 'UPDATE_CAPTCHA', captcha})