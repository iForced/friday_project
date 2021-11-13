import React from 'react';
import s from './App.module.css'
import {NavLink, Route, Routes} from "react-router-dom";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import EnterNewPassword from "./pages/EnterNewPassword/EnterNewPassword";
import PasswordRecovery from "./pages/PasswordRecovery/PasswordRecovery";
import Profile from "./pages/Profile/Profile";
import Page404 from "./pages/Page404/Page404";
import CheckEmail from "./pages/PasswordRecovery/CheckEmail/CheckEmail";

const App = () => {
    return (
        <div>
            <nav className={s.navbar}>
                <NavLink to={'login'}>Login</NavLink>
                <NavLink to={'registration'}>Registration</NavLink>
                <NavLink to={'enterpassword'}>Enter password</NavLink>
                <NavLink to={'recoverypassword'}>Recovery password</NavLink>
                <NavLink to={'profile'}>Profile</NavLink>
                <NavLink to={'404'}>404</NavLink>
                <NavLink to={'checkemail'}>Check email</NavLink>
            </nav>
            <Routes>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'registration'} element={<Registration/>}/>
                <Route path={'enterpassword'} element={<EnterNewPassword/>}/>
                <Route path={'recoverypassword'} element={<PasswordRecovery/>}/>
                <Route path={'profile'} element={<Profile/>}/>
                <Route path={'404'} element={<Page404/>}/>
                <Route path={'checkemail'} element={<CheckEmail/>}/>
            </Routes>
        </div>
    );
};

export default App;