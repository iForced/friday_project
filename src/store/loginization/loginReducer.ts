import { InitialStateType, LoginParamsActionType} from './types';
import {LoginActions} from './loginActions';

export const initialState = {
    isLoggedIn: false,
    error: ''
}

export const loginReducer = (state: InitialStateType = initialState, action: LoginParamsActionType): InitialStateType => {
    switch (action.type) {
        case LoginActions.SET_IS_LOGGED_IN:
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}