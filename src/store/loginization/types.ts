import {setAppStatusAC, setIsLoggedInAC} from './loginActions';
import {rootReducer} from '../store';



export type RequestStatusType = 'idle' | 'loading' | 'succeeded'

export type InitialStateType = {
    isLoggedIn: boolean,
    status: RequestStatusType
}

export type LoginParamsActionType = ReturnType<typeof setIsLoggedInAC> | ReturnType<typeof setAppStatusAC>
