import axios from "axios";
import { accountServices } from "./Account.services";


const Axios = axios.create({
    baseURL: 'http://localhost:3001'
})

/*Intercepteur du token*/

Axios.interceptors.request.use(request => {

    if (accountServices.isLogged()) {
        request.headers.Authorization = 'Bearer' + accountServices.getToken()
    }
    return request
})

export default Axios