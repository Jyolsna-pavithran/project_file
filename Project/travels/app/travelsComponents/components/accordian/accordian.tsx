'use client';

import React from 'react';
import { Collapse } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Accordian: React.FC = () => (
  <div style={{textAlign:"left", marginTop:"20px", marginLeft:"20px"}}>
  <Collapse
    expandIconPosition="end"
    expandIcon={({ isActive }) => (
      <CaretDownOutlined rotate={isActive ? 180 : 0} />
    )}
    items={[
      {
        key: '1',
        label: 'This is default size panel header',
        children: <p>{text}</p>,
      },
    ]}
  />
  </div>

);

export default Accordian;
