import React, {useEffect} from 'react';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {loginTC} from '../../store/loginization/loginActions';
import {Navigate, NavLink} from 'react-router-dom';
import {Button, Card, Checkbox, Input, message, notification} from 'antd';
import s from './Login.module.css';
import {AppRootStateType} from '../../store/store';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {setError} from '../../store/recoveryPass/actions';
import {RequestStatusType} from '../../store/loginization/types';


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

const Login = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.login.status)
    const error = useTypedSelector(state => state.recoveryPass.error)

    const onErrorNotification = (message: string) => {
        notification.error({
            message: message,
            placement: 'topLeft',
            top: 55,
        });
    }
    useEffect(() => {
        if (error) {
            onErrorNotification(error)
            dispatch(setError(''))
        }
    }, [error])

    const formik = useFormik({
        initialValues: {
            /*      email: 'nya-admin@nya.nya',
                  password: '1qazxcvBG',*/
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Email is required';
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
        return <Navigate to="/profile" replace/>;
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
                {status === 'loading' && <span style={{color: 'blue'}}>Loading...</span>}
                <h2>IT-Incubator</h2>
                <form onSubmit={formik.handleSubmit} className={s.form}>
                    <Input
                        placeholder={'Email'}
                        name={'email'}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email ? <div className={s.email}>{formik.errors.email}</div> : null}
                    <Input.Password
                        placeholder={'Password'}
                        name={'password'}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.password ? <div className={s.password}>{formik.errors.password}</div> : null}
                    <label>
                        <Checkbox
                            {...formik.getFieldProps('rememberMe')}
                            checked={formik.values.rememberMe}
                        />

                        <span> remember me</span>
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