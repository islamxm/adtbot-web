import endpoints from "./endpoints";
import axios from "axios";
import checkAuth from "./checkAuth";

class ApiService {
    register = async (body: {
        email: string,
        username: string,
        password: string,
        is_superuser: false
    }) => {
        try {
            let res = await axios.post(endpoints.register, body)
            return await checkAuth(res)
        } catch(err) {
            console.log(err)
        }
    }
}

export default ApiService;