import { InitialStateType, LoginParamsActionType} from './types';
import {LoginActions} from './loginActions';

export const initialState:InitialStateType = {
    isLoggedIn: false,
    status: 'idle',
}

export const loginReducer = (state: InitialStateType = initialState, action: LoginParamsActionType): InitialStateType => {
    switch (action.type) {
        case LoginActions.SET_IS_LOGGED_IN:
            return {...state, isLoggedIn: action.value}
        case LoginActions.SET_STATUS:
            return {...state, status:action.status}
        default:
            return state
    }
}