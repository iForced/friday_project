import React from 'react';
import s from './App.module.css'
import Test from "./pages/Test/Test";
import {NavLink, Route, Routes} from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import EnterNewPassword from "./pages/EnterNewPassword/EnterNewPassword";
import PasswordRecovery from "./pages/PasswordRecovery/PasswordRecovery";
import Profile from "./pages/Profile/Profile";
import Page404 from "./pages/Page404/Page404";
import Login from './pages/Login/Login';


const App = () => {
    return (
        <div>
            <nav className={s.navbar}>
                test commit
                <NavLink to={'login'}>Login</NavLink>
                <NavLink to={'registration'}>Registration</NavLink>
                <NavLink to={'enterpassword'}>Enter password</NavLink>
                <NavLink to={'recoverypassword'}>Recovery password</NavLink>
                <NavLink to={'profile'}>Profile</NavLink>
                <NavLink to={'404'}>404</NavLink>
            </nav>
            <Routes>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'registration'} element={<Registration/>}/>
                <Route path={'enterpassword'} element={<EnterNewPassword/>}/>
                <Route path={'recoverypassword'} element={<PasswordRecovery/>}/>
                <Route path={'profile'} element={<Profile/>}/>
                <Route path={'404'} element={<Page404/>}/>
            </Routes>
            <Test/>
        </div>
    );
};

export default App;