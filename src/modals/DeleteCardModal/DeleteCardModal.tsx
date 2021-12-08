import React from 'react';
import {useDispatch} from "react-redux";
import {Modal} from "antd";
import {removeCardPayload} from "../../store/cards/cardsActions";

type PropsType = {
    isOpened: boolean
    packId: string
    cardId: string
    onClose: () => void
}

const DeleteCardModal = (props: PropsType) => {
    const dispatch = useDispatch()

    const handleConfirm = () => {
        dispatch(removeCardPayload(props.cardId, props.packId))
        props.onClose()
    }

    return (
        <Modal visible={props.isOpened} onOk={handleConfirm} onCancel={props.onClose}>
            Do you want to delete this pack?
        </Modal>
    );
};

export default DeleteCardModal;