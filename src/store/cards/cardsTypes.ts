import {
    fetchCardError,
    fetchCards,
    removeCard,
    setCard,
    setCardIsFetching, setCardsTotalCount, setGrade, setPage, setSearchCardValue,
    updateCard
} from "./cardsActions";


export enum CardsEnumActions {
    FETCH_CARDS = 'CARDS/FETCH_CARDS',
    SET_CARD = 'CARDS/SET_CARD',
    DELETE_CARD = 'CARDS/DELETE_CARD',
    UPDATE_CARD = 'CARDS/UPDATE_CARD',
    SET_CARD_IS_FETCHING = 'CARDS/SET_CARD_IS_FETCHING',
    FETCH_CARD_ERROR = 'CARDS/FETCH_CARD_ERROR',
    SET_SEARCH_CARD_VALUE = 'CARDS/SET_SEARCH_CARD_VALUE',
    SET_CARDS_TOTAL_COUNT = 'CARDS/SET_CARDS_TOTAL_COUNT',
    SET_PAGE = 'CARDS/SET_PAGE',
    SET_GRADE = 'CARDS/SET_GRADE',
}

export type InitialCardsStateType = {
    cards: Array<CardType>,
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
    isFetching: boolean
    error: string
    searchTerm: string
}

export type CardType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    shots: number
    user_id: string
    created: string
    updated: string
    _id: string
}

export type FetchCardsAction = ReturnType<typeof fetchCards>
export type SetCardAction = ReturnType<typeof setCard>
export type RemoveCardAction = ReturnType<typeof removeCard>
export type UpdateCardAction = ReturnType<typeof updateCard>
export type SetCardIsFetchingAction = ReturnType<typeof setCardIsFetching>
export type FetchCardErrorAction = ReturnType<typeof fetchCardError>
export type SetSearchCardValueAction = ReturnType<typeof setSearchCardValue>
export type SetCardsTotalCountAction = ReturnType<typeof setCardsTotalCount>
export type SetPageAction = ReturnType<typeof setPage>
export type SetGradeAction = ReturnType<typeof setGrade>

export type CardActions =
    FetchCardsAction
    | SetCardAction
    | RemoveCardAction
    | UpdateCardAction
    | SetCardIsFetchingAction
    | FetchCardErrorAction
    | SetSearchCardValueAction
    | SetCardsTotalCountAction
    | SetPageAction
    | SetGradeAction


