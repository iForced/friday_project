import {ActionsType, InitialStateType} from './loginTypes';
import {LoginActions} from './loginActions';

export const initialState = {
    isLoggedIn: false
}

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case LoginActions.SET_IS_LOGGED_IN:
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}