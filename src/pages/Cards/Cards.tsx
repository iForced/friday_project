import React, {useCallback, useEffect} from 'react';
import s from './Cards.module.css';
import {Button, Layout, notification, Rate, Table} from "antd";
import {Input} from 'antd';
import {Content} from "antd/es/layout/layout";
import {useDispatch} from "react-redux";
import {
    fetchCardError,
    fetchCardsPayload, removeCardPayload,
    setCardPayload
} from "../../store/cards/cardsActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useParams} from "react-router-dom";
import ActionsCardColumn from "./ActionsCardColumn/ActionsCardColumn";
import {CardType} from "../../store/cards/cardsTypes";


const Cards = React.memo(() => {
        const dispatch = useDispatch()
        const {cardsPack_id} = useParams()
        const {_id} = useParams()
        const cards = useTypedSelector(state => state.cards.cards)
        const question = useTypedSelector(state => state.cards.question)
        const answer = useTypedSelector(state => state.cards.answer)
        const grade = useTypedSelector(state => state.cards.grade)
        const page = useTypedSelector(state => state.cards.page)
        const pageCount = useTypedSelector(state => state.cards.pageCount)
        const cardsTotalCount = useTypedSelector(state => state.cards.cardsTotalCount)
        const error = useTypedSelector(state => state.cards.error)


        const columns = [
            {title: 'Question', dataIndex: 'question', width: '28%'},
            {title: 'Answer', dataIndex: 'answer', width: '28%'},
            {title: 'Last updated', dataIndex: 'updated', width: '13%'},
            {
                title: 'Grade', dataIndex: 'grade', sorter: true, width: '13%',
                render: () => (<Rate allowHalf defaultValue={2.5}/>)
            },
            {
                title: 'Actions', width: '18%',
                render: (_: any, record: CardType) => {
                    return <ActionsCardColumn _id={record._id} onDeleteCard={toDeleteCard}/>
                }
            },
        ]

        const onErrorNotification = () => {
            notification.error({
                message: 'Error',
                description: error,
                placement: 'topLeft',
                top: 55,
            });
        }

        useEffect(() => {
            dispatch(fetchCardsPayload(cardsPack_id!, question, answer, _id!, grade, page, pageCount, cardsTotalCount))
        }, [cardsPack_id, question])

        useEffect(() => {
            if (error) {
                onErrorNotification()
                dispatch(fetchCardError(error))
            }
        }, [error])

        const pagination = {
            current: page,
            pageSize: pageCount,
            total: cardsTotalCount,
        }

        const handleTableChange = useCallback((pagination: any) => {
            dispatch(fetchCardsPayload(cardsPack_id!, question, answer, _id!, grade, pagination.current, pagination.pageSize, pagination.total))
        }, [])
        const addCard = useCallback(() => {
            dispatch(setCardPayload(cardsPack_id!, question, answer, grade))
        }, [])
        const toDeleteCard = (_id: string) => {
            dispatch(removeCardPayload(_id, cardsPack_id!))
        }

        return (
            <Layout style={{height: '100vh'}}>
                <Content>
                    <div className={s.cardsContainer}>
                        <h2>Cards page</h2>
                        <div className={s.cardsContainerHeader}>
                            <Input placeholder={'Search...'}
                                   style={{width: '50%', margin: '20px 0', padding: '10px 20px'}}/>
                            <Button type={'primary'} shape={'round'} onClick={addCard}>Add new card</Button>
                        </div>
                        <Table
                            columns={columns}
                            dataSource={cards}
                            pagination={pagination}
                            loading={false}
                            onChange={handleTableChange}
                            scroll={{y: 650}}
                        />
                    </div>
                </Content>
            </Layout>
        );
    }
)
export default Cards;



