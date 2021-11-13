import {RegActions, RegistrationActions, RegState} from "./regTypes";


const initialValue: RegState = {
    body: {email: '', password: ''},
    loading: false,
    error: null,
}

export const regReducer = (state = initialValue, action: RegActions): RegState => {
    switch (action.type) {
        case RegistrationActions.SEND_REG: {
            return {...state, loading: true, error: null, body: action.payload}
        }
        case RegistrationActions.SET_REG_SUCCESS: {
            return {...state, loading: false, error: null, body: action.payload}
        }
        case RegistrationActions.FETCH_REG_ERROR: {
            return {...state, loading: false, error: action.payload}
        }
        default:
            return state
    }
}
