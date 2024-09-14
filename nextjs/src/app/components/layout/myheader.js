'use client'

import React, { useState } from 'react';
import {
  
  UserOutlined,
  SearchOutlined,
  PlusCircleOutlined,
  LogoutOutlined,
  
} from '@ant-design/icons';


import { Breadcrumb, Layout, Menu, theme } from 'antd';

import { useRouter } from 'next/navigation';

import Profile from '../components/Profile';
import AddInjury from '../components/AddInjury';
import ViewInjury from './AllReports';

// import logo from 


const { Header, Content, Footer, Sider } = Layout;









const MyHeader = () => {
  







  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

 
  

  return (
   


      
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
            {/* <img src='' */}
        </Header>

      
  );
};
export default MyHeader;