import React, {ChangeEvent, useCallback, useEffect} from 'react';
import s from './Cards.module.css';
import {Button, Layout, notification, Rate, Table} from "antd";
import {Input} from 'antd';
import {Content} from "antd/es/layout/layout";
import {useDispatch} from "react-redux";
import {
    fetchCardError,
    fetchCardsPayload, removeCardPayload,
    setCardPayload, setGradeCardPayload, setPage, setSearchCardValue, updateCardPayload
} from "../../store/cards/cardsActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useParams} from "react-router-dom";
import ActionsCardColumn from "./ActionsCardColumn/ActionsCardColumn";
import {CardType} from "../../store/cards/cardsTypes";


const Cards = React.memo(() => {
        const dispatch = useDispatch()
        const {cardsPack_id} = useParams()
        const cards = useTypedSelector(state => state.cards.cards)
        const page = useTypedSelector(state => state.cards.page)
        const pageCount = useTypedSelector(state => state.cards.pageCount)
        const cardsTotalCount = useTypedSelector(state => state.cards.cardsTotalCount)
        const error = useTypedSelector(state => state.cards.error)
        const searchTerm = useTypedSelector(state => state.cards.searchTerm)
        const isFetching = useTypedSelector(state => state.cards.isFetching)


        const columns = [
            {title: 'Question', dataIndex: 'question', width: '28%'},
            {title: 'Answer', dataIndex: 'answer', width: '28%'},
            {title: 'Last updated', dataIndex: 'updated', width: '13%'},
            {
                title: 'Grade', dataIndex: 'grade', sorter: true, width: '13%',
                render: (_: any, record: CardType) => (<Rate allowHalf value={record.grade} onChange={(value) => toGradeCard(record._id, value)}/>)
            },
            {
                title: 'Actions', width: '18%',
                render: (_: any, record: CardType) => {
                    return <ActionsCardColumn _id={record._id} onDeleteCard={toDeleteCard} onEditCard={toEditCard}/>
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
            dispatch(fetchCardsPayload(cardsPack_id!, page, pageCount, searchTerm))
        }, [cardsPack_id, page])

        useEffect(() => {
            if (error) {
                onErrorNotification()
                dispatch(fetchCardError(error))
            }
        }, [error])

        useEffect(() => {
            const debounceTimeout = setTimeout(() => {
                dispatch(fetchCardsPayload(cardsPack_id!, page, pageCount, searchTerm))
            }, 2000)

            return () => {
                clearTimeout(debounceTimeout)
            }
        }, [searchTerm])

        const pagination = {
            current: page,
            pageSize: pageCount,
            total: cardsTotalCount,
        }

        const handleTableChange = (pagination: any) => {
            dispatch(setPage(pagination.current))
        }
        const addCard = () => {
            dispatch(setCardPayload(cardsPack_id!, 'kavo?', 'wo', 4))
        }
        const toDeleteCard = useCallback((cardId: string) => {
            dispatch(removeCardPayload(cardId, cardsPack_id!))
        }, [])
        const handleSearchCard = (e: ChangeEvent<HTMLInputElement>) => {
            const searchInputValue = e.currentTarget.value
            dispatch(setSearchCardValue(searchInputValue))
        }
        const toEditCard = useCallback((cardId: string) => {
            dispatch(updateCardPayload(cardsPack_id!, cardId, 'new question'))
        }, [])
        const toGradeCard = (cardId: string, grade: number) => {
            dispatch(setGradeCardPayload(cardsPack_id!, cardId, grade))
        }

        return (
            <Layout style={{height: '100vh'}}>
                <Content>
                    <div className={s.cardsContainer}>
                        <h2>Cards page</h2>
                        <div className={s.cardsContainerHeader}>
                            <Input placeholder={'Search...'}
                                   style={{width: '50%', margin: '20px 0', padding: '10px 20px'}}
                                   onInput={handleSearchCard}
                                   value={searchTerm}
                            />
                            <Button type={'primary'} shape={'round'} onClick={addCard}>Add new card</Button>
                        </div>
                        <Table
                            columns={columns}
                            dataSource={cards}
                            pagination={pagination}
                            loading={isFetching}
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



