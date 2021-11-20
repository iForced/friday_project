import { setIsInitializedAC, setIsLoggedInAC} from './loginActions';
import {initialState} from './loginReducer';

export type LoginParamsType = {
    email: string,
    password: string,
    rememberMe: boolean,
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

export type InitialStateType = typeof initialState

export type ActionsType = SetIsLoggedInActionType | SetIsInitializedActionType

export type SetIsInitializedActionType = ReturnType<typeof setIsInitializedAC>
export type SetIsLoggedInActionType = ReturnType<typeof setIsLoggedInAC>

