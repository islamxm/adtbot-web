export const BASE_DOMAIN = `https://adtbot.com`;
export const PATH = `${BASE_DOMAIN}/api/v1/`

const endpoints = {
    //users
    register: `${PATH}register/`,
    verifyUser: `${PATH}verify_user/`,
    verifyIp: `${PATH}verify_ip/`,
    editUserData: `${PATH}change_personal_data/`,
    forgotPassword: `${PATH}forgot_password/`,
    resetPassword: `${PATH}reset_password/`,
    getOAuth2Token: `${PATH}token/`,

    //telegram_bot
    setTgKey: `${PATH}set_tg_key/`,
    getTgKey: `${PATH}get_tg_key/`,

    //feedback
    addFeedback: `${PATH}give_feedback/`,
    getFeedbacks: `${PATH}get_feedbacks/`,

    //notifications
    setTgNot: `${PATH}set_tg_notification/`,
    setEmailNot: `${PATH}set_email_notification/`,
    getNotStatus: `${PATH}get_notification_status/`,

    //exchange
    setGateAuthData: `${PATH}set_gate_auth_data/`,
    setKucoinAuthData: `${PATH}set_kucoin_auth_data/`,
    setMexcAuthData: `${PATH}set_mexc_auth_data/`,
    setHuobiAuthData: `${PATH}set_huobi_auth_data/`,
    getExchangeBalances: `${PATH}get_exchanges_balances/`,

    //bots
    createBot: `${PATH}create_bot/`,
    getBots: `${PATH}get_bots/`,
    announceStats: `${PATH}announce_stats/`
}

export default endpoints;