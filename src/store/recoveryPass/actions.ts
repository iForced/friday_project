import {recoveryPassApi} from "../../api/recoveryPassApi/recoveryPassApi";
import {Dispatch} from "redux";
import {ForgotPassRequestType, SetNewPassRequestType} from "../../api/recoveryPassApi/types";

export enum RecoveryActions {
    SEND_EMAIL = 'RECOVERY/SEND_EMAIL',
    SEND_EMAIL_SUCCESS = 'RECOVERY/SEND_EMAIL_SUCCESS',
    SET_NEW_PASSWORD_SUCCESS = 'RECOVERY/SET_NEW_PASSWORD_SUCCESS',
    SET_IS_FETCHING = 'RECOVERY/SET_IS_FETCHING',
    SET_ERROR = 'RECOVERY/SET_ERROR',

}

export const sendEmail = (email: string) => {
    return {
        type: RecoveryActions.SEND_EMAIL,
        email,
    } as const
}
export const setError = (errorMessage: string) => {
    return {
        type: RecoveryActions.SET_ERROR,
        errorMessage,
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
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: RecoveryActions.SET_IS_FETCHING,
        isFetching,
    } as const
}

export const sendEmailThunk = (recoveryData: ForgotPassRequestType) => (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))
    recoveryPassApi().forgot(recoveryData)
        .then(response => response.data)
        .then(() => {
            dispatch(setError(''))
            dispatch(sendEmail(recoveryData.email))
            dispatch(sendEmailSuccess())
            dispatch(setIsFetching(false))
        })
        .catch(err => {
            dispatch(setError(err.response.data.error))
            dispatch(setIsFetching(false))
        })
}
export const setNewPasswordThunk = (newPasswordData: SetNewPassRequestType) => (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))
    recoveryPassApi().setNewPass(newPasswordData)
        .then(response => response.data)
        .then(() => {
            dispatch(setError(''))
            dispatch(setNewPasswordSuccess())
            dispatch(setIsFetching(false))
        })
        .catch(err => {
            dispatch(setError(err.response.data.error))
            dispatch(setIsFetching(false))
        })
}