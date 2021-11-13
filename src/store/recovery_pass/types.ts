import {sendEmail, sendEmailSuccess, setNewPasswordSuccess} from "./actions";

export type RecoveryPassInitialStateType = {
    email: string
    isEmailSent: boolean
    isNewPasswordSent: boolean
}

export type RecoveryPassActionTypes =
    ReturnType<typeof sendEmail>
    | ReturnType<typeof sendEmailSuccess>
    | ReturnType<typeof setNewPasswordSuccess>