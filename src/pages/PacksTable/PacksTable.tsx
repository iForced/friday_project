import React, {useCallback, useEffect} from 'react';
import s from './PacksTable.module.css'
import {Button, Input, Layout, notification, Slider, Table} from "antd";
import {useDispatch} from "react-redux";
import {
    addPackThunk,
    deletePackThunk,
    getPacksThunk,
    setError,
    setPage,
    setPageSize, updatePackThunk
} from "../../store/packsTable/actions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Sider from "antd/es/layout/Sider";
import {Content} from "antd/es/layout/layout";
import ActionsColumn from "./ActionsColumn/ActionsColumn";
import {PackType} from "../../api/packsApi/types";
import {useNavigate} from "react-router-dom";

const PacksTable = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const packsData = useTypedSelector(state => state.packsTable.packs)
    const page = useTypedSelector(state => state.packsTable.page)
    const packsTotalCount = useTypedSelector(state => state.packsTable.cardPacksTotalCount)
    const packsPerPage = useTypedSelector(state => state.packsTable.pageSize)
    const isFetching = useTypedSelector(state => state.packsTable.isFetching)
    const error = useTypedSelector(state => state.packsTable.error)

    const onErrorNotification = () => {
        notification.error({
            message: 'Error',
            description: error,
            placement: 'topLeft',
            top: 55,
        });
    }

    useEffect(() => {
        dispatch(getPacksThunk(page, packsPerPage))
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
        },
        {
            title: 'Cards',
            dataIndex: 'cardsCount',
            sorter: true,
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
            sorter: true,
            width: '20%',
        },
        {
            title: 'Actions',
            width: '20%',
            render: (_: any, record: PackType) => (
                <ActionsColumn
                    packId={record._id}
                    onDeletePack={handleDeletePack}
                    onUpdatePack={handleUpdatePack}
                    onLearn={() => {
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

    const handleTableChange = useCallback((pagination: any, sorter: any) => {
        dispatch(setPage(pagination.current))
        dispatch(setPageSize(pagination.pageSize))
    }, [])
    const handleAddPack = () => {
        dispatch(addPackThunk('alo'))
    }
    const handleDeletePack = (packId: string) => {
        dispatch(deletePackThunk(packId))
    };
    const handleUpdatePack = (packId: string, newPackName: string) => {
        dispatch(updatePackThunk(packId, newPackName))
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
                            <Button>My</Button>
                            <Button>All</Button>
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
                               style={{width: '50%', margin: '20px 0', padding: '10px 20px'}}/>
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