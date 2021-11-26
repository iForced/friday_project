import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../store/store';
import {Navigate} from 'react-router-dom';
import {UserData} from '../../store/profilePage/profileActions';

const Profile = () => {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const profilePageData = useSelector<AppRootStateType, UserData>(state => state.profile.user)

    if (!isLoggedIn) {
        return  <Navigate to="/login" replace />;
    }



    return (
        <div>
     Profile
            <img src={profilePageData.avatar} alt=""/>


        </div>
    );
};

export default Profile;