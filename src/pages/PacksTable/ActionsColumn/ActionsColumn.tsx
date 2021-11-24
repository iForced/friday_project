import React from 'react';
import s from './ActionsColumn.module.css'
import {Button} from "antd";
import {NavLink} from "react-router-dom";

type PropsType = {
    onDeletePack: (packId: string) => void
    packId: string
}

const ActionsColumn = React.memo((props: PropsType) => {

    return (
        <div className={s.buttons}>
            <Button danger type={'primary'} onClick={() => props.onDeletePack(props.packId)}>Delete</Button>
            <Button>Edit</Button>
            <Button><NavLink to={`/${props.packId}/cards`}>Learn</NavLink></Button>
        </div>
    );
})

export default ActionsColumn;