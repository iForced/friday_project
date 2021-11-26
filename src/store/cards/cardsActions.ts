import {CardActions, CardsEnumActions, CardType} from "./cardsTypes";
import {Dispatch} from "redux";
import {cardsApi} from "../../api/cardsApi/cardsApi";
import {RootStateType} from "../store";
import {ThunkDispatch} from "redux-thunk";


export const fetchCards = (cards: CardType[], cardsPack_id: string, _id: string, page: number, pageCount: number, cardsTotalCount: number
) => ({
    type: CardsEnumActions.FETCH_CARDS,
    cards,
    cardsPack_id,
    page,
    _id,
    pageCount,
    cardsTotalCount,
} as const)
export const setCard = (cardsPack_id: string, question: string, answer: string, grade: number) => ({
    type: CardsEnumActions.SET_CARD,
    cardsPack_id, question, answer, grade,
} as const)
export const removeCard = (_id: string) => ({
    type: CardsEnumActions.DELETE_CARD,
    _id,
} as const)
export const updateCard = (_id: string, question: string) => ({
    type: CardsEnumActions.UPDATE_CARD,
    question,
    _id,
} as const)
export const setCardIsFetching = (isFetching: boolean) => ({
    type: CardsEnumActions.SET_CARD_IS_FETCHING,
    isFetching,
} as const)
export const fetchCardError = (error: string) => ({
    type: CardsEnumActions.FETCH_CARD_ERROR,
    error,
} as const)


export const fetchCardsPayload = (cardsPack_id: string, question?: string, answer?: string, _id?: string, grade?: number,
                                  page?: number, pageCount?: number, cardsTotalCount?: number
) => async (dispatch: Dispatch<CardActions>) => {
    dispatch(setCardIsFetching(true))
    try {
        const res = await cardsApi.getCards({
            cardsPack_id, question, answer, _id, grade, page, pageCount,
        }, cardsTotalCount)
        dispatch(fetchCards(res.data.cards, res.data.packUserId, res.data._id,
            res.data.page, res.data.pageCount, res.data.cardsTotalCount
        ))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message)
        dispatch(fetchCardError(error))
    }
    dispatch(setCardIsFetching(false))
}

export const setCardPayload = (cardsPack_id: string, question: string, answer: string, grade: number) => async (dispatch: ThunkDispatch<RootStateType, unknown, CardActions>, getState: () => RootStateType) => {
    const {_id, page, pageCount, cardsTotalCount} = getState().cards
    dispatch(setCardIsFetching(true))
    try {
        await cardsApi.postCard(cardsPack_id, question, answer, grade)
        dispatch(setCard(cardsPack_id, question, answer, grade))
        await dispatch(fetchCardsPayload(cardsPack_id, question, answer, _id, grade, page, pageCount, cardsTotalCount))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message)
        dispatch(fetchCardError(error))
    }
    dispatch(setCardIsFetching(false))
}

export const removeCardPayload = (_id: string, cardsPack_id: string) => async (dispatch: ThunkDispatch<RootStateType, unknown, CardActions>) => {
    dispatch(setCardIsFetching(true))
    try {
        await cardsApi.deleteCard(_id)
        dispatch(removeCard(_id))
        await dispatch(fetchCardsPayload(cardsPack_id))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message)
        dispatch(fetchCardError(error))
    }
    dispatch(setCardIsFetching(false))
}

export const updateCardPayload = (cardsPack_id: string, _id: string, question?: string) => async (dispatch: Dispatch<CardActions>) => {
    dispatch(setCardIsFetching(true))
    try {
        const res = await cardsApi.putCard(_id, question)
        dispatch(removeCard(res.data.data._id))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message)
        dispatch(fetchCardError(error))
    }
    dispatch(setCardIsFetching(false))
}


