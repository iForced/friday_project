
import {AddPackResponseType, DeletePackResponseType, GetPacksResponseType, UpdatePackResponseType} from "./types";
import {instance} from "../api";

export const packsApi = () => {
    return {
        getPacks(pageNumber: number, pageSize: number, packName?: string, sort?: string) {
            return instance.get<GetPacksResponseType>(`/cards/pack`, {
                params: {page: pageNumber, pageCount: pageSize, packName: (packName && packName), sortPacks: sort}
            })
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
            return instance.put<UpdatePackResponseType>(`/cards/pack`, {cardsPack: {_id: packId, name: newPackName}})
        }
    }
}