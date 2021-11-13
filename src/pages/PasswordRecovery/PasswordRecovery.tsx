import React, {useEffect} from 'react';
import s from './PasswordRecovery.module.css'
import {Button, Card, Input} from 'antd';
import {NavLink, useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {sendEmailThunk} from "../../store/recovery_pass/actions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const PasswordRecovery = () => {

    const dispatch = useDispatch()
    const isEmailSent = useTypedSelector(state => state.recovery_pass_reducer.isEmailSent)
    const navigate = useNavigate()

    useEffect(() => {
        if (isEmailSent) {
            navigate('/checkemail')
        }
    }, [isEmailSent])

    const emailMessageForResetPass = `
        <div style="background-color: lime; padding: 15px">
        password recovery link:
        <a href='https://iforced.github.io/friday_project/#/createnewpassword/$token$'>link</a></div>
    `

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            dispatch(sendEmailThunk({
                email: values.email,
                from: 'Ilya',
                message: emailMessageForResetPass,
            }))
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