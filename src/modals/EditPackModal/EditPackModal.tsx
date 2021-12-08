import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {updatePackThunk} from "../../store/packsTable/actions";
import {Input, Modal} from "antd";

type PropsType = {
    isOpened: boolean
    packId: string
    onClose: () => void
}

const EditPackModal = (props: PropsType) => {

    const dispatch = useDispatch()

    const [newPackName, setNewPackName] = useState<string>('')

    const handleConfirm = () => {
        dispatch(updatePackThunk(props.packId, newPackName))
        setNewPackName('')
        props.onClose()
    }
    const handleCancel = () => {
        setNewPackName('')
        props.onClose()
    }

    return (
        <Modal title={'Enter new pack name'} visible={props.isOpened} onOk={handleConfirm} onCancel={handleCancel}>
            <Input placeholder={'Enter new pack name'} value={newPackName} onChange={(e) => setNewPackName(e.currentTarget.value)} />
        </Modal>
    );
};

export default EditPackModal;