'use client'

import React from 'react';



import {  Layout  } from 'antd';


import AddReport from '../components/lead/AddReport';
import MySider from '../components/layout/mysider';
import MyFooter from '../components/layout/MyFooter';








const App = () => {

return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >

      <MySider />

      <Layout>
        <AddReport />
        <MyFooter />
      </Layout>

    </Layout>
  );
};
export default App;