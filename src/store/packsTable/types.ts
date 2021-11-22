import {addPack, setPacks, setPacksPerPage, setPage} from "./actions";
import {PackType} from "../../api/packsApi/types";

export type PacksInitialStateType = {
    packs: Array<PackType>
    page: number,
    packsPerPage: number,
}

export type PacksActionTypes =
    ReturnType<typeof setPacks>
    | ReturnType<typeof setPage>
    | ReturnType<typeof addPack>
    | ReturnType<typeof setPacksPerPage>