import React from 'react';
import { InputNumber } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <InputNumber
      min={5}
      max={10}
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;
Demo.header = 'Min And Max';
Demo.href = 'inputnumber-min-and-max';

Demo.code = `import React from 'react';
import { InputNumber } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <InputNumber
      min={5}
      max={10}
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

export default Demo;
`;
