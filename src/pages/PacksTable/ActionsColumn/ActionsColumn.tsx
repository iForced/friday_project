import React from 'react';
import s from './ActionsColumn.module.css'
import {Button} from "antd";

type PropsType = {
    onDeletePack: (packId: string) => void
    packId: string
}

const ActionsColumn = React.memo((props: PropsType) => {

    return (
        <div className={s.buttons}>
            <Button danger type={'primary'} onClick={() => props.onDeletePack(props.packId)}>Delete</Button>
            <Button>Edit</Button>
            <Button>Learn</Button>
        </div>
    );
})

export default ActionsColumn;