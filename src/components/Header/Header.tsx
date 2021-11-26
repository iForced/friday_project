import React from 'react';
import s from './Header.module.css';
import {Menu} from 'antd';
import {SettingOutlined, UserOutlined, SnippetsOutlined, SolutionOutlined} from '@ant-design/icons';
import {GithubOutlined} from '@ant-design/icons';
import logo from '../../assets/react.svg';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logout} from '../../store/loginization/loginActions';


const Header = () => {
    const {SubMenu} = Menu;
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(logout())
        navigate('/login')
    }

    return (
        <Menu mode="horizontal" className={s.menuWrapper}>
            <Menu.Item key='logo'><img src={logo} alt={'react'}/></Menu.Item>
                    <Menu.Item key='packs' icon={<SnippetsOutlined/>} onClick={() => navigate('/packs')}>Packs list</Menu.Item>
            <Menu.Item key='profile' icon={<UserOutlined/>} onClick={() => navigate('/profile')}>Profile</Menu.Item>

            <SubMenu key="developers" icon={<SettingOutlined/>} title="Developers">
                <Menu.ItemGroup>
                    <Menu.Item key='dev-0'>Игнат Закалинский</Menu.Item>
                    <Menu.Item key='dev-1' icon={<GithubOutlined/>}>
                        <a href="https://github.com/iForced" target="_blank" rel="noopener noreferrer">Илья
                            Орсич</a>
                    </Menu.Item>
                    <Menu.Item key='dev-2' icon={<GithubOutlined/>}>
                        <a href="https://github.com/MitPalVach" target="_blank" rel="noopener noreferrer">Дмитрий
                            Вачугов</a>
                    </Menu.Item>
                    <Menu.Item key='dev-3' icon={<GithubOutlined/>}>
                        <a href="https://github.com/NepoGostu" target="_blank" rel="noopener noreferrer">Андрей Зуев</a>
                    </Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>

            <SubMenu key="authorization" icon={<SolutionOutlined/>} title="Authorization">
                <Menu.ItemGroup>
                    <Menu.Item key='login' icon={<SolutionOutlined/>} onClick={() => navigate('/login')}>Sign in</Menu.Item>
                    <Menu.Item key='reg' icon={<SolutionOutlined/>} onClick={() => navigate('/registration')}>Sign up</Menu.Item>
                    <Menu.Item key='logout' icon={<SolutionOutlined/>} onClick={logOut}>Sign out</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
        </Menu>

    );
};

export default Header;