import {ForgotPassRequestType, CommonResponseType, SetNewPassRequestType} from "./types";
import {herokuInstance} from "../api";

export const recovery_pass_api = () => {
    return {
        forgot(data: ForgotPassRequestType) {
            return herokuInstance.post<CommonResponseType>('auth/forgot', data)
        },
        setNewPass(data: SetNewPassRequestType) {
            return herokuInstance.post<CommonResponseType>('auth/set-new-password', data)
        }
    }
}