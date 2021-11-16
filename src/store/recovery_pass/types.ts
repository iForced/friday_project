import {sendEmail, sendEmailSuccess, setError, setIsFetching, setNewPasswordSuccess} from "./actions";

export type RecoveryPassInitialStateType = {
    email: string
    error: string
    isEmailSent: boolean
    isNewPasswordSent: boolean
    isFetching: boolean
}

export type RecoveryPassActionTypes =
    ReturnType<typeof sendEmail>
    | ReturnType<typeof sendEmailSuccess>
    | ReturnType<typeof setNewPasswordSuccess>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof setError>