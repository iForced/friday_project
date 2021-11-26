import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Login from './pages/Login/Login';
import Registration from "./pages/Registration/Registration";
import PasswordRecovery from "./pages/PasswordRecovery/PasswordRecovery";
import EnterNewPassword from "./pages/EnterNewPassword/EnterNewPassword";
import CreateNewPassword from "./pages/PasswordRecovery/CreateNewPassword/CreateNewPassword";
import CheckEmail from "./pages/PasswordRecovery/CheckEmail/CheckEmail";
import Profile from "./pages/Profile/Profile";
import Page404 from "./pages/Page404/Page404";
import PacksTable from "./pages/PacksTable/PacksTable";
import Cards from "./pages/Cards/Cards";


const App = () => {

    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Login/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/registration'} element={<Registration/>}/>
                <Route path={'/recoverypassword'} element={<PasswordRecovery/>}/>
                <Route path={'/enterpassword'} element={<EnterNewPassword/>}/>
                <Route path={'/createnewpassword/:token'} element={<CreateNewPassword/>}/>
                <Route path={'/checkemail'} element={<CheckEmail/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/*'} element={<Page404/>}/>
                <Route path={'/packs'} element={<PacksTable/>}/>
                <Route path={'/packs/:cardsPack_id/cards'} element={<Cards/>}/>
            </Routes>
        </div>
    );
};

export default App;