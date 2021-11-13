import {sendEmail} from "./actions";

export type RecoveryPassInitialStateType = {
    email: string
}

export type RecoveryPassActionTypes = ReturnType<typeof sendEmail>