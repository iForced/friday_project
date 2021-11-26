import {herokuInstance} from '../api';
import {LoginParamsType, ResponseType} from './types'
import {UserData} from '../../store/profilePage/profileActions';

export const loginAPI = {
    login(data: LoginParamsType) {
        return herokuInstance.post<UserData>
        ('/auth/login', data)
    },
    logout() {
        return herokuInstance.delete<ResponseType>
        ('/auth/me')
    }

}

