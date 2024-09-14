'use client'



import {  Layout } from 'antd';





import Profile from '../components/Profile';
import MySider from '../components/mysider';
import MyFooter from '../components/MyFooter';







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