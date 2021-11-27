import {
    addPack,
    deletePack,
    setError,
    setIsFetching,
    setPacks,
    setPacksTotalCount,
    setPage,
    setPageSize, setSearchPackValue, updatePack
} from "./actions";
import {PackType} from "../../api/packsApi/types";

export type PacksInitialStateType = {
    packs: Array<PackType>
    page: number,
    cardPacksTotalCount: number
    pageSize: number
    isFetching: boolean
    error: string
    searchTerm: string
}

export type PacksActionTypes =
    ReturnType<typeof setPacks>
    | ReturnType<typeof setPage>
    | ReturnType<typeof addPack>
    | ReturnType<typeof setPacksTotalCount>
    | ReturnType<typeof setPageSize>
    | ReturnType<typeof deletePack>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof setError>
    | ReturnType<typeof updatePack>
    | ReturnType<typeof setSearchPackValue>