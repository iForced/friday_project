import {PacksActionTypes, PacksInitialStateType} from "./types";
import {PacksActions} from "./actions";

const initialState: PacksInitialStateType = {
    packs: [],
    page: 1,
    packsPerPage: 10,
}

export const packsTableReducer = (state: PacksInitialStateType = initialState, action: PacksActionTypes): PacksInitialStateType => {
    switch (action.type) {

        case PacksActions.SET_PACKS:
            return {...state, packs: [...state.packs, ...action.packs]}

        case PacksActions.SET_PAGE:
            return {...state, page: action.newPage}

        case PacksActions.SET_PACKS_PER_PAGE:
            return {...state, packsPerPage: action.packsPerPage}

        case PacksActions.ADD_PACK:
            const newPack = action.newPack
            return {...state, packs: [...state.packs, newPack]}

        default:
            return state
    }
}