export type CommonResponseType = {
    info: string
    error: string
}
export type ForgotPassRequestType = {
    email: string
    from?: string
    message: string
}
export type SetNewPassRequestType = {
    password: string
    resetPasswordToken: string | undefined
}