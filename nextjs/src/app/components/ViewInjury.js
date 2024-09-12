import React, { useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import axios from 'axios';
import ReportDetails from './ReportDetails';


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

        <Tag color="green" key="view" onClick={() =>{}}>
              {_.key}
            </Tag>
    
    ,
  },
];
// let data = [];

export default function ViewInjury(){

    const [req, setReq] = React.useState({method: "none"});
    const [data,setData] = React.useState([]);

    const [reportId,setReportId] = React.useState("66e28930bb0d45ac972a0567");

    if(reportId != ""){
        return <ReportDetails reportId={reportId}/>
    }

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

        
        console.log(data);
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