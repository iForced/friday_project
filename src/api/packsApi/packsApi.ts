import {herokuInstance, localInstance} from "../api";
import {AddPackResponseType, DeletePackResponseType, GetPacksResponseType} from "./types";

export const packsApi = () => {
    return {
        getCards(pageNumber: number, pageSize: number, packName?: string) {
            return localInstance.get<GetPacksResponseType>(`/cards/pack`, {params: {page: pageNumber, pageCount: pageSize, packName: (packName && packName)}})
        },
        setPage(newPage: number) {
            return localInstance.get<GetPacksResponseType>(`/cards/pack?page=${newPage}`)
        },
        addPack(packName: string) {
            return localInstance.post<AddPackResponseType>(`/cards/pack`, {cardsPack: {name: packName}})
        },
        deletePack(packId: string) {
            return localInstance.delete<DeletePackResponseType>(`/cards/pack?id=${packId}`)
        },
        updatePack(packId: string, newPackName: string) {
            return localInstance.put(`/cards/pack`, {cardsPack: {_id: packId, name: newPackName}})
        }
    }
}