'use client'


import React, { useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import axios from 'axios';
import ReportDetails from './ReportDetails';


import { useRouter } from 'next/navigation';


// let data = [];

export default function AllReports(){

  const router = useRouter();

    const [req, setReq] = React.useState({method: "none"});
    const [data,setData] = React.useState([]);

  
    const columns = [
      {
        title: 'Reporter',
        dataIndex: 'reporter',
        key: 'reporter',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Admin',
        dataIndex: 'admin',
        key: 'admin',
      },
      {
        title: 'Date of injury',
        dataIndex: 'date1',
        key: 'date1',
      },
      {
        title: 'Date of report',
        key: 'date2',
        dataIndex: 'date2',
        
      },
      {
        title: 'Action',
        key: 'action',
        render: (_) => 
    
            <Tag color="green" key="view" className='cursor-pointer' onClick={() =>{router.push(`/viewreports/detailed?reportId=${_.key}`)}}>
                  View More
                </Tag>
        
        ,
      },
    ];
    console.log(req);

    useEffect(() => {
        axios.post('/api/db/getreport',req).then((response) => {

        
            // console.log(response.data);

           let temp = [];
        let num = 1;

        response.data.map(row => {

            const {id,reporterEmail, adminEmail, injuryTime, createdAt} = row;
                temp.push({
                    key: id,
                    reporter: reporterEmail,
                    admin: adminEmail,
                    date1: injuryTime,
                    date2: createdAt,
                });
                // console.log(row.reporterEmail, adminEmail, injuryTime, createdAt);
                num = num+1;
            })

            setData(temp);

            // console.log(row);
        }).catch((error) => {
            console.log(error);
        });

        
        // console.log(data);
    },req,[]);


    
    return(

        <div>   
            <div className='mt-10 mx-5'>

                <div className='mb-5'>
                    Sort by date  Sort by date   Sort by date 
                </div>
                
                <div>

                <Table columns={columns} dataSource={data} />;
                </div>

            </div>
                
        </div>
    )
};