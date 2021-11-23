import {PackType} from "../../api/packsApi/types";
import {Dispatch} from "redux";
import {packsApi} from "../../api/packsApi/packsApi";

export enum PacksActions {
    SET_PACKS = 'PACKS/SET_PACKS',
    SET_PAGE = 'PACKS/SET_PAGE',
    ADD_PACK = 'PACKS/ADD_PACK',
    SET_PACKS_TOTAL_COUNT = 'PACKS/SET_PACKS_TOTAL_COUNT',
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
export const addPack = (newPack: PackType) => {
    return {
        type: PacksActions.ADD_PACK,
        newPack,
    } as const
}
export const setPacksTotalCount = (count: number) => {
    return {
        type: PacksActions.SET_PACKS_TOTAL_COUNT,
        count,
    } as const
}

export const getPacksThunk = (pageNumber: number) => (dispatch: Dispatch) => {
    packsApi().getCards(pageNumber)
        .then(response => response.data)
        .then(data => {
            dispatch(setPacks(data.cardPacks))
            dispatch(setPacksTotalCount(data.cardPacksTotalCount))
        })
}
export const setPageThunk = (newPage: number) => (dispatch: Dispatch) => {
    packsApi().setPage(newPage)
        .then(response => response.data)
        .then(data => {
            dispatch(setPage(data.page))
        })
}
export const addPackThunk = (packName: string) => (dispatch: Dispatch) => {
    packsApi().addPack(packName)
        .then(response => response.data)
        .then(data => {
            dispatch(addPack({...data.newCardsPack}))
        })
}