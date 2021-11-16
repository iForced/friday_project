import axios, {AxiosResponse} from 'axios';
import {LoginParamsType, MeType, ResponseType} from '../store/loginization/loginTypes';


const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/",
    withCredentials: true,
})


export const loginAPI = {
    login(data: LoginParamsType) {
        return instance.post<LoginParamsType, AxiosResponse<ResponseType<{ userId: number }>>>
        ('/auth/login', data)
    },
    logout() {
        return instance.delete <ResponseType<{ userId: number }>>
        ('/auth/login')
    }

}

