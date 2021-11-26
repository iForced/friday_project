import React from 'react';
import s from './ActionsCardColumn.module.css'
import {Button} from "antd";


type PropsType = {
    _id: string | undefined
    onDeleteCard: (_id: string ) => void
}
const ActionsCardColumn = React.memo((props: PropsType) => {

    return (
        <div className={s.buttons}>
            <Button>Edit</Button>
            <Button danger type={'primary'} onClick={() => {
               props._id && props.onDeleteCard(props._id)
            }}>Delete</Button>
        </div>
    );
})

export default ActionsCardColumn;