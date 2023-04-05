export const toggleMenu = (bool: boolean) => ({type: 'TOGGLE_MENU', bool: bool})
export const updateTokens = (tokens: {access: string, refresh: string}) => ({types: 'UPDATE_TOKENS', tokens})