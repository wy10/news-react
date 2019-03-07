import React, { Component } from 'react';
import { Col, Row, Button, Menu, Icon,Tabs,message } from 'antd';
import logo from './assets/logo.jpg';
import MyModal from './../Components/MyModal';
import {MyFetch} from './../utils';
import MyForm from '../Components/MyForm';

const MenuItem = Menu.Item;
const TabPane = Tabs.TabPane;
const menuArr = [
    { type: 'appstore', title: '头条' },
    { type: 'shehui', title: '社会' },
    { type: 'guonei', title: '国内' },
    { type: 'guoji', title: '国际' },
    { type: 'yule', title: '娱乐' },
    { type: 'tiyu', title: '体育' },
    { type: 'keji', title: '科技' },
    { type: 'shishang', title: '时尚' },
]

export default class Header extends Component {

    constructor(props){
        super(props);
        this.state={
            isLogin:false,
            registerFieldArr:[
                {
                    label: '姓名',
                    field: 'r_username',
                },
                {
                    label: '密码',
                    field: 'r_password',
                    type:'password'
                },
                {
                    label: '确认密码',
                    field: 'r_confirmPassword',
                    type:'password'
                }
            ],
            loginFieldArr:[
                {
                    label: '姓名',
                    field: 'r_username',
                },
                {
                    label: '密码',
                    field: 'r_password',
                    type:'password'
                }
            ]
        }
    }

    showModal=()=>{
        this.refs.MyModal.showModal();
    }

    //提交注册
    registerSubmit = (params) =>{

        MyFetch(`/Handler.ashx?action=register&username=userName&password=password&r_userName=${params.r_username}&r_password=${params.r_password}&r_confirmPassword=${params.r_password}`).then((res=>{
            message.success("请求成功");
            this.refs.MyModal.hideModal();
        }))
    }
    render() {
        return (
            <div>
            <Row style={{display:'flex',alignItems:'flex-end'}}>
                <Col xs={6}>
                    <img src={logo} width={200}></img>
                </Col>
                <Col xs={12}>
                    <Menu mode="horizontal">
                        {
                            menuArr.map(item => {
                                return (
                                    <MenuItem key={item.key}>
                                        <Icon type="appstore" />{item.title}
                                    </MenuItem>
                                )

                            })
                        }

                    </Menu>

                </Col>
                <Col xs={2}></Col>
                <Col xs={2} onClick={this.showModal}>
                    <Button type="primary">用户中心</Button>
                </Col>
            </Row>
                <MyModal title="用户中心" ref="MyModal">
                    <Tabs>
                        <TabPane tab="登录" key="1">
                            <MyForm fieldArr={this.state.loginFieldArr}></MyForm>
                        </TabPane>
                        <TabPane tab="注册" key="2">
                            <MyForm fieldArr={this.state.registerFieldArr} handleSubmit = {this.registerSubmit}></MyForm>
                        </TabPane>
                    </Tabs>
                </MyModal>
            </div>
        )
    }
}