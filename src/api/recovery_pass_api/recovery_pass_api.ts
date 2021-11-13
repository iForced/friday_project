import axios from "axios";
import {ForgotPassRequestType, CommonResponseType, SetNewPassRequestType} from "./types";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://neko-back.herokuapp.com/2.0',
})

export const recovery_pass_api = () => {
    return {
        forgot(data: ForgotPassRequestType) {
            return axiosInstance.post<CommonResponseType>('/auth/forgot', data)
        },
        setNewPass(data: SetNewPassRequestType) {
            return axiosInstance.post<CommonResponseType>('/auth/set-new-password', data)
        }
    }
}