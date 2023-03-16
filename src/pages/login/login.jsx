import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Form, Input, message} from 'antd';
import {Navigate, useNavigate} from 'react-router-dom'
import React from "react";

import {reqLogin} from '../../api'

import './login.css'
import storeUtil from "../../utils/storageUtiles";
import memoryUtil from "../../utils/memoryUtils";


/*
* Login route components
* */
const Login = () => {
    const navigate = useNavigate()
    const formRef = React.useRef()
    if (memoryUtil.user && memoryUtil.user.id) {

        return (
            <Navigate to="/" replace={true}/>
        )
    }

    const onFinish = async values => {
        const {username, password} = values

        const response = await reqLogin(username, password)
        if (response.code === 0) {
            message.success('Login success!')
            //
            console.log(response)
            memoryUtil.user = response.loginUser
            storeUtil.saveUser(response.loginUser)

            navigate("/", {replace: true})

        } else {
            message.error(response.msg)
        }



    }
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo)
    }
    const validatePwd = async (_, value) => {
        const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{5,20}$/
        if (reg.test(value)) {
            return Promise.resolve()
        } else {
            return Promise.reject()
        }
    }
    return (
        <div className="login">
            <header className="login-header">
                <h1>RNEWS Administration</h1>
            </header>
            <section className="login-content">
                <h2>User Login</h2>
                <Form
                    ref={formRef}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true
                    }}
                >
                    <Form.Item
                        name="username"
                        validateFirst={true}
                        rules={[
                            {
                                required: true,
                                whitespace: true,
                                message: 'Please input your Username!',
                            },
                            {
                                type: "email",
                                message: 'Username should be a valid email address!'
                            },
                            {
                                max: 40,
                                message: 'Username max length is 40'
                            },
                            {
                                min: 7,
                                message: 'Username is too short!'
                            },
                        ]}
                    >
                        <Input
                            size="large"
                            prefix={
                                <UserOutlined
                                    className="site-form-item-icon"
                                    style={{color: 'rgba(0,0,0,.45)',}}
                                />
                            }
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        validateFirst={true}
                        rules={[
                            {
                                required: true,
                                whitespace: true,
                                message: 'Please input your Password!',
                            },
                            {
                                min: 5,
                                max: 20,
                                message: 'Password length is between 8 and 20',
                            },
                            {
                                validator: validatePwd,
                                message: 'Password should form with at lease 1 uppercase, 1 lowercase, 1 number and 1 special character',
                            },
                        ]}
                    >
                        <Input
                            size="large"
                            prefix={
                                <LockOutlined
                                    className="site-form-item-icon"
                                    style={{color: 'rgba(0,0,0,.45)',}}
                                />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button size='large' type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        </div>
    )
}
export default Login
