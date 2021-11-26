import {PackType} from "../../api/packsApi/types";
import {Dispatch} from "redux";
import {packsApi} from "../../api/packsApi/packsApi";
import {ThunkDispatch} from "redux-thunk";
import {PacksActionTypes} from "./types";
import {RootStateType} from "../store";

export enum PacksActions {
    SET_PACKS = 'PACKS/SET_PACKS',
    ADD_PACK = 'PACKS/ADD_PACK',
    DElETE_PACK = 'PACKS/DElETE_PACK',
    UPDATE_PACK = 'PACKS/UPDATE_PACK',
    SET_PAGE = 'PACKS/SET_PAGE',
    SET_PAGE_SIZE = 'PACKS/SET_PAGE_SIZE',
    SET_PACKS_TOTAL_COUNT = 'PACKS/SET_PACKS_TOTAL_COUNT',
    SET_IS_FETCHING = 'PACKS/SET_IS_FETCHING',
    SET_ERROR = 'PACKS/SET_ERROR',
    SET_SEARCH_PACK_VALUE = 'PACKS/SET_SEARCH_PACK_TERM',
}

export const setPacks = (packs: Array<PackType>) => {
    return {
        type: PacksActions.SET_PACKS,
        packs,
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
export const updatePack = (packId: string, newPackName: string) => {
    return {
        type: PacksActions.UPDATE_PACK,
        packId,
        newPackName,
    } as const
}
export const setPacksTotalCount = (count: number) => {
    return {
        type: PacksActions.SET_PACKS_TOTAL_COUNT,
        count,
    } as const
}
export const setPage = (newPage: number) => {
    return {
        type: PacksActions.SET_PAGE,
        newPage,
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
export const setSearchPackValue = (searchValue: string) => {
    return {
        type: PacksActions.SET_SEARCH_PACK_VALUE,
        searchValue,
    } as const
}


export const getPacksThunk = (pageNumber: number, pageSize: number, packName?: string) => (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))
    packsApi().getCards(pageNumber, pageSize, packName)
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
export const addPackThunk = (packName: string) => (dispatch: ThunkDispatch<RootStateType, unknown, PacksActionTypes>, getState: () => RootStateType) => {
    const {page, pageSize: packsPerPage} = getState().packsTable
    dispatch(setIsFetching(true))
    packsApi().addPack(packName)
        .then(response => response.data)
        .then(data => {
            dispatch(setIsFetching(false))
            dispatch(addPack({...data.newCardsPack}))
            dispatch(getPacksThunk(page, packsPerPage))
        })
        .catch(err => {
            dispatch(setIsFetching(false))
            dispatch(setError(err.response.data.error))
        })
}
export const deletePackThunk = (packId: string) => (dispatch: ThunkDispatch<RootStateType, unknown, PacksActionTypes>, getState: () => RootStateType) => {
    const {page, pageSize: packsPerPage} = getState().packsTable
    dispatch(setIsFetching(true))
    packsApi().deletePack(packId)
        .then(response => response.data)
        .then(data => {
            dispatch(setIsFetching(false))
            dispatch(deletePack(packId))
            dispatch(getPacksThunk(page, packsPerPage))
        })
        .catch(err => {
            dispatch(setIsFetching(false))
            dispatch(setError(err.response.data.error))
        })
}
export const updatePackThunk = (packId: string, newPackName: string) => (dispatch: ThunkDispatch<RootStateType, unknown, PacksActionTypes>, getState: () => RootStateType) => {
    const {page, pageSize: packsPerPage} = getState().packsTable
    dispatch(setIsFetching(true))
    packsApi().updatePack(packId, newPackName)
        .then(response => response.data)
        .then(data => {
            dispatch(setIsFetching(false))
            dispatch(updatePack(packId, newPackName))
            dispatch(getPacksThunk(page, packsPerPage))
        })
        .catch(err => {
            dispatch(setIsFetching(false))
            dispatch(setError(err.response.data.error))
        })
}