import {ActionsType, LoginParamsType} from './loginTypes';
import {Dispatch} from 'redux';
import {loginAPI} from '../../api/loginApi/loginApi';


export enum LoginActions {
    SET_IS_INITIALIZED = 'LOGIN/SET-IS-INITIALIZED',
    SET_IS_LOGGED_IN = 'LOGIN/SET-IS-LOGGED-IN',
}

export const setIsInitializedAC = (isInitialized: boolean) => ({
    type: LoginActions.SET_IS_INITIALIZED, isInitialized
} as const)
export const setIsLoggedInAC = (value: boolean) =>
    ({type: LoginActions.SET_IS_LOGGED_IN, value} as const)


export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
    loginAPI.login(data)
        .then(res => {

            if (res.status === 200) {
                dispatch(setIsLoggedInAC(true))
            }
        })
        .catch((e) => {
            console.log('Error: ', {...e})
            const error = e.response ? e.response.data.error : e.message + ',more details in the console'
            alert(error)
        })
}

export const logoutTC = () => (dispatch: Dispatch<ActionsType>) => {
    loginAPI.logout()
        .then(res => {
            if (res.status === 200) {
                dispatch(setIsLoggedInAC(false))
            }
        })
}