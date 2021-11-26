import React, {useEffect} from 'react';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import {fetchLogError, login} from '../../store/loginization/loginActions';
import {Navigate, NavLink, useNavigate} from 'react-router-dom';
import {Button, Card, Checkbox, Input, notification} from 'antd';
import s from './Login.module.css';
import {FormikErrorType} from "../../store/loginization/loginTypes";
import {useTypedSelector} from "../../hooks/useTypedSelector";


const Login = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useTypedSelector(state => state.login.isLoggedIn)
    const error = useTypedSelector(state => state.login.error)
    const navigate = useNavigate()


    const onErrorNotification = () => {
        notification.error({
            message: 'Error',
            description: error,
            placement: 'topLeft',
            top: 55,
        });
    }

    useEffect(() => {
        if (error) {
            onErrorNotification()
            dispatch(fetchLogError(error))
        }
    }, [error])

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/profile')
        }
    }, [isLoggedIn])

    const formik = useFormik({
        initialValues: {
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

            dispatch(login(values))
            formik.resetForm()
        },
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
                <form onSubmit={formik.handleSubmit} className={s.form}>
                    <Input
                        placeholder={'Email'}
                        name={'email'}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                        {formik.errors.email ? <div className={s.email}>{formik.errors.email}</div> : null}
                    <Input
                        placeholder={'password'}
                        name={'password'}
                        type={'password'}
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