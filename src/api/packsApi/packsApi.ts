import {localInstance} from "../api";
import {GetPacksResponseType} from "./types";

export const packsApi = () => {
    return {
        getCards() {
            return localInstance.get<GetPacksResponseType>('/cards/pack')
        },
        setPage(newPage: number) {
            return localInstance.get<GetPacksResponseType>(`/cards/pack?${newPage}`)
        }
    }
}