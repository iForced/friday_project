import {herokuInstance} from '../api';
import {LoginParamsType, ResponseType} from './types'

export const loginAPI = {
    login(data: LoginParamsType) {
        return herokuInstance.post<LoginParamsType>
        ('/auth/login', data)
    },
    logout() {
        return herokuInstance.delete<ResponseType>
        ('/auth/me')
    }

}

