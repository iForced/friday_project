import React from 'react';
import s from './ActionsColumn.module.css'
import {Button} from "antd";
import {NavLink} from "react-router-dom";

type PropsType = {
    packId: string
    onDeletePack: (packId: string) => void
    onUpdatePack: (packId: string, newPackName: string) => void
}

const ActionsColumn = React.memo((props: PropsType) => {

    return (
        <div className={s.buttons}>
            <Button danger type={'primary'} onClick={() => props.onDeletePack(props.packId)}>Delete</Button>
            <Button onClick={() => props.onUpdatePack(props.packId, 'new alo')}>Edit</Button>
            <Button><NavLink to={`/${props.packId}/cards`}>Learn</NavLink></Button>
        </div>
    );
})

export default ActionsColumn;