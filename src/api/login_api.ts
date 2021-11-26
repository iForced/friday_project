import {AxiosResponse} from 'axios';
import {LoginParamsType, ResponseType} from '../store/loginization/loginTypes';
import {herokuInstance, localInstance} from "./api";

export const loginAPI = {
    login(data: LoginParamsType) {
        return localInstance.post<LoginParamsType, AxiosResponse<ResponseType<{ userId: number }>>>
        ('/auth/login', data)
    },
    logout() {
        return localInstance.delete <ResponseType<{ userId: number }>>
        ('/auth/login')
    }

}

