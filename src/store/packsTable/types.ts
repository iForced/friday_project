import {addPack, setPacks, setPacksTotalCount, setPage} from "./actions";
import {PackType} from "../../api/packsApi/types";

export type PacksInitialStateType = {
    packs: Array<PackType>
    page: number,
    cardPacksTotalCount: number
}

export type PacksActionTypes =
    ReturnType<typeof setPacks>
    | ReturnType<typeof setPage>
    | ReturnType<typeof addPack>
    | ReturnType<typeof setPacksTotalCount>