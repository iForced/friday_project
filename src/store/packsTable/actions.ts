import {PackType} from "../../api/packsApi/types";
import {Dispatch} from "redux";
import {packsApi} from "../../api/packsApi/packsApi";

export enum PacksActions {
    SET_PACKS = 'PACKS/SET_PACKS',
    SET_PAGE = 'PACKS/SET_PAGE',
    ADD_PACK = 'PACKS/ADD_PACK',
    SET_PACKS_TOTAL_COUNT = 'PACKS/SET_PACKS_TOTAL_COUNT',
    SET_PAGE_SIZE = 'PACKS/SET_PAGE_SIZE',
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
export const setPageSize = (pageSize: number) => {
    return {
        type: PacksActions.SET_PAGE_SIZE,
        pageSize,
    } as const
}

export const getPacksThunk = (pageNumber: number, pageSize: number) => (dispatch: Dispatch) => {
    packsApi().getCards(pageNumber, pageSize)
        .then(response => response.data)
        .then(data => {
            dispatch(setPacks(data.cardPacks))
            dispatch(setPacksTotalCount(data.cardPacksTotalCount))
        })
}
export const addPackThunk = (packName: string) => (dispatch: Dispatch) => {
    packsApi().addPack(packName)
        .then(response => response.data)
        .then(data => {
            dispatch(addPack({...data.newCardsPack}))
        })
}