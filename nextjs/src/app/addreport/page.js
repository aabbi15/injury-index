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
import ViewInjury from '../components/AllReports';
import MySider from '../components/mysider';


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
  


    const router = useRouter();

  
  const items = [
    getItem('Add new report', 'addreport', <PlusCircleOutlined />),
    getItem('View reports', 'viewreports', <SearchOutlined />),
   
    getItem('Profile', 'profile', <UserOutlined />),
    getItem('Logout', '4', <LogoutOutlined />),
  ];


  


  const [collapsed, setCollapsed] = useState(false);
  const[currpage, setCurrPage] = useState(1);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  function ChangeContent(e) {

    // console.log("hi");
    
    
    setCurrPage(e.key);
    router.push(`/${e.key}`);
    // console.log(currpage);
    
    
  }

  

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >

      <MySider/>


      <Layout>
      

       {/* <Profile/> */}
       <AddInjury/>

       {/* <ViewInjury/> */}

        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Injury Index (Lief) ©2024 Created by Abhishek Abbi
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;