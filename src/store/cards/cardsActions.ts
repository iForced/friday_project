import {CardActions, CardsEnumActions, CardType} from "./cardsTypes";
import {Dispatch} from "redux";
import {cardsApi} from "../../api/cardsApi/cardsApi";
import {ThunkDispatch} from "redux-thunk";
import {RootStateType} from "../store";

export const fetchCards = (cards: Array<CardType>) => {
    return {
        type: CardsEnumActions.FETCH_CARDS,
        cards,
    } as const
}
export const setCard = (newCard: CardType) => {
    return {
        type: CardsEnumActions.SET_CARD,
        newCard,
    } as const
}
export const removeCard = (cardId: string) => {
    return {
        type: CardsEnumActions.DELETE_CARD,
        cardId,
    } as const
}
export const updateCard = (cardId: string, newQuestion: string) => {
    return {
        type: CardsEnumActions.UPDATE_CARD,
        cardId,
        newQuestion,
    } as const
}
export const setCardIsFetching = (isFetching: boolean) => {
    return {
        type: CardsEnumActions.SET_CARD_IS_FETCHING,
        isFetching,
    } as const
}
export const fetchCardError = (error: string) => {
    return {
        type: CardsEnumActions.FETCH_CARD_ERROR,
        error,
    } as const
}
export const setSearchCardValue = (searchValue: string) => {
    return {
        type: CardsEnumActions.SET_SEARCH_CARD_VALUE,
        searchValue,
    } as const
}
export const setCardsTotalCount = (count: number) => {
    return {
        type: CardsEnumActions.SET_CARDS_TOTAL_COUNT,
        count,
    } as const
}
export const setPage = (pageNumber: number) => {
    return {
        type: CardsEnumActions.SET_PAGE,
        pageNumber,
    } as const
}

export const fetchCardsPayload = (cardsPack_id: string, pageNumber: number, pageSize: number, question?: string) => async (dispatch: Dispatch) => {
    dispatch(setCardIsFetching(true))
    try {
        const res = await cardsApi.getCards(cardsPack_id, pageNumber, pageSize, question)
        dispatch(setCardsTotalCount(res.data.cardsTotalCount))
        dispatch(fetchCards(res.data.cards))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message)
        dispatch(fetchCardError(error))
    }
    dispatch(setCardIsFetching(false))
}
export const setCardPayload = (cardsPack_id: string, question: string, answer: string, grade: number) => async (dispatch: ThunkDispatch<RootStateType, unknown, CardActions>, getState: () => RootStateType) => {
    const {page, pageCount, searchTerm} = getState().cards
    debugger
    dispatch(setCardIsFetching(true))
    try {
        const res = await cardsApi.postCard(cardsPack_id, question, answer, grade)
        dispatch(setCard(res.data.newCard))
        await dispatch(fetchCardsPayload(cardsPack_id, page, pageCount, searchTerm))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message)
        dispatch(fetchCardError(error))
    }
    dispatch(setCardIsFetching(false))
}
export const removeCardPayload = (_id: string, cardsPack_id: string) => async (dispatch: ThunkDispatch<RootStateType, unknown, CardActions>, getState: () => RootStateType) => {
    const {page, pageCount, searchTerm} = getState().cards
    dispatch(setCardIsFetching(true))
    try {
        await cardsApi.deleteCard(_id)
        dispatch(removeCard(_id))
        await dispatch(fetchCardsPayload(cardsPack_id, page, pageCount, searchTerm))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message)
        dispatch(fetchCardError(error))
    }
    dispatch(setCardIsFetching(false))
}
export const updateCardPayload = (cardsPack_id: string, _id: string, question: string) => async (dispatch: ThunkDispatch<RootStateType, unknown, CardActions>, getState: () => RootStateType) => {
    const {page, pageCount, searchTerm} = getState().cards
    dispatch(setCardIsFetching(true))
    try {
        const res = await cardsApi.putCard(_id, question)
        dispatch(updateCard(_id, question))
        await dispatch(fetchCardsPayload(cardsPack_id, page, pageCount, searchTerm))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message)
        dispatch(fetchCardError(error))
    }
    dispatch(setCardIsFetching(false))
}