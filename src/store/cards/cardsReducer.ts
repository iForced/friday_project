import {CardActions, CardsEnumActions, CardType, InitialCardsStateType} from "./cardsTypes";

const initialState: InitialCardsStateType = {
    cards: [] as CardType[],
    cardsTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    page: 1,
    pageCount: 4,
    packUserId: '',
    isFetching: false,
    error: '',
    searchTerm: '',
}

export const cardsReducer = (state: InitialCardsStateType = initialState, action: CardActions): InitialCardsStateType => {
    switch (action.type) {

        case CardsEnumActions.FETCH_CARDS:
            return {...state, cards: action.cards}

        case CardsEnumActions.SET_CARD:
            return {...state, cards: [...state.cards, action.newCard]}

        case CardsEnumActions.DELETE_CARD:
            return {...state, cards: state.cards.filter(card => card._id !== action.cardId)}

        case CardsEnumActions.UPDATE_CARD:
            return {...state, cards: state.cards.map(card => card._id === action.cardId ? {...card, question: action.newQuestion} : card)}

        case CardsEnumActions.SET_CARD_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case CardsEnumActions.FETCH_CARD_ERROR:
            return {...state, error: action.error}

        case CardsEnumActions.SET_SEARCH_CARD_VALUE:
            return {...state, searchTerm: action.searchValue}

        case CardsEnumActions.SET_CARDS_TOTAL_COUNT:
            return {...state, cardsTotalCount: action.count}

        case CardsEnumActions.SET_PAGE:
            return {...state, page: action.pageNumber}

        case CardsEnumActions.SET_GRADE:
            return {...state, cards: state.cards.map(card => card._id === action.cardId ? {...card, grade: action.grade} : card)}

        default:
            return state
    }
}

