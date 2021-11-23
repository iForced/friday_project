import {localInstance} from "../api";
import {AddPackResponseType, GetPacksResponseType} from "./types";

export const packsApi = () => {
    return {
        getCards(pageNumber: number) {
            return localInstance.get<GetPacksResponseType>(`/cards/pack?page=${pageNumber}`)
        },
        setPage(newPage: number) {
            return localInstance.get<GetPacksResponseType>(`/cards/pack?page=${newPage}`)
        },
        addPack(packName: string) {
            return localInstance.post<AddPackResponseType>(`/cards/pack`, {cardsPack: {name: packName}})
        }
    }
}