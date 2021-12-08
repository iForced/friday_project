import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Input, Modal, Space} from "antd";
import {setCardPayload} from "../../store/cards/cardsActions";

type PropsType = {
    isOpened: boolean
    onClose: () => void
    packId: string
}

const AddCardModal = (props: PropsType) => {

    const dispatch = useDispatch()

    const [question, setQuestion] = useState<string>('')
    const [answer, setAnswer] = useState<string>('')

    const defaultGrade = 0

    const handleConfirm = () => {
        dispatch(setCardPayload(props.packId, question, answer, defaultGrade))
        setQuestion('')
        setAnswer('')
        props.onClose()
    }
    const handleCancel = () => {
        setQuestion('')
        setAnswer('')
        props.onClose()
    }

    return (
        <Modal title={'Enter card data'} visible={props.isOpened} onOk={handleConfirm} onCancel={handleCancel}>
            <Space direction={'vertical'} style={{width: '100%'}}>
                <Input placeholder={'Enter question'} value={question} onChange={(e) => setQuestion(e.currentTarget.value)}/>
                <Input placeholder={'Enter answer'} value={answer} onChange={(e) => setAnswer(e.currentTarget.value)}/>
            </Space>
        </Modal>
    );
};

export default AddCardModal;