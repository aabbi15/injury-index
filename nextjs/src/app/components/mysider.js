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

import mylogo from '../../../public/lief-main-logo.svg';
import Image from 'next/image';


const { Header, Content, Footer, Sider } = Layout;


function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}







const MySider = () => {
  


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
    

      <Sider sticky collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        
        <div className="text-white" >
           
           <Image src={mylogo} className='pt-2 pl-7' alt="Logo" width={120} height={30}  /> 
           
           </div>

        <Menu theme="dark" defaultSelectedKeys={['1']} onClick={e => ChangeContent(e)} mode="inline" items={items} >
          
        </Menu>

      </Sider>


     
      
     
    
  );
};
export default MySider;