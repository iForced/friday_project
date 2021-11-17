import React from 'react';
import {Route, Routes} from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import EnterNewPassword from "./pages/EnterNewPassword/EnterNewPassword";
import PasswordRecovery from "./pages/PasswordRecovery/PasswordRecovery";
import Profile from "./pages/Profile/Profile";
import Page404 from "./pages/Page404/Page404";
import Login from './pages/Login/Login';
import Header from "./components/Header/Header";
import CheckEmail from "./pages/PasswordRecovery/CheckEmail/CheckEmail";
import CreateNewPassword from "./pages/PasswordRecovery/CreateNewPassword/CreateNewPassword";

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/registration'} element={<Registration/>}/>
                <Route path={'/enterpassword'} element={<EnterNewPassword/>}/>
                <Route path={'/recoverypassword'} element={<PasswordRecovery/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/*'} element={<Page404/>}/>
                <Route path={'/checkemail'} element={<CheckEmail/>}/>
                <Route path={'createnewpassword/:token'} element={<CreateNewPassword/>}/>
            </Routes>
        </div>
    );
};

export default App;