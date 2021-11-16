import {RecoveryPassActionTypes, RecoveryPassInitialStateType} from "./types";
import {RecoveryActions} from "./actions";


const initialState: RecoveryPassInitialStateType = {
    email: '',
    error: '',
    isEmailSent: false,
    isNewPasswordSent: false,
    isFetching: false,
}

export const recoveryPassReducer = (state: RecoveryPassInitialStateType = initialState, action: RecoveryPassActionTypes): RecoveryPassInitialStateType => {
    switch (action.type) {

        case RecoveryActions.SEND_EMAIL:
            return {...state, email: action.email}

        case RecoveryActions.SEND_EMAIL_SUCCESS:
            return {...state, isEmailSent: true}

        case RecoveryActions.SET_NEW_PASSWORD_SUCCESS:
            return {...state, isNewPasswordSent: true}

        case RecoveryActions.SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case RecoveryActions.SET_ERROR:
            return {...state, error: action.errorMessage}

        default:
            return state
    }
}