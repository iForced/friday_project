import React from 'react';
import {Modal} from "antd";
import {useDispatch} from "react-redux";
import {deletePackThunk} from "../../store/packsTable/actions";

type PropsType = {
    isOpened: boolean
    packId: string
    onClose: () => void
}

const DeletePackModal = (props: PropsType) => {

    const dispatch = useDispatch()

    const handleConfirm = () => {
        dispatch(deletePackThunk(props.packId))
        props.onClose()
    }

    return (
        <Modal visible={props.isOpened} onOk={handleConfirm} onCancel={props.onClose}>
            Do you want to delete this pack?
        </Modal>
    );
};

export default DeletePackModal;