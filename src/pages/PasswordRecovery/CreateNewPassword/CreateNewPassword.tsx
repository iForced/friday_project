import React, {useEffect} from 'react';
import s from './CreateNewPassword.module.css'
import {Button, Card, Input, Spin} from 'antd';
import {useFormik} from "formik";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setNewPasswordThunk} from "../../../store/recoveryPass/actions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {FormikErrorType} from "../../../store/registration/regTypes";

const CreateNewPassword = () => {

    const dispatch = useDispatch()
    const {token} = useParams();
    const navigate = useNavigate()
    const isNewPasswordSent = useTypedSelector(state => state.recoveryPass.isNewPasswordSent)
    const isFetching = useTypedSelector(state => state.recoveryPass.isFetching)

    useEffect(() => {
        if (isNewPasswordSent) {
            navigate('/login')
        }
    }, [isNewPasswordSent])

    const formik = useFormik({
        initialValues: {
            password: '',
        },
        onSubmit: values => {
            dispatch(setNewPasswordThunk({
                password: values.password,
                resetPasswordToken: token,
            }))
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.password) {
                errors.password = 'Password is required!';
            } else if (values.password.length < 7) {
                errors.password = 'Password at least 7 characters';
            }
            return errors;
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
                        textAlign: 'center',
                    }}
                >
                    <h2>IT-Incubator</h2>
                    <p>Create new password</p>
                    <form onSubmit={formik.handleSubmit} className={s.form}>
                        <Input.Password
                            placeholder={'Password'}
                            {...formik.getFieldProps('password')}
                        />
                        <div className={s.errorText}>{formik.touched.password && formik.errors.password && formik.errors.password}</div>
                        <p>Create new password and we will send you further instructions to email</p>
                        <Button
                            shape={'round'}
                            type={'primary'}
                            htmlType={'submit'}
                        >Create new password
                        </Button>
                    </form>
                </Card>
            </Spin>
        </div>
    );
};

export default CreateNewPassword;