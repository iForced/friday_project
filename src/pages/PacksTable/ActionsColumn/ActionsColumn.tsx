import React, {Dispatch, SetStateAction} from 'react';
import s from './ActionsColumn.module.css'
import {Button} from "antd";

type PropsType = {
    showCards: () => void
    onDeletePack: (packId: string) => void
    packId: string
    isEditPackModalOpened: boolean
    showEditPackModal: Dispatch<SetStateAction<boolean>>
    onUpdatePack: (packId: string, newPackName: string) => void
}
const ActionsColumn = React.memo((props: PropsType) => {

    return (
        <div className={s.buttons}>
            <Button danger type={'primary'} onClick={() => props.onDeletePack(props.packId)}>Delete</Button>
            <Button onClick={() => props.showEditPackModal(true)}>Edit</Button>
            <Button onClick={props.showCards}>Cards</Button>
        </div>
    );
})

export default ActionsColumn;

