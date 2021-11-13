import {recovery_pass_api} from "../../api/recovery_pass_api/recovery_pass_api";
import {Dispatch} from "redux";
import {ForgotPassRequestType} from "../../api/recovery_pass_api/types";

export enum RecoveryActions {
    EMAIL_SEND = 'RECOVERY/EMAIL_SEND',
}

export const sendEmail = (email: string) => {
    return {
        type: RecoveryActions.EMAIL_SEND,
        email,
    }
}

export const sendEmailThunk = (recoveryData: ForgotPassRequestType) => (dispatch: Dispatch) => {
    recovery_pass_api().forgot(recoveryData)
        .then(response => response.data)
        .then(() => {
            dispatch(sendEmail(recoveryData.email))
        })
        .catch(err => {
            console.log(err.message)
        })
}