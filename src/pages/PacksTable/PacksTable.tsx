import React, {ChangeEvent, useCallback, useEffect} from 'react';
import s from './PacksTable.module.css'
import {Button, Input, Layout, notification, Slider, Table} from "antd";
import {useDispatch} from "react-redux";
import {
    addPackThunk,
    deletePackThunk,
    getPacksThunk,
    setPage,
    setPageSize, setSearchPackValue, updatePackThunk
} from "../../store/packsTable/actions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Sider from "antd/es/layout/Sider";
import {Content} from "antd/es/layout/layout";
import ActionsColumn from "./ActionsColumn/ActionsColumn";
import {PackType} from "../../api/packsApi/types";
import {setError} from "../../store/recoveryPass/actions";

const PacksTable = () => {

    const dispatch = useDispatch()
    const packsData = useTypedSelector(state => state.packsTable.packs)
    const page = useTypedSelector(state => state.packsTable.page)
    const packsTotalCount = useTypedSelector(state => state.packsTable.cardPacksTotalCount)
    const packsPerPage = useTypedSelector(state => state.packsTable.pageSize)
    const isFetching = useTypedSelector(state => state.packsTable.isFetching)
    const error = useTypedSelector(state => state.packsTable.error)
    const searchValue = useTypedSelector(state => state.packsTable.searchValue)

    const onErrorNotification = () => {
        notification.error({
            message: 'Error',
            description: error,
            placement: 'topLeft',
            top: 55,
        });
    }

    useEffect(() => {
        dispatch(getPacksThunk(page, packsPerPage, searchValue))
    }, [page, packsPerPage])

    useEffect(() => {
        if (error) {
            onErrorNotification()
            dispatch(setError(''))
        }
    }, [error])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: true,
            width: '20%',
            key: '1',
        },
        {
            title: 'Cards',
            dataIndex: 'cardsCount',
            sorter: true,
            width: '20%',
            key: '2',
        },
        {
            title: 'Last updated',
            dataIndex: 'updated',
            sorter: true,
            width: '20%',
            key: '3',
        },
        {
            title: 'Created by',
            dataIndex: 'user_name',
            sorter: true,
            width: '20%',
            key: '4',
        },
        {
            title: 'Actions',
            width: '20%',
            key: '5',
            render: (_: any, record: PackType) => <ActionsColumn onDeletePack={handleDeletePack} onUpdatePack={handleUpdatePack} packId={record._id} />
        },
    ]

    const pagination = {
        current: page,
        pageSize: packsPerPage,
        total: packsTotalCount,
    }

    const handleTableChange = useCallback((pagination: any, sorter: any) => {
        dispatch(setPage(pagination.current))
        dispatch(setPageSize(pagination.pageSize))
    }, [])
    const handleAddPack = () => {
        dispatch(addPackThunk('alo'))
        dispatch(getPacksThunk(page, packsPerPage, searchValue))
    }
    const handleDeletePack = useCallback((packId: string) => {
        dispatch(deletePackThunk(packId))
        dispatch(getPacksThunk(page, packsPerPage, searchValue))
    }, [])
    const handleUpdatePack = useCallback((packId: string, newPackName: string) => {
        dispatch(updatePackThunk(packId, newPackName))
        dispatch(getPacksThunk(page, packsPerPage, searchValue))
    }, [])
    const handleSearchPack = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        const searchInputValue = e.currentTarget.value
        dispatch(setSearchPackValue(searchInputValue))
        const debounceInterval = setTimeout(() => {
            debugger
            dispatch(getPacksThunk(page, packsPerPage, searchValue))
            clearInterval(debounceInterval)
        }, 2000)
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
                        <Slider range tooltipVisible={true} tooltipPlacement={'bottom'} min={minNumberOfCards}
                                max={maxNumberOfCards} defaultValue={[0, 200]}/>
                    </div>
                </div>
            </Sider>
            <Content>
                <div className={s.tableContainer}>
                    <h2>Pack list</h2>
                    <div className={s.tableContainerHeader}>
                        <Input placeholder={'Search...'}
                               style={{width: '50%', margin: '20px 0', padding: '10px 20px'}}
                               onInput={handleSearchPack}
                        />
                        <Button type={'primary'} shape={'round'} onClick={handleAddPack}>Add new pack</Button>
                    </div>
                    <Table
                        columns={columns}
                        dataSource={packsData}
                        pagination={pagination}
                        loading={isFetching}
                        onChange={handleTableChange}
                        scroll={{y: 650}}
                    />
                </div>
            </Content>
        </Layout>
    );
};

export default PacksTable;