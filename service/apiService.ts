import endpoints from "./endpoints";
import checkAuth from "./checkAuth";

const headers = {
    'Content-type': 'application/json',
    'Accept': 'application/json',
}

type TokenType = string | {[property: string]: string;}

// "Authorization": `Bearer ${token}`

class ApiService {

    register = async (body: {
        email: string,
        username: string,
        password: string,
        is_superuser: boolean,
        captcha_token?: string,
        // referal_code?: string
    }) => {
        try {
            let res = await fetch(endpoints.register, {
                method: 'POST',
                body: JSON.stringify(body),
                headers,
            })
            return await res
        } catch(err) {
            console.log(err)
        }
    }

    getOAuth2Token = async (body: 
    {
        grant_type?: string,
        username?: string,
        password?: string,
        scope?: string,
        totp_code?: string,
        captcha_token?: string
    }) => {
        try {
            let res = await fetch(endpoints.getOAuth2Token, {
                method: 'POST',
                headers,
                body: JSON.stringify(body),
            })
            return await res;
        } catch(err) {
            console.log(err)
        }
    }

    verifyUser = async (verify_code: string) => {
        try {
            let res = await fetch(endpoints.verifyUser + `?verify_code=${verify_code}`, {
                method: 'POST',
                headers,
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
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    get2FData = async (token: TokenType) => {
        try {
            let res = await fetch(endpoints.get2FData, {
                method: "POST",
                headers: {
                    ...headers,
                    'Authorization': `Bearer ${token}`
                }
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }


    set2FStatus = async (token: TokenType) => {
        try {
            let res = await fetch(endpoints.set2FStatus, {
                method: 'POST',
                headers: {
                    ...headers,
                    'Authorization': `Bearer ${token}`
                }
            }) 
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }


    editUserData = async (body: {
        email?: string,
        username?: string,
        password?: string,
        old_password?: string
    }, token: TokenType) => {
        try {
            let res = await fetch(endpoints.editUserData, {
                method: 'POST',
                headers: {
                    ...headers,
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(body),
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    getUserData = async (token: TokenType) => {
        try {
            let res = await fetch(endpoints.getUserData, {
                method: 'POST',
                headers: {
                    ...headers,
                    'Authorization': `Bearer ${token}`
                },
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    forgotPassword = async (body: {email: string, captcha_token: string}) => {
        try {
            let res = await fetch(endpoints.forgotPassword, {
                method: 'POST',
                headers,
                body: JSON.stringify(body),
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    resetPassword = async (body: {code: string, password: string}) => {
        try {
            let res = await fetch(endpoints.resetPassword, {
                method: 'POST',
                headers,
                body: JSON.stringify(body)
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


    addFeedback = async (text: string, token: TokenType) => {
        try {
            let res = await fetch(endpoints.addFeedback, {
                method: 'POST',
                headers: {
                    ...headers,
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(text)
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    // getFeedbacks = async (limit: number, offset: string) => {
    //     try {
    //         let res = await fetch(endpoints.getFeedbacks + `?limit=${limit}&offset=${offset}`, {
    //             method: 'POST',
    //             headers,
    //             mode: 'no-cors'
    //         })
    //         return await checkAuth(res)
    //     } catch(err) {
    //         console.log(err)
    //     }
    // }

    setTgNot = async (status: boolean, token: TokenType) => {
        try {
            let res = await fetch(endpoints.setTgNot + `?status=${status}`, {
                method: 'POST',
                headers: {
                    ...headers,
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(status)
                
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    setEmailNot = async (status: boolean, token: TokenType) => {
        try {
            let res = await fetch(endpoints.setEmailNot + `?status=${status}`, {
                method: 'POST',
                headers: {
                    ...headers,
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(status)
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
           
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }


    setGateAuthData = async (body: {
        apiKey: string,
        secret: string,
        // password: string
    }, token: TokenType) => {
        try {
            let res = await fetch(endpoints.setGateAuthData, {
                method: 'POST',
                headers: {
                    ...headers,
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({...body, password: null}),
            })
            return await res;
        } catch(err) {
            console.log(err)
        }
    }

    setKucoinAuthData = async (body: {
        apiKey: string,
        secret: string,

    }, token: TokenType) => {
        try {
            let res = await fetch(endpoints.setKucoinAuthData, {
                method: 'POST',
                headers: {
                    ...headers,
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({...body, password: null}),
            })
            return await res
        } catch(err) {
            console.log(err)
        }
    }

    setMexcAuthData = async (body: {
        apiKey: string,
        secret: string,

    }, token: TokenType) => {
        try {
            let res = await fetch(endpoints.setMexcAuthData, {
                method: 'POST',
                headers: {
                    ...headers,
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({...body, password: null}),
            })
            return await res
        } catch(err) {
            console.log(err)
        }
    }

    setHuobiAuthData = async (body: {
        apiKey: string,
        secret: string,
   
    }, token: TokenType) => {
        try {
            let res = await fetch(endpoints.setHuobiAuthData, {
                method: 'POST',
                headers: {
                    ...headers,
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({...body, password: null}),
            })
            return await res
        } catch(err) {
            console.log(err)
        }
    }

    getExchangeBalances = async (token: TokenType) => {
        try {
            let res = await fetch(endpoints.getExchangeBalances, {
                method: 'POST',
                headers: {
                    ...headers,
                    'Authorization': `Bearer ${token}`
                },
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
        stop_buy: number,
        enabled: boolean,
        daily_volume: number
    }, token: TokenType) => {
        try {
            let res = await fetch(endpoints.createBot, {
                method: 'POST',
                headers: {
                    ...headers,
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(body),
                
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }


    enableBot = async (bot_id: number, token: TokenType) => {
        try {
            let res = await fetch(endpoints.enableBot + `?bot_id=${bot_id}`, {
                method: 'POST',
                headers: {
                    ...headers,
                    "Authorization": `Bearer ${token}`
                }
            })

            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }
    

    getBots = async (body: {
        bot_filter: 1 | 2 | 3 | 4,
        offset: number,
        limit: number,
        ordering: any[]
    },token?: TokenType) => {
        try {
            let res = await fetch(endpoints.getBots, {
                method: 'POST',
                headers: {
                    ...headers,
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(body)
                //mode: 'no-cors'
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


    changeTarif = async (id: number, token: TokenType) => {
        try {
            let res = await fetch(endpoints.changeTarif, {
                method: 'POST',
                headers: {
                    ...headers,
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(id)
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    deposit = async (body: {    
        txid: string,
        payment_method: 1 | 2
    }, token: TokenType) => {
        try {
            let res = await fetch(endpoints.deposit, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    ...headers,
                    'Authorization': `Bearer ${token}`
                }
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }

    getReferalUsers = async (token: TokenType) => {
        try {
            let res = await fetch(endpoints.getReferalUsers, {
                method: 'POST',
                headers: {
                    ...headers,
                    'Authorization': `Bearer ${token}`
                }
            })
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }
}

export default ApiService;