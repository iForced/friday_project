import {RegActions, RegInitialState, RegEnumActions} from "./regTypes";


const initialState: RegInitialState = {
    body: {email: '', password: ''},
    isFetching: false,
    isReg: false,
    error: '',
}

export const regReducer = (state: RegInitialState = initialState, action: RegActions): RegInitialState => {
    switch (action.type) {
        case RegEnumActions.SEND_REG:
            return {...state, body: action.payload}
        case RegEnumActions.SET_REG_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case RegEnumActions.SET_REG_IS_REG:
            return {...state, isReg: action.isReg}
        case RegEnumActions.FETCH_REG_ERROR:
            return {...state, error: action.error}
        default:
            return state
    }
}
