'use client'



import {  Layout } from 'antd';





import Profile from '../components/lead/Profile';
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
        <Profile />

        <MyFooter/>
      </Layout>

      
    </Layout>
  );
};
export default App;