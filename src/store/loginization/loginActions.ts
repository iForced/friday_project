import {Dispatch} from 'redux';
import {loginAPI} from '../../api/loginApi/loginApi';
import {LoginParamsType} from '../../api/loginApi/types';
import {setError} from '../recoveryPass/actions';
import {RequestStatusType} from './types';
import {setProfileDataAC} from '../profilePage/profileActions';
import {ProfileDataType} from '../profilePage/types';

export enum LoginActions {
    SET_IS_LOGGED_IN = 'LOGIN/SET-IS-LOGGED-IN',
    SET_STATUS = 'LOGIN/SET-STATUS'
}

export const setIsLoggedInAC = (value: boolean) =>
    ({type: LoginActions.SET_IS_LOGGED_IN, value} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: LoginActions.SET_STATUS, status} as const)



export const loginTC = (dataLogin: LoginParamsType) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    loginAPI.login(dataLogin)
        .then(response => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setProfileDataAC(response.data))
            }
        )
        .catch((e) => {
            console.log('Error: ', {...e})
            const error = e.response ? e.response.data.error : e.message + ',more details in the console'
            dispatch(setError(error))
        })
}

export const logoutTC = () => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    loginAPI.logout()
        .then(response => response.data)
        .then(() => {
            dispatch(setIsLoggedInAC(false))
            dispatch(setAppStatusAC('succeeded'))
        })
}

