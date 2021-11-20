import React from 'react';
import s from './PacksTable.module.css'
import {Button, Layout, Slider, Table} from "antd";
import {useDispatch} from "react-redux";
import {getPacksThunk, setPage} from "../../store/packsTable/actions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Sider from "antd/es/layout/Sider";
import {Content} from "antd/es/layout/layout";

const PacksTable = () => {

    const dispatch = useDispatch()
    const packsData = useTypedSelector(state => state.packsTable.packs)
    const page = useTypedSelector(state => state.packsTable.page)
    const pageCount = useTypedSelector(state => state.packsTable.pageCount)

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: true,
            width: '20%',
        },
        {
            title: 'Cards count',
            dataIndex: 'cardsCount',
            sorter: true,
            width: '20%',
        },
        {
            title: 'Updated',
            dataIndex: 'updated',
            sorter: true,
            width: '20%',
        },
    ]

    const pagination = {
        current: page,
        pageSize: pageCount,
    }

    const handleTableChange = (pagination: any, filters: any, sorter: any) => {
        dispatch(setPage(pagination.current))
    }

    const minNumberOfCards = 0
    const maxNumberOfCards = 200

    return (

        <Layout style={{height: '100vh'}}>
            <Sider theme={'light'} style={{padding: '10px 20px'}} width={350}>
                <h3>Show packs cards</h3>
                <div>
                    <Button>My</Button>
                    <Button>All</Button>
                </div>
                <div>
                    <h3>Number of cards</h3>
                    <Slider range tooltipVisible={true} min={minNumberOfCards} max={maxNumberOfCards} defaultValue={[0, 200]} />
                </div>
            </Sider>
            <Content>
                <div className={s.tableContainer}>
                    <Table
                        columns={columns}
                        dataSource={packsData}
                        pagination={pagination}
                        loading={false}
                        onChange={handleTableChange}
                    />
                    <button onClick={() => dispatch(getPacksThunk())}>test</button>
                </div>
            </Content>
        </Layout>
    );
};

export default PacksTable;