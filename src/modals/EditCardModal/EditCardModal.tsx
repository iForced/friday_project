import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Input, Modal} from "antd";
import {updateCardPayload} from "../../store/cards/cardsActions";

type PropsType = {
    isOpened: boolean
    packId: string
    cardId: string
    onClose: () => void
}

const EditCardModal = (props: PropsType) => {
    const dispatch = useDispatch()

    const [newCardQuestion, setNewCardQuestion] = useState<string>('')
    // const [newCardAnswer, setNewCardAnswer] = useState<string>('')

    const handleConfirm = () => {
        dispatch(updateCardPayload(props.packId, props.cardId, newCardQuestion))
        setNewCardQuestion('')
        props.onClose()
    }
    const handleCancel = () => {
        setNewCardQuestion('')
        props.onClose()
    }

    return (
        <Modal title={'Enter new card question'} visible={props.isOpened} onOk={handleConfirm} onCancel={handleCancel}>
            <Input placeholder={'Enter new card question'} value={newCardQuestion} onChange={(e) => setNewCardQuestion(e.currentTarget.value)} />
        </Modal>
    );
};

export default EditCardModal;