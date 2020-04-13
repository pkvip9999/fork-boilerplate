import React from 'react';
import { Switch } from '@/components';

const Demo = () => {
  return (
    <div className="flex">
      <Switch className="mr-5" />
      <Switch defaultChecked className="mr-5" />
      <Switch disabled className="mr-5" />
      <Switch disabled defaultChecked className="mr-5" />
    </div>
  );
};

export default Demo;

Demo.header = 'UNCONTROLLED';
Demo.href = 'switch-uncontrolled';
Demo.code = `import React from 'react';
import { Switch } from '@/components';

const Demo = () => {
  return (
    <div className="flex">
      <Switch className="mr-5" />
      <Switch defaultChecked className="mr-5" />
      <Switch disabled className="mr-5" />
      <Switch disabled defaultChecked className="mr-5" />
    </div>
  );
};

export default Demo;
`;
