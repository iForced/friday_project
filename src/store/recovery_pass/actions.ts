import {recovery_pass_api} from "../../api/recovery_pass_api/recovery_pass_api";
import {Dispatch} from "redux";
import {ForgotPassRequestType, SetNewPassRequestType} from "../../api/recovery_pass_api/types";

export enum RecoveryActions {
    SEND_EMAIL = 'RECOVERY/SEND_EMAIL',
    SEND_EMAIL_SUCCESS = 'RECOVERY/SEND_EMAIL_SUCCESS',
    SET_NEW_PASSWORD_SUCCESS = 'RECOVERY/SET_NEW_PASSWORD_SUCCESS',
}

export const sendEmail = (email: string) => {
    return {
        type: RecoveryActions.SEND_EMAIL,
        email,
    } as const
}
export const sendEmailSuccess = () => {
    return {
        type: RecoveryActions.SEND_EMAIL_SUCCESS,
    } as const
}
export const setNewPasswordSuccess = () => {
    return {
        type: RecoveryActions.SET_NEW_PASSWORD_SUCCESS,
    } as const
}

export const sendEmailThunk = (recoveryData: ForgotPassRequestType) => (dispatch: Dispatch) => {
    recovery_pass_api().forgot(recoveryData)
        .then(response => response.data)
        .then(() => {
            dispatch(sendEmail(recoveryData.email))
            dispatch(sendEmailSuccess())
        })
        .catch(err => {
            console.log(err.message)
        })
}
export const setNewPasswordThunk = (newPasswordData: SetNewPassRequestType) => (dispatch: Dispatch) => {
    recovery_pass_api().setNewPass(newPasswordData)
        .then(response => response.data)
        .then(() => {
            dispatch(setNewPasswordSuccess())
        })
        .catch(err => {
            console.log(err.message)
        })
}