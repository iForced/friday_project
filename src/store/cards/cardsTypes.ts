import {
    fetchCardError,
    fetchCards,
    removeCard,
    setCard,
    setCardIsFetching,
    updateCard
} from "./cardsActions";


export enum CardsEnumActions {
    FETCH_CARDS = 'CARDS/FETCH_CARDS',
    SET_CARD = 'CARDS/SET_CARD',
    DELETE_CARD = 'CARDS/DELETE_CARD',
    UPDATE_CARD = 'CARDS/UPDATE_CARD',
    SET_CARD_IS_FETCHING = 'CARDS/SET_CARD_IS_FETCHING',
    FETCH_CARD_ERROR = 'CARDS/FETCH_CARD_ERROR',
}

export type InitialCardsStateType = {
    cards: CardType[]
    cardsPack_id: string
    question: string
    answer: string
    page: number
    pageCount: number
    grade: number
    _id: string
    isFetching: boolean
    error: string
    cardsTotalCount: number
}

export type CardType = {
    cardsPack_id: string
    question?: string
    answer?: string
    page?: number
    pageCount?: number
    grade?: number
    _id?: string
}

export type FetchCardsAction = ReturnType<typeof fetchCards>
export type SetCardAction = ReturnType<typeof setCard>
export type RemoveCardAction = ReturnType<typeof removeCard>
export type UpdateCardAction = ReturnType<typeof updateCard>
export type SetCardIsFetchingAction = ReturnType<typeof setCardIsFetching>
export type FetchCardErrorAction = ReturnType<typeof fetchCardError>

export type CardActions =
    FetchCardsAction
    | SetCardAction
    | RemoveCardAction
    | UpdateCardAction
    | SetCardIsFetchingAction
    | FetchCardErrorAction


