import Router from "next/router";


const checkAuth = async (response: any) => {
    
    if(response?.status === 401) {
        Router.push('/auth/login?unauthorized=1')
    } else {
        return response?.json()
    }
}

export default checkAuth;