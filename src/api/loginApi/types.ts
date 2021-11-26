export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

export type LoginParamsType = {
    email: string,
    password: string,
    rememberMe: boolean,

}