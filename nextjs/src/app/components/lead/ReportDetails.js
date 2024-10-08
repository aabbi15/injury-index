import React, { useEffect } from 'react';
import { Card, Col, Breadcrumb } from 'antd';
import { Button, Flex } from 'antd';

import { Descriptions } from 'antd';
import axios from 'axios';
import Loading from '../support/Loading';
import { useRouter } from 'next/navigation';




const ReportDetails = ({reportId}) => {


  // console.log(reportId,"from fxn");

  const router = useRouter();

  const [mydata,setData] = React.useState({adminName:"", reporterName:"", reporterEmail:"", adminEmail:"", injuryTime:"", createdAt:"",injuries:[]});
  const[loading,setLoading] = React.useState(true);

  

  useEffect(() => {
    axios.post('/api/db/reportdetails',{reportId}).then((response) => {

      if(response.data.error){
        alert(response.data.error);
        return;
      }
      // console.log(response.data);

      setData(response.data);
      setLoading(false);
      // console.log(mydata);

    }).catch((error) => {
      console.log(error);
    });
  }



  ,[]);

  function RenderCards(){

    let returner = [];

    mydata.injuries.map((injury) => {
      // console.log(injury);
      returner.push(
        
        <Card title={injury.bodyPart} bordered={false}>
        {injury.details}
      </Card>
      )
    })
      return returner;
  }

  function readable(isoDate) {
    const date = new Date(isoDate);
  
    // const readableDate = date.toLocaleDateString(); // "9/15/2024" (US format)
    const readableDateTime = date.toLocaleString(); // "9/15/2024, 4:
  
    return readableDateTime;
  }

  const items = [
    {
      key: '1',
      label: 'Admin Email',
      children: mydata.adminEmail,
    },
    
    {
      key: '3',
      label: 'Reporter Email',
      children: mydata.reporterEmail,
    },
    {
      key: '4',
      label: 'Reporter Name',
      children: mydata.reporterName,
    },
    {
      key: '5',
      label: 'Date of Injury',
      children: readable(mydata.injuryTime),
    },
  
    {
      key: '6',
      label: 'Date of Report',
      children: readable(mydata.createdAt),
    },
  ];
  

  async function onDelete(){
    setLoading(true);
    axios.post('/api/db/deletereport',{reportId}).then((response) => {

      if(response.data.error){
        alert(response.data.error);
        return;
      }
      // console.log(response.data);
      setLoading(false);
      alert("Report deleted successfully");
      router.back();
    }).catch((error) => {
      console.log(error);
    });
  }
 
  if(loading){return <Loading/>}

  return(

    <div className='mt-10 mx-5'>


      <div>
      <Descriptions bordered labelStyle={{"fontWeight":"700"}} title="Report Info" items={items} />;
      </div>

      <div>

        <div className='font-bold text-lg'> Specific Body part details</div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>



       {mydata && <RenderCards/> }

        </div>
      </div>

      <div className='flex justify-center items-center gap-10 my-5'>
      <Button type="primary" onClick={() => router.back()}>Go back</Button>
      <Button danger onClick={onDelete}>
        Delete Report
      </Button>
      </div>
     
    </div>
  
  )
 
};
export default ReportDetails;