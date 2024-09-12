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



import Profile from './components/Profile';
import AddInjury from './components/AddInjury';
import ViewInjury from './components/ViewInjury';


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
  


  // let items = [];

  
  const items = [
    getItem('Add new injury', '1', <PlusCircleOutlined />),
    getItem('View added injuries', '2', <SearchOutlined />),
    // getItem('User', 'sub1', <UserOutlined />, [
    //   getItem('Tom', '3'),
    //   getItem('Bill', '4'),
    //   getItem('Alex', '5'),
    // ]),
    // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Profile', '3', <UserOutlined />),
    getItem('Logout', '4', <LogoutOutlined />),
  ];
// }

  


  const [collapsed, setCollapsed] = useState(false);
  const[currpage, setCurrPage] = useState(1);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  function ChangeContent(e) {

    console.log("hi");
    // alert(e.key);
    setCurrPage(e.key);
    console.log(currpage);
    
    
  }

  

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >

      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        
        <div className="text-white" >
           Abhishek 
           
           </div>

        <Menu theme="dark" defaultSelectedKeys={['1']} onClick={e => ChangeContent(e)} mode="inline" items={items} >
          {/* <div onClick={(e) => ChangeContent(e)}  className='w-full'/> */}
        </Menu>

      </Sider>


      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
      
        </Header>

       {/* <Profile/> */}
       {/* <AddInjury/> */}

       <ViewInjury/>

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