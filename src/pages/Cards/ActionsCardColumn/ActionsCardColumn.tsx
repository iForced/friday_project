import React, {Dispatch, SetStateAction} from 'react';
import s from './ActionsCardColumn.module.css'
import {Button} from "antd";


type PropsType = {
    card_id: string | undefined
    packId: string
    onDeleteCard: (_id: string ) => void
    onEditCard: (cardId: string) => void
    showEditCardModal: Dispatch<SetStateAction<boolean>>
    showDeleteCardModal: Dispatch<SetStateAction<boolean>>
}
const ActionsCardColumn = React.memo((props: PropsType) => {

    return (
        <div className={s.buttons}>
            <Button onClick={() => props.showEditCardModal(true)}>Edit</Button>
            <Button danger type={'primary'} onClick={() => {
               props.card_id && props.onDeleteCard(props.card_id)
            }}>Delete</Button>
        </div>
    );
})

export default ActionsCardColumn;