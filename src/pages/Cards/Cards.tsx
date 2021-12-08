import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import s from './Cards.module.css';
import {Button, Layout, notification, Rate, Table} from "antd";
import {Input} from 'antd';
import {Content} from "antd/es/layout/layout";
import {useDispatch} from "react-redux";
import {
    fetchCardError,
    fetchCardsPayload, removeCardPayload,
    setCardPayload, setGradeCardPayload, setPage, setSearchCardValue, setSortCardsValue, updateCardPayload
} from "../../store/cards/cardsActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useParams} from "react-router-dom";
import ActionsCardColumn from "./ActionsCardColumn/ActionsCardColumn";
import {CardType} from "../../store/cards/cardsTypes";
import {TablePaginationConfig} from "antd/lib/table/interface";
import AddCardModal from "../../modals/AddCardModal/AddCardModal";
import EditCardModal from "../../modals/EditCardModal/EditCardModal";


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
        const sort = useTypedSelector(state => state.cards.sort)

    const [showAddCardModal, setShowAddCardModal] = useState<boolean>(false)
    const [showEditCardModal, setShowEditCardModal] = useState<boolean>(false)
    const [showDeleteCardModal, setShowDeleteCardModal] = useState<boolean>(false)
    const [selectedCard, setSelectedCard] = useState<string>('')

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
                    return <ActionsCardColumn
                        card_id={record._id}
                        packId={cardsPack_id!}
                        onDeleteCard={toDeleteCard}
                        onEditCard={toEditCard}
                        showEditCardModal={setShowEditCardModal}
                        showDeleteCardModal={setShowDeleteCardModal}
                    />
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
            dispatch(fetchCardsPayload(cardsPack_id!, page, pageCount, searchTerm, sort))
        }, [cardsPack_id, page, sort])

        useEffect(() => {
            if (error) {
                onErrorNotification()
                dispatch(fetchCardError(error))
            }
        }, [error])

        useEffect(() => {
            const debounceTimeout = setTimeout(() => {
                dispatch(fetchCardsPayload(cardsPack_id!, page, pageCount, searchTerm, sort))
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

        const handleTableChange = (pagination: TablePaginationConfig, filter: any, sorter: any) => {
            dispatch(setPage(pagination.current!))
            if (sorter.order === 'ascend') {
                dispatch(setSortCardsValue('0grade'))
            } else if (sorter.order === 'descend') {
                dispatch(setSortCardsValue('1grade'))
            }
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
                        <AddCardModal isOpened={showAddCardModal} onClose={() => setShowAddCardModal(false)} packId={cardsPack_id!} />
                        <EditCardModal isOpened={showEditCardModal} packId={cardsPack_id!} cardId={selectedCard} onClose={() => setShowEditCardModal(false)} />
                        <h2>Cards page</h2>
                        <div className={s.cardsContainerHeader}>
                            <Input placeholder={'Search...'}
                                   style={{width: '50%', margin: '20px 0', padding: '10px 20px'}}
                                   onInput={handleSearchCard}
                                   value={searchTerm}
                            />
                            <Button type={'primary'} shape={'round'} onClick={() => setShowAddCardModal(true)}>Add new card</Button>
                        </div>
                        <Table
                            columns={columns}
                            dataSource={cards}
                            pagination={pagination}
                            loading={isFetching}
                            onChange={handleTableChange}
                            scroll={{y: 650}}
                            rowKey={(row) => row._id}
                            onRow={(record: CardType) => {
                                return {
                                    onClick: () => setSelectedCard(record._id)
                                }
                            }}
                        />
                    </div>
                </Content>
            </Layout>
        );
    }
)
export default Cards;



