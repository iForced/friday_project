import {PackType} from "../../api/packsApi/types";
import {Dispatch} from "redux";
import {packsApi} from "../../api/packsApi/packsApi";

export enum PacksActions {
    SET_PACKS = 'PACKS/SET_PACKS',
    SET_PAGE = 'PACKS/SET_PAGE',
}

export const setPacks = (packs: Array<PackType>) => {
    return {
        type: PacksActions.SET_PACKS,
        packs,
    } as const
}
export const setPage = (newPage: number) => {
    return {
        type: PacksActions.SET_PAGE,
        newPage,
    } as const
}

export const getPacksThunk = () => (dispatch: Dispatch) => {
    packsApi().getCards()
        .then(response => response.data)
        .then(data => {
            dispatch(setPacks(data.cardPacks))
        })
}
export const setPageThunk = (newPage: number) => (dispatch: Dispatch) => {
    packsApi().setPage(newPage)
        .then(response => response.data)
        .then(data => {
            dispatch(setPage(data.page))
        })
}