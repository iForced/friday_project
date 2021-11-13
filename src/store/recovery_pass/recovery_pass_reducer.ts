import {RecoveryPassActionTypes, RecoveryPassInitialStateType} from "./types";
import {RecoveryActions} from "./actions";


const initialState: RecoveryPassInitialStateType = {
    email: '',
    isEmailSent: false,
}
// https://iforced.github.io/friday_project/#/recoverypassword/8fc45c40-4491-11ec-913c-c18be5accb2c

export const recovery_pass_reducer = (state: RecoveryPassInitialStateType = initialState, action: RecoveryPassActionTypes): RecoveryPassInitialStateType => {
    switch (action.type) {

        case RecoveryActions.SEND_EMAIL:
            return {...state, email: action.email}

        case RecoveryActions.SEND_EMAIL_SUCCESS:
            return {...state, isEmailSent: true}

        default:
            return state
    }
}