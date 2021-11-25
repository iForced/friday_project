import React from 'react';
import s from './Header.module.css';
import {Menu} from 'antd';
import {SettingOutlined, UserOutlined, SnippetsOutlined, SolutionOutlined} from '@ant-design/icons';
import {GithubOutlined} from '@ant-design/icons';
import logo from './react.svg';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logoutTC} from '../../store/loginization/loginActions';


const Header = () => {
    const {SubMenu} = Menu;
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(logoutTC())
        navigate('/login')
    }


    return (
        <Menu mode="horizontal" className={s.menuWrapper}>
            <Menu.Item><img src={logo} alt={'react'}/></Menu.Item>
            <Menu.Item icon={<SnippetsOutlined/>}>Packs list</Menu.Item>
            <Menu.Item icon={<UserOutlined/>}>Profile</Menu.Item>

            <SubMenu key="SubMenu" icon={<SettingOutlined/>} title="Developers">
                <Menu.ItemGroup>
                    <Menu.Item>Игнат Закалинский</Menu.Item>
                    <Menu.Item icon={<GithubOutlined/>}>
                        <a href="https://github.com/iForced" target="_blank" rel="noopener noreferrer">Илья Орсич</a>
                    </Menu.Item>
                    <Menu.Item icon={<GithubOutlined/>}>
                        <a href="https://github.com/MitPalVach" target="_blank" rel="noopener noreferrer">Дмитрий
                            Вачугов</a>
                    </Menu.Item>
                    <Menu.Item icon={<GithubOutlined/>}>
                        <a href="https://github.com/NepoGostu" target="_blank" rel="noopener noreferrer">Андрей Зуев</a>
                    </Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
            <SubMenu key="SubMenu1" icon={<SolutionOutlined/>} title="Authorization">
                <Menu.ItemGroup>
                    <Menu.Item icon={<SolutionOutlined/>} onClick={logOut}>Sign in</Menu.Item>
                    <Menu.Item icon={<SolutionOutlined/>} onClick={() => navigate('/registration')}>Sign up</Menu.Item>
                    <Menu.Item icon={<SolutionOutlined/>} onClick={logOut}>Sign out</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
        </Menu>

    );
};

export default Header;

// <NavLink to={'/login'}>Login</NavLink>
// <NavLink to={'/registration'}>Registration</NavLink>
// <NavLink to={'/enterpassword'}>Enter password</NavLink>
// <NavLink to={'/recoverypassword'}>Recovery password</NavLink>
// <NavLink to={'/profile'}>Profile</NavLink>
// <NavLink to={'/404'}>404</NavLink>


// class App extends React.Component {
//     state = {
//         current: 'mail',
//     };
//
//     handleClick = e => {
//         console.log('click ', e);
//         this.setState({current: e.key});
//     };
//
//     render() {
//         const {current} = this.state;
//         return (
//
//         );
//     }
// }