import IUser from "@/models/IUser";

export const toggleMenu = (bool: boolean) => ({type: 'TOGGLE_MENU', bool: bool})
export const updateTokens = (tokens: {access: string | { [property: string]: string; } | null | undefined, refresh: string | { [property: string]: string; } | null | undefined}) => ({type: 'UPDATE_TOKENS', tokens})
export const updateCaptcha = (captcha: string) => ({type: 'UPDATE_CAPTCHA', captcha})
export const updateUserData = (data: IUser | null) => ({type: 'UPDATE_USER_DATA', data})
export const lastCreatedBot = (data: any | null) => ({type: 'CREATED_BOT', data})
export const updateSenseValue = (data:boolean) => ({type: 'UPDATE_SENSE_VALUE', data})