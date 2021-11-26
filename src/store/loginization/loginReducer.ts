import {ActionsType, InitialStateType, LoginActions, LoginResponseType} from './loginTypes';


export const initialState = {
    isLoggedIn: false,
    isInitialized: false,
    profile: {} as LoginResponseType,
    error: '',
}

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case LoginActions.SET_IS_LOGGED_IN:
            return {...state, isLoggedIn: action.isLoggedIn}
        case LoginActions.SET_IS_INITIALIZED:
            return {...state, isInitialized: action.isInitialized}
        case LoginActions.SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case LoginActions.FETCH_LOG_ERROR:
            return {...state, error: action.error}
        default:
            return state
    }
}
