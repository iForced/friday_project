import {Dispatch} from 'redux';
import {loginAPI} from '../../api/loginApi/loginApi';
import {LoginParamsType} from '../../api/loginApi/types';
import {setError} from '../recoveryPass/actions';

export enum LoginActions {
    SET_IS_LOGGED_IN = 'LOGIN/SET-IS-LOGGED-IN',
    SET_ERROR_OF_LOGG_IN = 'SET_ERROR_OF_LOGG_IN',
}

export const setIsLoggedInAC = (value: boolean) =>
    ({type: LoginActions.SET_IS_LOGGED_IN, value} as const)

export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch) => {
    loginAPI.login(data)
        .then(response => response.data)
        .then(() => {
                dispatch(setIsLoggedInAC(true))
                /*dispatch(setErrorofLogginAC(''))*/
            }
        )
        .catch((e) => {
            console.log('Error: ', {...e})
            const error = e.response ? e.response.data.error : e.message + ',more details in the console'
           dispatch(setError(error))
        })
}

export const logoutTC = () => (dispatch: Dispatch) => {
    loginAPI.logout()
        .then(response => response.data)
        .then(() => {
            dispatch(setIsLoggedInAC(false))
        })
}