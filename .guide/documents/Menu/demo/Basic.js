import React from 'react';
import { Menu } from '@@/fork-ui/src/components/core';

const Demo = () => {
  return (
    <Menu
      defaultSelectedKeys={['option-2']}
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
