import {localInstance} from "../api";
import {AddPackResponseType, GetPacksResponseType} from "./types";

export const packsApi = () => {
    return {
        getCards() {
            return localInstance.get<GetPacksResponseType>(`/cards/pack/?pageCount=${10}`)
        },
        setPage(newPage: number) {
            return localInstance.get<GetPacksResponseType>(`/cards/pack?${newPage}`)
        },
        addPack(packName: string) {
            return localInstance.post<AddPackResponseType>(`/cards/pack`, {cardsPack: {name: packName}})
        }
    }
}