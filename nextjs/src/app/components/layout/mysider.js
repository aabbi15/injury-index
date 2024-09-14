'use client'

import React, { useState } from 'react';
import {
  
  UserOutlined,
  SearchOutlined,
  PlusCircleOutlined,
  LogoutOutlined,
  
} from '@ant-design/icons';

import { Button, Modal } from 'antd';

import { useAuth0 } from "@auth0/nextjs-auth0";



import { Breadcrumb, Layout, Menu, theme } from 'antd';

import { useRouter } from 'next/navigation';

import Profile from '../components/Profile';
import AddInjury from '../lead/AddReport';
import ViewInjury from '../AllReports';

import mylogo from '../../../public/lief-main-logo.svg';
import Image from 'next/image';


const { Header, Content, Footer, Sider } = Layout;


const LogoutModal = () => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    const { logout } = useAuth0();



    const showModal = () => {
      setOpen(true);
    };
    const handleOk = () => {
      
      setConfirmLoading(true);
        
        logout({ logoutParams: { returnTo: "http://localhost:3000/login" } });
        setOpen(false);
        setConfirmLoading(false);
    
    };
    const handleCancel = () => {
      console.log('Clicked cancel button');
      setOpen(false);
    };
    return (
      <>
        <Button type="primary" onClick={showModal}>
          Open Modal with async logic
        </Button>
        <Modal
          title="Title"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <p>{modalText}</p>
        </Modal>
      </>
    );
  };

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}







const MySider = () => {
  
    // const { logout } = useAuth0();


    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);


    const showModal = () => {
        setOpen(true);
      };
      const handleOk = () => {
      
        setConfirmLoading(true);
          
        // logout({ logoutParams: { returnTo: "http://localhost:3000/login" } });
          window.location.href = '/api/auth/logout';
          setOpen(false);
          setConfirmLoading(false);
      
      };
      const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
      };

  
  const items = [
    getItem('Add new report', 'addreport', <PlusCircleOutlined />),
    getItem('View reports', 'viewreports', <SearchOutlined />),
   
    getItem('Profile', 'profile', <UserOutlined />),
    getItem('Logout', 'logout', <LogoutOutlined />),
  ];


  


  const [collapsed, setCollapsed] = useState(false);
  const[currpage, setCurrPage] = useState(1);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  function ChangeContent(e) {

    // console.log("hi");
    
    if(e.key === 'logout'){
        showModal();
        return;
    }
    
    setCurrPage(e.key);

    router.push(`/${e.key}`);
    // console.log(currpage);
    
    
  }

  

  return (
    

    // <div>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        
        <div className="text-white" >
           
           <Image src={mylogo} className='py-5  pl-7' alt="Logo" width={120} height={30}  /> 
           
           </div>

        <Menu theme="dark" defaultSelectedKeys={['1']} onClick={e => ChangeContent(e)} mode="inline" items={items} >
          
        </Menu>
         <Modal
          title="Title"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <p>Are you sure you want to logout?</p>
        </Modal>

      </Sider>

     

      


     
      
     
    
  );
};
export default MySider;