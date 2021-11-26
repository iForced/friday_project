import {LoginParamsType, LoginResponseType} from '../../store/loginization/loginTypes';
import {instance} from "../api";


export const loginAPI = {
    login(data: LoginParamsType) {
        return instance.post<LoginResponseType>('/auth/login', data)
    },
    me() {
        return instance.post<LoginResponseType>('auth/me')
    },
    logout() {
        return instance.delete<LoginResponseType>('/auth/me')
    },
}
