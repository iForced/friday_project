import React from 'react';
import s from './ActionsColumn.module.css'
import {Button} from "antd";

type PropsType = {
    onLearn: () => void
    onDeletePack: (packId: string) => void
    packId: string
    onUpdatePack: (packId: string, newPackName: string) => void
}
const ActionsColumn = React.memo((props: PropsType) => {

    return (
        <div className={s.buttons}>
            <Button danger type={'primary'} onClick={() => props.onDeletePack(props.packId)}>Delete</Button>
            <Button onClick={() => props.onUpdatePack(props.packId, 'new alo')}>Edit</Button>
            <Button onClick={props.onLearn}>Cards</Button>
            <Button>Learn</Button>
        </div>
    );
})

export default ActionsColumn;

