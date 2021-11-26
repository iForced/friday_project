import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import s from './Profile.module.css';
import {Navigate} from "react-router-dom";


const Profile = React.memo(() => {

    const profile = useTypedSelector(state => state.login.profile)


    return (
        <div className={s.profileWrapper}>
            <div>
                {profile._id ? <img src="https://via.placeholder.com/300" alt=""/> : <Navigate to={'/login'} replace={true}/>}
                {profile._id ? <h2>You are: {profile.name}</h2> : <Navigate to={'/login'} replace={true}/>}
            </div>
        </div>
    );
})

export default Profile;