import {PackType} from "../../api/packsApi/types";
import {Dispatch} from "redux";
import {packsApi} from "../../api/packsApi/packsApi";

export enum PacksActions {
    SET_PACKS = 'PACKS/SET_PACKS',
    SET_PAGE = 'PACKS/SET_PAGE',
    ADD_PACK = 'PACKS/ADD_PACK',
    SET_PACKS_TOTAL_COUNT = 'PACKS/SET_PACKS_TOTAL_COUNT',
    SET_PAGE_SIZE = 'PACKS/SET_PAGE_SIZE',
    DElETE_PACK = 'PACKS/DElETE_PACK',
    SET_IS_FETCHING = 'PACKS/SET_IS_FETCHING',
    SET_ERROR = 'PACKS/SET_ERROR',
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
export const deletePack = (packId: string) => {
    return {
        type: PacksActions.DElETE_PACK,
        packId,
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
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: PacksActions.SET_IS_FETCHING,
        isFetching,
    } as const
}
export const setError = (error: string) => {
    return {
        type: PacksActions.SET_ERROR,
        error,
    } as const
}

export const getPacksThunk = (pageNumber: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))
    packsApi().getCards(pageNumber, pageSize)
        .then(response => response.data)
        .then(data => {
            dispatch(setIsFetching(false))
            dispatch(setPacks(data.cardPacks))
            dispatch(setPacksTotalCount(data.cardPacksTotalCount))
        })
        .catch(err => {
            dispatch(setIsFetching(false))
            dispatch(setError(err.response.data.error))
        })
}
export const addPackThunk = (packName: string) => (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))
    packsApi().addPack(packName)
        .then(response => response.data)
        .then(data => {
            dispatch(setIsFetching(false))
            dispatch(addPack({...data.newCardsPack}))
        })
        .catch(err => {
            dispatch(setIsFetching(false))
            dispatch(setError(err.response.data.error))
        })
}
export const deletePackThunk = (packId: string) => (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))
    packsApi().deletePack(packId)
        .then(response => response.data)
        .then(data => {
            dispatch(setIsFetching(false))
            dispatch(deletePack(packId))
        })
        .catch(err => {
            dispatch(setIsFetching(false))
            dispatch(setError(err.response.data.error))
        })
}