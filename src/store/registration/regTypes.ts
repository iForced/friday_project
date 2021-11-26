import {fetchRegError, sendReg, setRegIsFetching, setRegIsReg} from "./regActions";


export type FormikErrorType = {
    email?: string
    password?: string
    password2?: string
}

export enum RegEnumActions {
    SEND_REG = 'REGISTRATION/SEND_REG',
    SET_REG_IS_FETCHING = 'REGISTRATION/SET_REG_IS_FETCHING',
    SET_REG_IS_REG = 'REGISTRATION/SET_REG_IS_REG',
    FETCH_REG_ERROR = 'REGISTRATION/FETCH_REG_ERROR',
}

export type RegParamsType = {
    email: string
    password: string
}
export type RegInitialState = {
    body: RegParamsType
    isFetching: boolean
    isReg: boolean
    error?: string
}


export type SetRegAction = ReturnType<typeof sendReg>
export type SetRegIsFetchingAction = ReturnType<typeof setRegIsFetching>
export type SetRegIsRegAction = ReturnType<typeof setRegIsReg>
export type FetchRegErrorAction = ReturnType<typeof fetchRegError>

export type RegActions =
    SetRegAction
    | SetRegIsFetchingAction
    | SetRegIsRegAction
    | FetchRegErrorAction







