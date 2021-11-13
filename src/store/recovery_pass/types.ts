import {sendEmail, sendEmailSuccess} from "./actions";

export type RecoveryPassInitialStateType = {
    email: string
    isEmailSent: boolean
}

export type RecoveryPassActionTypes =
    ReturnType<typeof sendEmail> |
    ReturnType<typeof sendEmailSuccess>