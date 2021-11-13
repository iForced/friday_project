export type FormikErrorType = {
    email?: string
    password?: string
    password2?: string
}


export enum RegistrationActions {
    SEND_REG = 'REGISTRATION/SEND_REG',
    SET_REG_SUCCESS = 'REGISTRATION/SET_REG_SUCCESS',
    FETCH_REG_ERROR = 'REGISTRATION/FETCH_REG_ERROR',
}

export type RegBodyType = {
    email: string
    password: string
}
export type RegState = {
    body: RegBodyType
    loading: boolean
    error: null | string
}

type SetRegAction = {
    type: RegistrationActions.SEND_REG
    payload: RegBodyType
}
type SetRegSuccessAction = {
    type: RegistrationActions.SET_REG_SUCCESS
    payload: RegBodyType
}
type FetchRegErrorAction = {
    type: RegistrationActions.FETCH_REG_ERROR
    payload: string
}

export type RegActions = SetRegAction | SetRegSuccessAction | FetchRegErrorAction







