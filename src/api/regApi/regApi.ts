import {RegParamsType} from "../../store/registration/regTypes";
import {AxiosResponse} from "axios";
import {instance} from "../api";


export const regApi = {
    setReg(body: RegParamsType) {
        return instance.post<RegParamsType, AxiosResponse<RegParamsType>>('auth/register', body)
    },
}





