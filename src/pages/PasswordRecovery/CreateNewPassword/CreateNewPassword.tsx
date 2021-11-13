import React from 'react';
import s from './CreateNewPassword.module.css'
import {Button, Card, Input} from 'antd';
import {NavLink} from "react-router-dom";
import {useFormik} from "formik";

const CreateNewPassword = () => {

    const formik = useFormik({
        initialValues: {
            password: '',
        },
        onSubmit: values => {

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
                    textAlign: 'center',
                }}
            >
                <h2>IT-Incubator</h2>
                <p>Create new password</p>
                <form onSubmit={formik.handleSubmit} className={s.form}>
                    <Input.Password
                        placeholder={'Password'}
                        name={'password'}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    <p>Create new password and we will send you further instructions to email</p>
                    <Button
                        shape={'round'}
                        type={'primary'}
                        htmlType={'submit'}
                    >Create new password
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default CreateNewPassword;