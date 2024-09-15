'use client'


import React, { useEffect } from 'react';
import {  Layout, Breadcrumb } from 'antd';
import axios from 'axios';
import ReportDetails from '@/app/components/lead/ReportDetails';
import MySider from '@/app/components/layout/mysider';

import { useSearchParams } from 'next/navigation'


const { Header, Content, Footer, Sider } = Layout;


export default function ViewInjury(){


   
  const searchParams = useSearchParams()
 
  const reportId = searchParams.get('reportId')
   


  //  console.log(reportId);


    
    return(

        <div>   
        
        <Layout
      style={{
        minHeight: '100vh',
      }}
    >

    <MySider/>

      <Layout>
       
      
      <Breadcrumb
          style={{
            margin: '16px 16px',
          }}
        >
          <Breadcrumb.Item>View Report</Breadcrumb.Item>
          <Breadcrumb.Item>Injury Details</Breadcrumb.Item>
        </Breadcrumb>

        <ReportDetails reportId={reportId}/>

        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Injury Index (Lief) ©2024 Created by Abhishek Abbi
        </Footer>
      </Layout>
    </Layout>
            
           
                
        </div>
    )
};