import React from 'react';
import { Menu } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <Menu
      multiple
      onSelectedKeysChange={keys => console.log(keys)}
    >
      <Menu.Item key="option-1" title="Option One" />
      <Menu.Item key="option-2" title="Option Two" />
      <Menu.Item key="option-3" title="Option Three" />
      <Menu.Item key="option-4" title="Option Four" />
    </Menu>
  );
};

export default Demo;
Demo.header = 'Multiple';
Demo.href = 'menu-multiple';

Demo.code = `import React from 'react';
import { Menu } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <Menu
      multiple
      onSelectedKeysChange={keys => console.log(keys)}
    >
      <Menu.Item key="option-1" title="Option One" />
      <Menu.Item key="option-2" title="Option Two" />
      <Menu.Item key="option-3" title="Option Three" />
      <Menu.Item key="option-4" title="Option Four" />
    </Menu>
  );
};

export default Demo;
`;
