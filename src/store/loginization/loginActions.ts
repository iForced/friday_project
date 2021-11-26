import {ActionsType, LoginActions, LoginParamsType, LoginResponseType} from './loginTypes';
import {Dispatch} from 'redux';
import {loginAPI} from '../../api/loginApi/loginApi';


export const setIsLoggedIn = (isLoggedIn: boolean) => ({
    type: LoginActions.SET_IS_LOGGED_IN,
    isLoggedIn,
} as const)
export const setIsInitialized = (isInitialized: boolean) => ({
    type: LoginActions.SET_IS_INITIALIZED,
    isInitialized,
} as const)
export const setProfile = (profile: LoginResponseType) => ({
    type: LoginActions.SET_USER_PROFILE,
    profile,
} as const)
export const fetchLogError = (error: string) => ({
    type: LoginActions.FETCH_LOG_ERROR,
    error,
} as const)


export const login = (data: LoginParamsType) => async (dispatch: Dispatch<ActionsType>) => {
    try {
        const res = await loginAPI.login(data)
        dispatch(setIsLoggedIn(true))
        dispatch(setIsInitialized(true))
        dispatch(setProfile(res.data))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message)
        dispatch(fetchLogError(error))
    }
}
export const logout = () => async (dispatch: Dispatch<ActionsType>) => {
    try {
        await loginAPI.logout()
        dispatch(setIsLoggedIn(false))
        dispatch(setIsInitialized(false))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message)
        dispatch(fetchLogError(error))
    }
}
export const setIsMe = () => async (dispatch: Dispatch<ActionsType>) => {
    try {
        const res = await loginAPI.me()
        dispatch(setProfile(res.data))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message)
        dispatch(fetchLogError(error))
    }
}


