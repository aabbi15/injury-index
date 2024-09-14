'use client'

import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  SearchOutlined,
  PlusCircleOutlined,
  LogoutOutlined,
  
} from '@ant-design/icons';


import { Breadcrumb, Layout, Menu, theme } from 'antd';


import { useUser } from '@auth0/nextjs-auth0/client';

const { Header, Content, Footer, Sider } = Layout;


function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}



const App = () => {
  const { user, error, isLoading } = useUser();


  let items = [];

  if(user){
  items = [
    getItem('Add new injury', '1', <PlusCircleOutlined />),
    getItem('Search injuries', '2', <SearchOutlined />),
    // getItem('User', 'sub1', <UserOutlined />, [
    //   getItem('Tom', '3'),
    //   getItem('Bill', '4'),
    //   getItem('Alex', '5'),
    // ]),
    // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Profile', '9', <UserOutlined />),
    getItem('Logout', '9', <LogoutOutlined />),
  ];
}

  


  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
       
          
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;