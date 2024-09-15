'use client'

import React, { useEffect, useState } from 'react';
import { Space, Table, Tag, Select, DatePicker, Input } from 'antd';
import axios from 'axios';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import Loading from '../support/Loading';

const { RangePicker } = DatePicker;

const rangePresets = [
  { label: 'Last 7 Days', value: [dayjs().add(-7, 'd'), dayjs()] },
  { label: 'Last 14 Days', value: [dayjs().add(-14, 'd'), dayjs()] },
  { label: 'Last 30 Days', value: [dayjs().add(-30, 'd'), dayjs()] },
  { label: 'Last 90 Days', value: [dayjs().add(-90, 'd'), dayjs()] },
];

const AllReports = () => {
  const [req, setReq] = useState({ method: 'none' });
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [reporterEmail, setReporterEmail] = useState('');
  const [dateRange, setDateRange] = useState([]);
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: 'Reporter',
      dataIndex: 'reporter',
      key: 'reporter',
      render: (text) => <a>{text}</a>,
    },
    { title: 'Admin', dataIndex: 'admin', key: 'admin' },
    { title: 'Date of injury', dataIndex: 'date1', key: 'date1' },
    { title: 'Date of report', key: 'date2', dataIndex: 'date2' },
    {
      title: 'Action',
      key: 'action',
      render: (_) => (
        <Tag
          color="green"
          key="view"
          className="cursor-pointer"
          onClick={() => {

            setLoading(true);
            router.push(`/viewreports/detailed?reportId=${_.key}`);
          }}
        >
          View More
        </Tag>
      ),
    },
  ];

  const options = [
    
    { value: 'reporter', label: 'Search by Reporter Email' },
    { value: 'oldestreport', label: 'Oldest Reports First' },
    { value: 'latestreport', label: 'Latest Reports First' },
    { value: 'oldestinjury', label: 'Oldest Injury Dates First' },
    { value: 'latestinjury', label: 'Latest Injury Dates First' },
    { value: 'daterange-report', label: 'Reports by Date Range' },
    { value: 'daterange-injury', label: 'Injuries by Date Range' },
    { value: 'admin', label: 'My Reports Only' },
    {value: 'none', label: 'None'}
  ];

  const handleChange = (value) => {
    setSelectedOption(value);

    let newReq = { method: value };

    if (value === 'reporter') {
      newReq = { ...newReq, reporterEmail };
    }
    
    else if (value === 'daterange-report' || value === 'daterange-injury') {
      if (dateRange.length === 2) {
        newReq = {
          ...newReq,
          startdate: dateRange[0].toISOString(),
          enddate: dateRange[1].toISOString(),
        };
      }
    }

    setReq(newReq);
  };


  const onRangeChange = (dates, dateStrings) => {
    setDateRange(dates);

    if (selectedOption === 'daterange-report' || selectedOption === 'daterange-injury') {
      setReq({
        method: selectedOption,
        startdate: dates[0].toISOString(),
        enddate: dates[1].toISOString(),
      });
    }
  };

  const onReporterEmailChange = (e) => {
    setReporterEmail(e.target.value);

    if (selectedOption === 'reporter') {
      setReq({ method: 'reporter', reporterEmail: e.target.value });
    }
  };

  useEffect(() => {
    // if (req.method !== 'none') {

    setLoading(true);
      axios.post('/api/db/getreport', req).then((response) => {
        const temp = response.data.map((row, index) => ({
          key: row.id,
          reporter: row.reporterEmail,
          admin: row.adminEmail,
          date1: row.injuryTime,
          date2: row.createdAt,
        }));
        setData(temp);
        setLoading(false);
      }).catch((error) => {
        console.error(error);
      });
    // }

    
  }, [req],[]);


  if(loading) {return <Loading/>}

  return (
    <div>
      <div className='mt-10 mx-5'>
        <div className='mb-5 flex gap-5'>
          <Select
            defaultValue="Filter"
            style={{ width: 200 }}
            onChange={handleChange}
            options={options}
          />

          {selectedOption === 'daterange-report' || selectedOption === 'daterange-injury' ? (
            <RangePicker needConfirm presets={rangePresets} onChange={onRangeChange} />
          ) : null}

          {selectedOption === 'reporter' ? (
            <Input
              placeholder="Enter Reporter Email"
              className='w-48'
              onChange={onReporterEmailChange}
            />
          ) : null}
        </div>

        <div>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
};

export default AllReports;
