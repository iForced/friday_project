import React from 'react';
import s from './CheckEmail.module.css'
import {Card} from 'antd';
import mailLogo from '../../../assets/mail_logo.png'
import {useTypedSelector} from "../../../hooks/useTypedSelector";


const CheckEmail = () => {

    const email = useTypedSelector(state => state.recoveryPass.email)

    return (
        <div className={s.wrapper}>
            <Card
                style={{width: '413px'}}
                bodyStyle={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '40px',
                    textAlign: 'center',
                }}
            >
                <h2>IT-Incubator</h2>
                <img src={mailLogo} alt="Mail logo"/>
                <p>Check Email</p>
                <p>We’ve sent an Email with instructions to {email}</p>
            </Card>
        </div>
    );
};

export default CheckEmail;