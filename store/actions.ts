import IUser from "@/models/IUser";

export const toggleMenu = (bool: boolean) => ({type: 'TOGGLE_MENU', bool: bool})
export const updateTokens = (tokens: {access: string | { [property: string]: string; } | null | undefined, refresh: string | { [property: string]: string; } | null | undefined}) => ({type: 'UPDATE_TOKENS', tokens})
export const updateCaptcha = (captcha: string) => ({type: 'UPDATE_CAPTCHA', captcha})
export const updateUserData = (data: IUser | null) => ({type: 'UPDATE_USER_DATA', data})