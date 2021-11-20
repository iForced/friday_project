import {setPacks, setPage} from "./actions";
import {PackType} from "../../api/packsApi/types";

export type PacksInitialStateType = {
    packs: Array<PackType>
    page: number,
    pageCount: number,
}

export type PacksActionTypes =
    ReturnType<typeof setPacks>
    | ReturnType<typeof setPage>