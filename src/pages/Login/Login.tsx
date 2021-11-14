import React from 'react';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {loginTC} from '../../store/loginization/loginThunk';
import {Navigate, NavLink} from 'react-router-dom';
import {Button, Card, Input} from 'antd';
import s from '../PasswordRecovery/PasswordRecovery.module.css';
import SuperCheckbox from '../../components/SuperCheckbox/SuperCheckbox';
import {AppRootStateType} from '../../store/store';



type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

const Login = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const formik = useFormik({
        initialValues: {
            email: 'nya-admin@nya.nya',
            password: '1qazxcvBG',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            }
            if (!values.password) {
                errors.password = 'Field is required';
            } else if (values.password.length < 3) {
                errors.password = 'Must be 3 characters or less';
            }
            return errors;
        },
        onSubmit: values => {

            dispatch(loginTC(values))
            formik.resetForm()
        },
    })
     if (isLoggedIn) {
         return  <Navigate to="/profile" replace />;
     }


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
                <form onSubmit={formik.handleSubmit} className={s.form}>
                    <span> Enter your email: <Input
                        placeholder={'Email'}
                        name={'email'}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    </span>
                   <span>Enter your password: <Input
                       placeholder={'password'}
                       name={'password'}
                       value={formik.values.password}
                       onChange={formik.handleChange}
                   /></span>
                    <label>
                        <SuperCheckbox type={"checkbox"} />
                        remember me
                    </label>
                    <Button
                        shape={'round'}
                        type={'primary'}
                        htmlType={'submit'}
                    >Login
                    </Button>
                </form>
                <p>If you have forgotten your password, you can recover it </p>
                <p><NavLink to={'/recoverypassword'}>Recover password</NavLink></p>
            </Card>
        </div>
    );
}

export default Login;