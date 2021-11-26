import {initialState} from '../loginization/loginReducer';
import {InitialStateType, LoginParamsActionType} from '../loginization/types';
import { setProfileDataAC, UserData} from './profileActions';

type ProfileDataActionType = ReturnType<typeof setProfileDataAC>

type StateType = {
    user: UserData
}

export const initialStateProfileData: StateType = {
    user: {} as UserData
}

export const profileReducer = (state = initialStateProfileData, action: ProfileDataActionType): StateType => {
    switch (action.type) {
        case 'SET_PROFILE_DATA':
            return {user:action.data}
        default:
            return state
    }
}