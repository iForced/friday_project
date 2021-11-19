import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";

const Login = React.lazy(() => import('../src/pages/Login/Login'))
const Registration = React.lazy(() => import('../src/pages/Registration/Registration'))
const Profile = React.lazy(() => import('../src/pages/Profile/Profile'))
const EnterNewPassword = React.lazy(() => import('../src/pages/EnterNewPassword/EnterNewPassword'))
const PasswordRecovery = React.lazy(() => import('../src/pages/PasswordRecovery/PasswordRecovery'))
const CheckEmail = React.lazy(() => import('../src/pages/PasswordRecovery/CheckEmail/CheckEmail'))
const CreateNewPassword = React.lazy(() => import('../src/pages/PasswordRecovery/CreateNewPassword/CreateNewPassword'))
const Page404 = React.lazy(() => import('../src/pages/Page404/Page404'))


const App = () => {
    return (
        <div>
            <Header/>
                <Routes>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/registration'} element={<Registration/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/enterpassword'} element={<EnterNewPassword/>}/>
                    <Route path={'/recoverypassword'} element={<PasswordRecovery/>}/>
                    <Route path={'/checkemail'} element={<CheckEmail/>}/>
                    <Route path={'/createnewpassword/:token'} element={<CreateNewPassword/>}/>
                    <Route path={'/*'} element={<Page404/>}/>
                </Routes>
        </div>
    );
};

export default App;