import React from 'react';
import { Alert, Flex, Spin } from 'antd';
const contentStyle = {
  padding: 50,
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 4,
};
const content = <div style={contentStyle} />;
const Loading = () => (
  <Flex gap="middle" vertical>
    
      
      
      <Spin tip="Loading" size="large">
        {content}
      </Spin>
    
    
  </Flex>
);
export default Loading;