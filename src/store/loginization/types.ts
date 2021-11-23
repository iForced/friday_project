import {setIsLoggedInAC} from './loginActions';
import {initialState} from './loginReducer';





export type InitialStateType = typeof initialState

export type LoginParamsActionType =
    ReturnType<typeof setIsLoggedInAC>

