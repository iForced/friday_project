export type ForgotPassResponseType = {
    info: string
    error: string
}
export type ForgotPassRequestType = {
    email: string
    from: string
    message: string
}