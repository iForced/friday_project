import React from 'react';
import s from './PasswordRecovery.module.css'
import {Button, Card, Input} from 'antd';
import {NavLink} from "react-router-dom";

const PasswordRecovery = () => {
    return (
        <div className={s.wrapper}>
            <Card
                style={{width: '413px'}}
                bodyStyle={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '40px',
                }}
            >
                <h2>IT-Incubator</h2>
                <p>Forgot your password?</p>
                <Input placeholder={'Email'}/>
                <small>Enter your email address and we will send you further instructions</small>
                <Button shape={'round'} type={'primary'}>Send Instructions</Button>
                <p>Did you remember your password?</p>
                <p><NavLink to={'/login'}>Try logging in</NavLink></p>
            </Card>
        </div>
    );
};

export default PasswordRecovery;