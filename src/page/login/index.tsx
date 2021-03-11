import React, {useState, useEffect, useCallback} from 'react';
import {Layout, Input, Button, Form, Spin, Checkbox, Row, Col, Card} from 'antd';
import {UserOutlined, LockOutlined, KeyOutlined} from '@ant-design/icons';

import {gql} from '@apollo/client';
import 'antd/dist/antd.css';
import './index.less'
import client from "../../graphql";


const {Content} = Layout;
const FormItem = Form.Item;


const Login: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function login() {
        setLoading(true)

        client
            .query({
                query: gql`
                  query GetRates {
                    rates(currency: "USD") {
                      currency
                    }
                  }
    `
            })
            .then(result => {
                    setLoading(false)
                    console.log(result)
                }
            );

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