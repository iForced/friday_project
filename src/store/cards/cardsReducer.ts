import {CardActions, CardsEnumActions, CardType, InitialCardsStateType} from "./cardsTypes";


export const initialCardsState = {
    cards: [] as CardType[],
    cardsPack_id: '',
    question: '??????????',
    answer: '!!!!!!!!!!!',
    grade: 0,
    page: 1,
    pageCount: 4,
    cardsTotalCount: 0,
    _id: '',
    isFetching: false,
    error: ''
}

export const cardsReducer = (state = initialCardsState, action: CardActions): InitialCardsStateType => {
    switch (action.type) {
        case CardsEnumActions.FETCH_CARDS:
            return {
                ...state,
                cards: action.cards,
                cardsPack_id: action.cardsPack_id,
                page: action.page,
                pageCount: action.pageCount,
                cardsTotalCount: action.cardsTotalCount,
                _id: action._id,
            }
        case CardsEnumActions.SET_CARD:
            return {
                ...state,
                cardsPack_id: action.cardsPack_id,
                question: action.question,
                answer: action.answer,
                grade: action.grade,
            }
        case CardsEnumActions.DELETE_CARD:
            return {...state, cards: state.cards.filter(delCard => delCard._id !== action._id)}
        case CardsEnumActions.UPDATE_CARD:
            return {
                ...state,
                question: action.question,
                _id: action._id,
            }
        case CardsEnumActions.SET_CARD_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case CardsEnumActions.FETCH_CARD_ERROR:
            return {...state, error: action.error}
        default:
            return state
    }
}


