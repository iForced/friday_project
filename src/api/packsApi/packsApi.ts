import {herokuInstance, localInstance} from "../api";
import {AddPackResponseType, GetPacksResponseType} from "./types";

export const packsApi = () => {
    return {
        getCards(pageNumber: number, pageSize: number) {
            return herokuInstance.get<GetPacksResponseType>(`/cards/pack?page=${pageNumber}&pageCount=${pageSize}`)
        },
        setPage(newPage: number) {
            return herokuInstance.get<GetPacksResponseType>(`/cards/pack?page=${newPage}`)
        },
        addPack(packName: string) {
            return herokuInstance.post<AddPackResponseType>(`/cards/pack`, {cardsPack: {name: packName}})
        }
    }
}