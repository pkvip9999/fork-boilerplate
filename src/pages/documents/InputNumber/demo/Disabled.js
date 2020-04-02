import React from 'react';
import { InputNumber } from 'rc-neumorphism';

const Demo = () => {
  return (
    <InputNumber
      disabled
      defaultValue={10}
      placeholder="The placeholder"
    />
  );
};

Demo.code = `
import React from 'react';
import { InputNumber } from '@/components/core';

export default () => {
  return (
    <InputNumber
      disabled
      defaultValue={10}
      placeholder="The placeholder"
    />
  );
};
`;

export default Demo;
