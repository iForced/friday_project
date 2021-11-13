import React from 'react';
import s from './PasswordRecovery.module.css'
import {Button, Card, Input} from 'antd';
import {NavLink} from "react-router-dom";
import {useFormik} from "formik";

const PasswordRecovery = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            alert(values.email)
        }
    })

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
                <form onSubmit={formik.handleSubmit} className={s.form}>
                    <Input
                        placeholder={'Email'}
                        name={'email'}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    <small>Enter your email address and we will send you further instructions</small>
                    <Button
                        shape={'round'}
                        type={'primary'}
                        htmlType={'submit'}
                    >Send Instructions
                    </Button>
                </form>
                <p>Did you remember your password?</p>
                <p><NavLink to={'/login'}>Try logging in</NavLink></p>
            </Card>
        </div>
    );
};

export default PasswordRecovery;