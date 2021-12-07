import React, {useState} from 'react';
import {Input, Modal} from "antd";
import {useDispatch} from "react-redux";
import {addPackThunk} from "../../store/packsTable/actions";

type PropsType = {
    isOpened: boolean
    onClose: () => void
}

const AddPackModal = (props: PropsType) => {

    const dispatch = useDispatch()

    const [packName, setPackName] = useState<string>('')

    const handleConfirm = () => {
        dispatch(addPackThunk(packName))
        setPackName('')
        props.onClose()
    }
    const handleCancel = () => {
        setPackName('')
        props.onClose()
    }

    return (
        <Modal title={'Enter pack name'} visible={props.isOpened} onOk={handleConfirm} onCancel={handleCancel}>
            <Input placeholder={'Enter pack name'} value={packName} onChange={(e) => setPackName(e.currentTarget.value)} />
        </Modal>
    );
};

export default AddPackModal;