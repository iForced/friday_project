import axios from "axios";
import {ForgotPassRequestType, ForgotPassResponseType} from "./types";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://neko-back.herokuapp.com/2.0',
})

export const recovery_pass_api = () => {
    return {
        forgot(data: ForgotPassRequestType) {
            axiosInstance.post<ForgotPassResponseType>('/auth/forgot', data)
        },
    }
}