import endpoints from "./endpoints";
import checkAuth from "./checkAuth";

const headers = {
    'Content-type': 'application/json',
    'Accept': 'application/json',
}

class ApiService {

    register = async (body: {
        email: string,
        username: string,
        password: string,
        is_superuser: false,
    }, captcha_token: string) => {
        try {
            let res = await fetch(endpoints.register + `?captcha_token=${captcha_token}`, {
                method: 'POST',
                body: JSON.stringify(body),
                headers,
                // mode: 'no-cors'
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    getOAuth2Token = async (body: {
        grant_type?: string,
        username?: string,
        password?: string,
        scope?: string,
        totp_code?: string,
    }, captcha_token: string) => {
        try {
            let res = await fetch(endpoints.getOAuth2Token + `?captcha_token=${captcha_token}`, {
                method: 'POST',
                headers,
                body: JSON.stringify(body),
                mode: 'no-cors'
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    verifyUser = async (verify_code: string) => {
        try {
            let res = await fetch(endpoints.verifyUser + `?verify_code=${verify_code}`, {
                method: 'POST',
                headers,
                mode: 'no-cors'
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    verifyIp = async (code: string) => {
        try {
            let res = await fetch(endpoints.verifyIp + `?code=${code}`, {
                method: 'POST',
                headers,
                mode: 'no-cors'
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    editUserData = async (body: {
        email: string,
        username: string,
        password: string,
        old_password: string
    }) => {
        try {
            let res = await fetch(endpoints.editUserData, {
                method: 'POST',
                headers,
                body: JSON.stringify(body),
                mode: 'no-cors'
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    forgotPassword = async (body: {email: string}) => {
        try {
            let res = await fetch(endpoints.forgotPassword, {
                method: 'POST',
                headers,
                body: JSON.stringify(body),
                mode: 'no-cors'
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    resetPassword = async (code: string, password: string) => {
        try {
            let res = await fetch(endpoints.resetPassword + `?code=${code}&password=${password}`, {
                method: 'POST',
                headers,
                mode: 'no-cors'
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    

    setTgKey = async (text: string) => {
        try {
            let res = await fetch(endpoints.setTgKey + `?text=${text}`, {
                method: 'POST',
                headers,
                mode: 'no-cors'
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    getTgKey = async () => {
        try {
            let res = await fetch(endpoints.getTgKey, {
                method: 'POST',
                headers,
                mode: 'no-cors'
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }


    addFeedback = async (text: string) => {
        try {
            let res = await fetch(endpoints.addFeedback + `?text=${text}`, {
                method: 'POST',
                headers,
                mode: 'no-cors'
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    getFeedbacks = async (limit: number, offset: string) => {
        try {
            let res = await fetch(endpoints.getFeedbacks + `?limit=${limit}&offset=${offset}`, {
                method: 'POST',
                headers,
                mode: 'no-cors'
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    setTgNot = async (status: boolean) => {
        try {
            let res = await fetch(endpoints.setTgNot + `?status=${status}`, {
                method: 'POST',
                headers,
                mode: 'no-cors'
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    setEmailNot = async (status: boolean) => {
        try {
            let res = await fetch(endpoints.setEmailNot + `?status=${status}`, {
                method: 'POST',
                headers,
                mode: 'no-cors'
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    getNotStatus = async () => {
        try {
            let res = await fetch(endpoints.getNotStatus, {
                method: 'POST',
                headers,
                mode: 'no-cors'
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }


    setGateAuthData = async (body: {
        apiKey: string,
        secret: string,
        password: string
    }) => {
        try {
            let res = await fetch(endpoints.setGateAuthData, {
                method: 'POST',
                headers,
                body: JSON.stringify(body),
                mode: 'no-cors'
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    setKucoinAuthData = async (body: {
        apiKey: string,
        secret: string,
        password: string
    }) => {
        try {
            let res = await fetch(endpoints.setKucoinAuthData, {
                method: 'POST',
                headers,
                body: JSON.stringify(body),
                mode: 'no-cors'
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    setMexcAuthData = async (body: {
        apiKey: string,
        secret: string,
        password: string
    }) => {
        try {
            let res = await fetch(endpoints.setMexcAuthData, {
                method: 'POST',
                headers,
                body: JSON.stringify(body),
                mode: 'no-cors'
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    setHuobiAuthData = async (body: {
        apiKey: string,
        secret: string,
        password: string
    }) => {
        try {
            let res = await fetch(endpoints.setHuobiAuthData, {
                method: 'POST',
                headers,
                body: JSON.stringify(body),
                mode: 'no-cors'
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    getExchangeBalances = async () => {
        try {
            let res = await fetch(endpoints.getExchangeBalances, {
                method: 'POST',
                headers,
                mode: 'no-cors'
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    createBot = async (body: {
        monitor: number,
        exchange: number,
        budget_usdt: number,
        take_profit: number,
        stop_loss: number,
        stop_buy: number
    }) => {
        try {
            let res = await fetch(endpoints.createBot, {
                method: 'POST',
                headers,
                body: JSON.stringify(body),
                mode: 'no-cors'
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }


    getBots = async () => {
        try {
            let res = await fetch(endpoints.getBots, {
                method: 'POST',
                headers,
                mode: 'no-cors'
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    announceStats = async (first_date: Date, second_date: Date) => {
        try {
            let res = await fetch(endpoints.announceStats + `?first_date${first_date}&second_date=${second_date}`, {
                method: 'POST',
                headers,
                mode: 'no-cors'
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }
}

export default ApiService;