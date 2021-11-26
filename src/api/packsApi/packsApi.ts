import {instance} from "../api";
import {AddPackResponseType, DeletePackResponseType, GetPacksResponseType} from "./types";

export const packsApi = () => {
    return {
        getCards(pageNumber: number, pageSize: number) {
            return instance.get<GetPacksResponseType>(`/cards/pack?page=${pageNumber}&pageCount=${pageSize}`)
        },
        setPage(newPage: number) {
            return instance.get<GetPacksResponseType>(`/cards/pack?page=${newPage}`)
        },
        addPack(packName: string) {
            return instance.post<AddPackResponseType>(`/cards/pack`, {cardsPack: {name: packName}})
        },
        deletePack(packId: string) {
            return instance.delete<DeletePackResponseType>(`/cards/pack?id=${packId}`)
        },
        updatePack(packId: string, newPackName: string) {
            return instance.put(`/cards/pack`, {cardsPack: {_id: packId, name: newPackName}})
        }
    }
}