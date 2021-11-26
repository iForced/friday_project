import React, {useEffect} from 'react';
import s from './Registration.module.css';
import {Button, Card, Input, notification, Spin} from 'antd';
import {NavLink, useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import {FormikErrorType} from "../../store/registration/regTypes";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchRegError, sendRegPayload} from "../../store/registration/regActions";


const Registration = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {error, isReg, isFetching} = useTypedSelector(state => state.registration)

    const onErrorNotification = () => {
        notification.error({
            message: 'Error',
            description: error,
            placement: 'topLeft',
            top: 55,
        });
    }

    useEffect(() => {
        if (isReg) {
            navigate('/login')
        }
    }, [isReg])

    useEffect(()=> {
        if (error) {
            onErrorNotification()
            dispatch(fetchRegError(error))
        }
    }, [error])

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            password2: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Login is required!';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Incorrect email';
            }
            if (!values.password) {
                errors.password = 'Password is required!';
            } else if (values.password.length < 7) {
                errors.password = 'Password at least 7 characters';
            }
            if (values.password !== values.password2) {
                errors.password = 'Password mismatch'
            }
            return errors;
        },

        onSubmit: values => {
            dispatch(sendRegPayload({email: values.email, password: values.password}))
            formik.resetForm()
        },
    })

    return (
        <div className={s.wrapper}>
            <Spin spinning={isFetching}>
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
                    <p>Sign Up</p>
                    <form onSubmit={formik.handleSubmit} className={s.form}>
                        <Input
                            placeholder={'Email'}
                            name={'email'}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.email && formik.errors.email &&
                        <div style={{color: 'red'}}>{formik.errors.email}</div>}
                        {/*   1   */}
                        <Input
                            placeholder={'Password'}
                            name={'password'}
                            type={'password'}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.password && formik.errors.password &&
                        <div style={{color: 'red'}}>{formik.errors.password}</div>}
                        {/*   2   */}
                        <Input
                            placeholder={'Password'}
                            name={'password2'}
                            type={"password"}
                            value={formik.values.password2}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.password2 && formik.errors.password2 &&
                        <div style={{color: 'red'}}>{formik.errors.password2}</div>}

                        <small>Enter your email address and your password for sign up</small>
                        <Button
                            shape={'round'}
                            type={'primary'}
                            htmlType={'submit'}
                        >Sign Up
                        </Button>
                    </form>

                    <p><NavLink to={'/login'}>Try logging in</NavLink></p>
                </Card>
            </Spin>
        </div>
    );
};

export default Registration;



