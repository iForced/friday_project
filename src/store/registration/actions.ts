import {Dispatch} from "redux";
import {RegActions, RegBodyType, RegistrationActions} from "./regTypes";
import {localInstance} from "../../api/api";


export const setReg = (body:RegBodyType) => {
    return async (dispatch: Dispatch<RegActions>) => {
        try {
            const res = await localInstance.post(`auth/register`, body)
            dispatch({type: RegistrationActions.SET_REG_SUCCESS, payload: res.data})
        } catch (e) {
            dispatch({type: RegistrationActions.FETCH_REG_ERROR, payload: 'Error with registration'})
        }
    }
}

