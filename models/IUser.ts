interface IUser {
    email: string
    username: string
    reg_datetime: string
    tariff: 1 | 2 | 3 | 4
    is_first_login: boolean,
    two_factor_enabled: boolean
    tg_notifications_enabled: boolean
    email_notifications_enabled: boolean
    user_login_count: number

}

export default IUser;