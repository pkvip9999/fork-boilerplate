import React from 'react';
import { Button, Affix } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div
      className="flex flex-col justify-end w-full"
      style={{
        height: '1300px',
      }}
    >
      <div className="flex w-full">
        <Affix bottom={100}>
          <Button className="mr-10">Bottom 100px</Button>
        </Affix>
        <div className="flex-1">
          <Button>Button Right</Button>
        </div>
      </div>
      <div style={{ height: '300px' }} className="w-full" />
    </div>
  );
};

export default Demo;
Demo.header = 'Bottom';
Demo.href = 'affix-bottom';

Demo.code = `import React from 'react';
import { Button, Affix } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <div
      className="flex flex-col justify-end w-full"
      style={{
        height: '1300px',
      }}
    >
      <div className="flex w-full">
        <Affix bottom={100}>
          <Button className="mr-10">Bottom 100px</Button>
        </Affix>
        <div className="flex-1">
          <Button>Button Right</Button>
        </div>
      </div>
      <div style={{ height: '300px' }} className="w-full" />
    </div>
  );
};

export default Demo;
`;
