import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Axios from "axios";
import "../../styles/login.scss";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const SignIn = () => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    const onFinish = (values) => {
        const username = values.username;
        const password = values.password;
        // console.log('Success:', values);
        Axios.post("http://localhost:3200/api/login", {
            user_name: username, password: password
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message)
            } else {
                setLoginStatus("Success");
                window.location.href = "http://localhost:3000/dashboard"
            }
        })

    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login">
            <div className="container-login">
                <img src="/image.svg" alt="" className="img" />
                <div className="login-right">

                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }
                        }
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        className="login-form"
                    >
                        <h2 className="title-login">Sign In</h2>
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
        </Button>
                            <h3>{loginStatus}</h3>
                        </Form.Item>
                    </Form >
                </div>
            </div>
        </div >
    )
}

export default SignIn;
