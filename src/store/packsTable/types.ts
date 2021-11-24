import {addPack, setPacks, setPacksTotalCount, setPage, setPageSize} from "./actions";
import {PackType} from "../../api/packsApi/types";

export type PacksInitialStateType = {
    packs: Array<PackType>
    page: number,
    cardPacksTotalCount: number
    pageSize: number
}

export type PacksActionTypes =
    ReturnType<typeof setPacks>
    | ReturnType<typeof setPage>
    | ReturnType<typeof addPack>
    | ReturnType<typeof setPacksTotalCount>
    | ReturnType<typeof setPageSize>