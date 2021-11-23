import React, {useEffect} from 'react';
import s from './PacksTable.module.css'
import {Button, Input, Layout, Slider, Table} from "antd";
import {useDispatch} from "react-redux";
import {addPackThunk, getPacksThunk, setPage, setPageThunk} from "../../store/packsTable/actions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Sider from "antd/es/layout/Sider";
import {Content} from "antd/es/layout/layout";
import ActionsColumn from "./ActionsColumn/ActionsColumn";

const PacksTable = () => {

    const dispatch = useDispatch()
    const packsData = useTypedSelector(state => state.packsTable.packs)
    const page = useTypedSelector(state => state.packsTable.page)
    const packsTotalCount = useTypedSelector(state => state.packsTable.cardPacksTotalCount)

    const packsPerPage = packsTotalCount / 4
    const totalPages = packsTotalCount / 10

    useEffect(() => {
        dispatch(getPacksThunk(page))
    }, [page])

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
            render: () => <ActionsColumn />
        },
    ]

    const pagination = {
        current: page,
        pageSize: 10,
        total: packsTotalCount,
    }

    const handleTableChange = (pagination: any, filters: any, sorter: any) => {
        dispatch(setPageThunk(pagination.current))
    }
    const handleAddPack = () => {
        dispatch(addPackThunk('alo'))
    }

    const minNumberOfCards = 0
    const maxNumberOfCards = 200

    return (
        <Layout style={{height: '100vh'}}>
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
                        <Slider range tooltipVisible={true} tooltipPlacement={'bottom'} min={minNumberOfCards} max={maxNumberOfCards} defaultValue={[0, 200]} />
                    </div>
                </div>
            </Sider>
            <Content>
                <div className={s.tableContainer}>
                    <h2>Pack list</h2>
                    <div className={s.tableContainerHeader}>
                        <Input placeholder={'Search...'} style={{width: '50%', margin: '20px 0', padding: '10px 20px'}} />
                        <Button type={'primary'} shape={'round'} onClick={handleAddPack}>Add new pack</Button>
                    </div>
                    <Table
                        columns={columns}
                        dataSource={packsData}
                        pagination={pagination}
                        loading={false}
                        onChange={handleTableChange}
                    />
                    {/*<button onClick={() => dispatch(getPacksThunk())}>test</button>*/}
                </div>
            </Content>
        </Layout>
    );
};

export default PacksTable;