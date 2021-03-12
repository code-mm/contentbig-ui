import React, {useState, useEffect, useCallback} from 'react';
import {Layout, Input, Button, Form, Spin, message, Checkbox, Row, Col, Card} from 'antd';
import {UserOutlined, LockOutlined, KeyOutlined} from '@ant-design/icons';

import {FetchResult, gql} from '@apollo/client';
import 'antd/dist/antd.css';
import './index.less'
import client from "../../config/graphql";
import CONST from "../../config/constant"
import {Route} from "react-router-dom";


import { useHistory } from 'react-router'



const Login: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const history = useHistory();
    function login() {


        if (username === null || username === undefined || "" === username) {
            message.error('用户名不能为空')
            return
        }
        if (password === null || password === undefined || "" === password) {
            message.error('密码不能为空')
            return
        }

        setLoading(true)

        client.mutate({
            mutation: gql`mutation {
              login(input: { username: "${username}", password: "${password}" }) {
                token
              }
            }
`,
            errorPolicy: 'all'
        }).catch(err => {
            message.error(err);
            setLoading(false)
        })
            .then((result: any) => {
                localStorage.setItem(CONST.TOKEN_LOCALSTORAGE_KEY, result.data.login.token);
                message.success("登录成功")
                history.replace('/event')
                setLoading(false)
            });

    }

    return <>
        <div className="login-div">
            <Spin tip="加载中..." spinning={loading}>
                <Card title="后台管理系统" bordered={true} style={{width: 400}}>
                    <Input
                        id="userName"
                        size="large"
                        placeholder="请输入用户名"
                        prefix={<UserOutlined/>}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                    />
                    <br/><br/>
                    <Input.Password
                        id="password"
                        size="large"
                        placeholder="请输入密码"
                        prefix={<LockOutlined/>}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                    <br/><br/>
                    <Button type="primary" size="large" block onClick={login}> 登录 </Button>
                </Card>
            </Spin>
        </div>
    </>
}

export default Login