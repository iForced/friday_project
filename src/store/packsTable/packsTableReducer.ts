import {PacksActionTypes, PacksInitialStateType} from "./types";
import {PacksActions} from "./actions";

const initialState: PacksInitialStateType = {
    packs: [],
    page: 1,
    cardPacksTotalCount: 0,
    pageSize: 10,
    isFetching: false,
    error: '',
    searchValue: '',
}

export const packsTableReducer = (state: PacksInitialStateType = initialState, action: PacksActionTypes): PacksInitialStateType => {
    switch (action.type) {

        case PacksActions.SET_PACKS:
            return {...state, packs: action.packs}

        case PacksActions.SET_PAGE:
            return {...state, page: action.newPage}

        case PacksActions.SET_PACKS_TOTAL_COUNT:
            return {...state, cardPacksTotalCount: action.count}

        case PacksActions.ADD_PACK:
            const newPack = action.newPack
            return {...state, packs: [...state.packs, newPack]}

        case PacksActions.SET_PAGE_SIZE:
            return {...state, pageSize: action.pageSize}

        case PacksActions.DElETE_PACK:
            return {...state, packs: state.packs.filter(pack => pack._id !== action.packId)}

        case PacksActions.SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case PacksActions.SET_ERROR:
            return {...state, error: action.error}

        case PacksActions.UPDATE_PACK:
            return {...state, packs: state.packs.map(pack => pack._id === action.packId ? {...pack, name: action.newPackName}: pack)}

        case PacksActions.SET_SEARCH_PACK_VALUE:
            return {...state, searchValue: action.searchValue}

        default:
            return state
    }
}