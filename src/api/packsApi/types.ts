export type GetPacksResponseType = {
    cardPacks: Array<PackType>
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    token: string
    tokenDeathTime: number
}

export type PackType = {
    cardsCount: number
    created: string
    // grade: number
    // more_id: string
    name: string
    // path: string
    // private: boolean
    // rating: number
    // shots: number
    // type: string
    updated: string
    user_id: string
    user_name: string
    // __v: number
    _id: string
}
export type AddPackResponseType = {
    newCardsPack: PackType
    token: string
    tokenDeathTime: number
}
export type DeletePackResponseType = {
    deletedCardsPack: PackType
    token: string
    tokenDeathTime: number
}