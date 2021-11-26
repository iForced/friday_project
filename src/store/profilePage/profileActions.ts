import React from 'react';

export enum ProfileActions {
    SET_PROFILE_DATA = 'SET_PROFILE_DATA',
}

export type UserData = {
    avatar: string
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    token: string
    tokenDeathTime: number
    updated: string
    verified: boolean
    __v: number
    _id: string
}

export const setProfileDataAC = (data: UserData) => (
    {type: ProfileActions.SET_PROFILE_DATA, data} as const
)
