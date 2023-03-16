import {Navigate, Routes, Route} from 'react-router-dom'


import memoryUtils from "../../utils/memoryUtils";
import React from "react";
import {Layout} from 'antd';

import LeftNav from '../../components/left-nav'
import Header from '../../components/header'
import Home from "../home/home";
import News from "../news/news";
import Role from "../role/role";
import Category from "../category/category";
import User from "../user/user";
import Bar from "../charts/Bar";
import Line from "../charts/Line"
import Pie from "../charts/Pie";

const {Footer, Sider, Content} = Layout;

const contentStyle = {

    minHeight: 120,
    // lineHeight: '120px',
    color: '#000',
    backgroundColor: '#fff',
};
const siderStyle = {
    // textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
};
const footerStyle = {
    textAlign: 'center',
    color: '#cccccc',
    backgroundColor: '#7dbcea',
};

/*
* Admin route components
* */
const Admin = () => {
    const user = memoryUtils.user
    if (!user || !user.id) {
        return (
            <Navigate to="/login" replace={true}/>
        )
    }
    return (
        <Layout style={{height: '100%'}}>
            <Sider style={siderStyle}>
                <LeftNav/>
            </Sider>
            <Layout>
                <Header/>
                <Content style={contentStyle}>
                    <Routes>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/category" element={<Category/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/user" element={<User/>}/>
                        <Route path="/role" element={<Role/>}/>
                        <Route path="/charts/bar" element={<Bar/>}/>
                        <Route path="/charts/line" element={<Line/>}/>
                        <Route path="/charts/pie" element={<Pie/>}/>
                        <Route path="/*" element={<Home/>}/>
                    </Routes>
                </Content>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </Layout>
    )
}
export default Admin
