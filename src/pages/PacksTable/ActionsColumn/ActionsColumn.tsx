import React, {Dispatch, SetStateAction} from 'react';
import s from './ActionsColumn.module.css'
import {Button} from "antd";

type PropsType = {
    showCards: () => void
    packId: string
    showEditPackModal: Dispatch<SetStateAction<boolean>>
    showDeletePackModal: Dispatch<SetStateAction<boolean>>
}
const ActionsColumn = React.memo((props: PropsType) => {

    return (
        <div className={s.buttons}>
            <Button danger type={'primary'} onClick={() => props.showDeletePackModal(true)}>Delete</Button>
            <Button onClick={() => props.showEditPackModal(true)}>Edit</Button>
            <Button onClick={props.showCards}>Cards</Button>
        </div>
    );
})

export default ActionsColumn;

