import {AxiosResponse} from 'axios';
import {LoginParamsType, ResponseType} from '../store/loginization/loginTypes';
import {herokuInstance, localInstance} from "./api";

export const loginAPI = {
    login(data: LoginParamsType) {
        return herokuInstance.post<LoginParamsType, AxiosResponse<ResponseType<{ userId: number }>>>
        ('/auth/login', data)
    },
    logout() {
        return herokuInstance.delete <ResponseType<{ userId: number }>>
        ('/auth/login')
    }

}

