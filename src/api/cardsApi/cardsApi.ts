import {instance} from "../api";


export const cardsApi = {
    async getCards(cardsPack_id: string,pageNumber: number, pageSize: number, question?: string, sort?: string) {
        return await instance.get(`cards/card`, {
            params: {cardsPack_id, page: pageNumber, pageCount: pageSize, cardQuestion: (question && question), sortCards: sort}
        })
    },
    async postCard(cardsPack_id: string, question: string, answer: string, grade: number) {
        return await instance.post(`cards/card`, {card: {cardsPack_id, question, answer, grade}})
    },
    async deleteCard(_id: string) {
        return await instance.delete(`cards/card?id=${_id}`)
    },
    async putCard(_id: string, question?: string) {
        return await instance.put(`cards/card`, {card: {_id, question}})
    },
    async gradeCard(card_id: string, grade: number) {
        return await instance.put(`cards/grade`, {card_id, grade})
    }
}

