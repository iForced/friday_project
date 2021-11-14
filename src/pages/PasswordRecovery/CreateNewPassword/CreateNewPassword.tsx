import React, {useEffect} from 'react';
import s from './CreateNewPassword.module.css'
import {Button, Card, Input, Spin} from 'antd';
import {useFormik} from "formik";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setNewPasswordThunk} from "../../../store/recovery_pass/actions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

const CreateNewPassword = () => {

    const dispatch = useDispatch()
    const {token} = useParams();
    const navigate = useNavigate()
    const isNewPasswordSent = useTypedSelector(state => state.recovery_pass_reducer.isNewPasswordSent)
    const isFetching = useTypedSelector(state => state.recovery_pass_reducer.isFetching)

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
        }
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
            </Spin>
        </div>
    );
};

export default CreateNewPassword;