export const BASE_DOMAIN = `https://developmentsrv.space`;
export const PATH = `${BASE_DOMAIN}/api/v1/`

const endpoints = {

    gql: `${PATH}graphql`,

    //users
    register: `${PATH}register/`,
    verifyUser: `${PATH}verify_user/`,
    verifyIp: `${PATH}verify_ip/`,
    editUserData: `${PATH}change_personal_data/`,
    forgotPassword: `${PATH}forgot_password/`,
    resetPassword: `${PATH}reset_password/`,
    getOAuth2Token: `${PATH}token/`,
    getUserData: `${PATH}get_personal_data/`,
    verify2FToken: `${PATH}verify_totp_token/`,

    get2FData: `${PATH}get_totp_data/`,
    set2FStatus: `${PATH}set_totp_enabled`,

    check2FCode: `${PATH}is_right_totp`,

    //telegram_bot
    setTgKey: `${PATH}set_tg_key/`,
    getTgKey: `${PATH}get_tg_key/`,

    //feedback
    addFeedback: `${PATH}give_feedback/`,
    // getFeedbacks: `${PATH}get_feedbacks/`,

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
    enableBot: `${PATH}enable_bot/`,
    getBots: `${PATH}get_bots/`,
    announceStats: `${PATH}announce_stats/`,
    disableBot: `${PATH}disable_bot/`,
    deleteBot: `${PATH}delete_bot/`,
    editBot: `${PATH}modify_bot/`,


    // tarif
    changeTarif: `${PATH}change_tariff/`,


    //payment
    deposit: `${PATH}pay_usdt_trc20/`,
    getPaymentHistory: `${PATH}payment_history/`,


    // referal
    getReferalUsers: `${PATH}get_referal_users/`


    

}

export default endpoints;