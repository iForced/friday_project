import {ForgotPassRequestType, CommonResponseType, SetNewPassRequestType} from "./types";
import {instance} from "../api";

export const recoveryPassApi = () => {
    return {
        forgot(data: ForgotPassRequestType) {
            return instance.post<CommonResponseType>('auth/forgot', data)
        },
        setNewPass(data: SetNewPassRequestType) {
            return instance.post<CommonResponseType>('auth/set-new-password', data)
        }
    }
}