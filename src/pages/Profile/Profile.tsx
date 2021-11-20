import React from 'react';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../store/store';
import {Navigate} from 'react-router-dom';

const Profile = () => {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)

    if (!isLoggedIn) {
        return  <Navigate to="/login" replace />;
    }

    return (
        <div>
            Profile
        </div>
    );
};

export default Profile;