import React from 'react';
import { Password } from '@/components';

const Demo = () => {
  return (
    <Password
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;
