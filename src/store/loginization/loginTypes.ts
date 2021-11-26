import {fetchLogError, setIsInitialized, setIsLoggedIn, setProfile} from './loginActions';
import {initialState} from './loginReducer';


export type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export enum LoginActions {
    SET_IS_LOGGED_IN = 'LOGIN/SET-IS-LOGGED-IN',
    SET_IS_INITIALIZED = 'LOGIN/SET-IS-INITIALIZED',
    SET_USER_PROFILE = 'LOGIN/SET_USER_PROFILE',
    FETCH_LOG_ERROR = 'LOGIN/FETCH_LOG_ERROR',
}

export type LoginParamsType = {
    email: string,
    password: string,
    rememberMe: boolean,
}
export type LoginResponseType = {
    _id: string,
    email: string,
    name: string,
    avatar?: string,
    publicCardPacksCount: number,
    create: number,
    update: number,
    isAdmin: boolean,
    verified: boolean,
    rememberMe: boolean,
    error?: string
}

export type InitialStateType = typeof initialState

export type SetIsLoggedInAction = ReturnType<typeof setIsLoggedIn>
export type SetIsInitializedAction = ReturnType<typeof setIsInitialized>
export type SetLogProfileAction = ReturnType<typeof setProfile>
export type FetchLogErrorAction = ReturnType<typeof fetchLogError>

export type ActionsType =
    SetIsLoggedInAction
    | SetIsInitializedAction
    | SetLogProfileAction
    | FetchLogErrorAction

