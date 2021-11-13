import {RecoveryPassActionTypes, RecoveryPassInitialStateType} from "./types";
import {RecoveryActions} from "./actions";


const initialState: RecoveryPassInitialStateType = {
    email: '',
    isEmailSent: false,
    isNewPasswordSent: false,
}

export const recovery_pass_reducer = (state: RecoveryPassInitialStateType = initialState, action: RecoveryPassActionTypes): RecoveryPassInitialStateType => {
    switch (action.type) {

        case RecoveryActions.SEND_EMAIL:
            return {...state, email: action.email}

        case RecoveryActions.SEND_EMAIL_SUCCESS:
            return {...state, isEmailSent: true}

        case RecoveryActions.SET_NEW_PASSWORD_SUCCESS:
            return {...state, isNewPasswordSent: true}

        default:
            return state
    }
}