import React from 'react';
import s from './ActionsColumn.module.css'
import {Button} from "antd";

const ActionsColumn = () => {
    return (
        <div className={s.buttons}>
            <Button danger type={'primary'}>Delete</Button>
            <Button>Edit</Button>
            <Button>Learn</Button>
        </div>
    );
};

export default ActionsColumn;