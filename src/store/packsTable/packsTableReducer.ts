import {PacksActionTypes, PacksInitialStateType} from "./types";
import {PacksActions} from "./actions";

const initialState: PacksInitialStateType = {
    packs: [],
    page: 1,
    cardPacksTotalCount: 4,
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

        default:
            return state
    }
}