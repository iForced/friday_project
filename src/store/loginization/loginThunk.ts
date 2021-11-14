import {ActionsType, LoginParamsType} from './loginTypes';
import {Dispatch} from 'redux';
import {loginAPI} from '../../api/login_api';
import {setAppStatusAC, setIsLoggedInAC} from './loginActions';




export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    loginAPI.login(data)
        .then(res => {

            if (res.status  === 200) {
                dispatch(setIsLoggedInAC(true))
                dispatch(setAppStatusAC('succeeded'))
            }
        })
        .catch((e) =>{
            console.log('Error: ', {...e})
            const error = e.response ? e.response.data.error: (e.message + ',more details in the console')} )



}

export const logoutTC = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    loginAPI.logout()
        .then(res => {
            if (res.status  === 200) {
                dispatch(setIsLoggedInAC(false))
                dispatch(setAppStatusAC('succeeded'))
            }
        })
}