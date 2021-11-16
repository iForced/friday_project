import {RequestStatusType} from './loginTypes';



export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setIsInitializedAC = (isInitialized: boolean) => ({
    type: 'APP/SET-IS-INITIALIZED', isInitialized
} as const)
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)