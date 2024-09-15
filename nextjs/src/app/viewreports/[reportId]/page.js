'use client'


import React, { useEffect } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import axios from 'axios';
import ReportDetails from '@/app/components/lead/ReportDetails';
import MySider from '@/app/components/layout/mysider';
// import MyHeader from '@/app/components/myheader';

// import { useRouter } from 'next/navigation';

// import { usePathname } from 'next/navigation';


const { Header, Content, Footer, Sider } = Layout;


export default function ViewInjury({searchParams}){


    // const router = useRouter();

    // const pathname = usePathname();
    
    // console.log(searchParams);

    const reportId = searchParams.reportId;


    const [req, setReq] = React.useState({method: "none"});
    const [data,setData] = React.useState([]);

    

    const eg = "66e28930bb0d45ac972a0567";

   
    console.log(req);



    
    return(

        <div>   
        
        <Layout
      style={{
        minHeight: '100vh',
      }}
    >

    <MySider/>

      <Layout>
        {/* <MyHeader/> */}
      
        

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