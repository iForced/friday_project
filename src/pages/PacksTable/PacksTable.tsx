import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import s from './PacksTable.module.css'
import {Button, Input, Layout, notification, Slider, Table} from "antd";
import {useDispatch} from "react-redux";
import {
    deletePackThunk,
    getPacksThunk,
    setPage,
    setPageSize, setSearchPackValue, setSortPacksValue, updatePackThunk
} from "../../store/packsTable/actions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Sider from "antd/es/layout/Sider";
import {Content} from "antd/es/layout/layout";
import ActionsColumn from "./ActionsColumn/ActionsColumn";
import {PackType} from "../../api/packsApi/types";
import {setError} from "../../store/recoveryPass/actions";
import {useNavigate} from "react-router-dom";
import {TablePaginationConfig} from "antd/lib/table/interface";
import AddPackModal from "../../modals/AddPackModal/AddPackModal";
import EditPackModal from "../../modals/EditPackModal/EditPackModal";

const PacksTable = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const packsData = useTypedSelector(state => state.packsTable.packs)
    const page = useTypedSelector(state => state.packsTable.page)
    const packsTotalCount = useTypedSelector(state => state.packsTable.cardPacksTotalCount)
    const packsPerPage = useTypedSelector(state => state.packsTable.pageSize)
    const isFetching = useTypedSelector(state => state.packsTable.isFetching)
    const error = useTypedSelector(state => state.packsTable.error)
    const searchTerm = useTypedSelector(state => state.packsTable.searchTerm)
    const isLoggedIn = useTypedSelector(state => state.login.isLoggedIn)
    const sort = useTypedSelector(state => state.packsTable.sort)

    const [showAddPackModal, setShowAddPackModal] = useState<boolean>(false)
    const [showEditPackModal, setShowEditPackModal] = useState<boolean>(false)
    const [selectedRow, setSelectedRow] = useState<string>('')

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login')
        }
    }, [])

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(getPacksThunk(page, packsPerPage, searchTerm, sort))
        }
    }, [page, packsPerPage, sort])

    const onErrorNotification = () => {
        notification.error({
            message: 'Error',
            description: error,
            placement: 'topLeft',
            top: 55,
        });
    }
    useEffect(() => {
        if (error) {
            onErrorNotification()
            dispatch(setError(''))
        }
    }, [error])

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            dispatch(getPacksThunk(page, packsPerPage, searchTerm, sort))
        }, 2000)

        return () => {
            clearTimeout(debounceTimeout)
        }
    }, [searchTerm])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            width: '20%',
        },
        {
            title: 'Cards',
            dataIndex: 'cardsCount',
            width: '20%',
        },
        {
            title: 'Last updated',
            dataIndex: 'updated',
            sorter: true,
            width: '20%',
        },
        {
            title: 'Created by',
            dataIndex: 'user_name',
            width: '20%',
        },
        {
            title: 'Actions',
            width: '30%',
            render: (_: any, record: PackType) => (
                <ActionsColumn
                    packId={record._id}
                    onDeletePack={handleDeletePack}
                    onUpdatePack={handleUpdatePack}
                    isEditPackModalOpened={showEditPackModal}
                    showEditPackModal={setShowEditPackModal}
                    showCards={() => {
                        navigate(`/packs/${record._id}/cards`)
                    }}
                />)
        },
    ]

    const pagination = {
        current: page,
        pageSize: packsPerPage,
        total: packsTotalCount,
    }

    const handleTableChange = useCallback((pagination: TablePaginationConfig, filter: any, sorter: any) => {
        dispatch(setPage(pagination.current!))
        dispatch(setPageSize(pagination.pageSize!))
        if (sorter.order === 'ascend') {
            dispatch(setSortPacksValue('0updated'))
        } else if (sorter.order === 'descend') {
            dispatch(setSortPacksValue('1updated'))
        }
    }, [])
    const handleDeletePack = useCallback((packId: string) => {
        dispatch(deletePackThunk(packId))
    }, [])
    const handleUpdatePack = useCallback((packId: string, newPackName: string) => {
        dispatch(updatePackThunk(packId, newPackName))
    }, [])

    const handleSearchPack = (e: ChangeEvent<HTMLInputElement>) => {
        const searchInputValue = e.currentTarget.value
        dispatch(setSearchPackValue(searchInputValue))
    }
    const showMyPacks = () => {
        // searchingPacks = packsData.filter(pack => pack.user_id === '618fae1fda4cff00045585fb')
    }
    const showAllPacks = () => {
        // searchingPacks = packsData.filter(pack => pack.user_id === 'my id')
    }

    const minNumberOfCards = 0
    const maxNumberOfCards = 200

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider theme={'light'} style={{padding: '10px 20px'}} width={350}>
                <div className={s.showOptions}>
                    <div>
                        <h3>Show packs cards</h3>
                        <div className={s.showPacksButtons}>
                            <Button onClick={showMyPacks}>My</Button>
                            <Button onClick={showAllPacks}>All</Button>
                        </div>
                    </div>
                    <div>
                        <h3>Number of cards</h3>
                        <Slider
                            range
                            tooltipVisible={true}
                            tooltipPlacement={'bottom'}
                            min={minNumberOfCards}
                            max={maxNumberOfCards}
                            defaultValue={[0, 200]}
                        />
                    </div>
                </div>
            </Sider>
            <Content>
                <div className={s.tableContainer}>
                    <AddPackModal isOpened={showAddPackModal} onClose={() => setShowAddPackModal(false)} />
                    <EditPackModal packId={selectedRow} isOpened={showEditPackModal} onClose={() => setShowEditPackModal(false)} />
                    <h2>Pack list</h2>
                    <div className={s.tableContainerHeader}>
                        <Input placeholder={'Search...'}
                               style={{width: '50%', margin: '20px 0', padding: '10px 20px'}}
                               onInput={handleSearchPack}
                               value={searchTerm}
                        />
                        <Button type={'primary'} shape={'round'} onClick={() => setShowAddPackModal(true)}>Add new pack</Button>
                    </div>
                    <Table
                        columns={columns}
                        dataSource={packsData}
                        pagination={pagination}
                        loading={isFetching}
                        onChange={handleTableChange}
                        scroll={{y: 650}}
                        rowKey={(row) => row._id}
                        onRow={(record: PackType) => {
                            return {
                                onClick: () => setSelectedRow(record._id)
                            }
                        }}
                    />
                </div>
            </Content>
        </Layout>
    );
};

export default PacksTable;
