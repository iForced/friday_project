import {PacksActionTypes, PacksInitialStateType} from "./types";
import {PacksActions} from "./actions";

const initialState: PacksInitialStateType = {
    packs: [],
    page: 1,
    pageCount: 2,
}

export const packsTableReducer = (state: PacksInitialStateType = initialState, action: PacksActionTypes): PacksInitialStateType => {
    switch (action.type) {

        case PacksActions.SET_PACKS:
            return {...state, packs: action.packs}

        case PacksActions.SET_PAGE:
            return {...state, page: action.newPage}

        default:
            return state
    }
}