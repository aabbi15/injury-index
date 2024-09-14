import React from 'react';
import { Card, Space, Input } from 'antd';
const { TextArea } = Input;

import { useEffect } from 'react';

export default function InjuryInputCard({ str, handleInputChange }) {

    if(!str) str = "body part";

    

    useEffect(() => {
        handleInputChange(str, "");
    }, []);
    
    const onChange = (e) => {
        handleInputChange(str, e.target.value);
    };

    return(
        <Space direction="vertical" size={8}>
            <Card
                size="small"
                title={str}
                style={{
                    width: 300,
                }}
            >
                <p className='pb-2'>Details of the injury</p>
                <TextArea 
                    showCount 
                    maxLength={100}  
                    placeholder="Enter here" 
                    className='mb-2'
                    onChange={onChange}
                />
            </Card>
        </Space>
    );
}
