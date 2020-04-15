import React from 'react';
import { Menu } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <Menu>
      <Menu.ItemGroup key="group-action" title="Action">
        <Menu.Item key="copy" icon="copy" title="Copy" />
        <Menu.Item key="tool" icon="tool" title="Config" />
        <Menu.Sub key="sub-other" icon="share" title="Other">
          <Menu.Item key="rating" icon="star" title="Rating" />
          <Menu.Item key="follow" icon="bell" title="Follow" />
        </Menu.Sub>
        <Menu.Item
          key="message"
          icon="message"
          title="Message"
        />
        <Menu.Item key="heart" icon="heart" title="Love" />
      </Menu.ItemGroup>
    </Menu>
  );
};

export default Demo;
Demo.header = 'SUB IN GROUP';
Demo.anchorTitle = 'Sub in group';
Demo.href = 'menu-sub-in-group';

Demo.code = `import React from 'react';
import { Menu } from '@/rc-neumorphism/core';

const Demo = () => {
  return (
    <Menu>
      <Menu.ItemGroup key="group-action" title="Action">
        <Menu.Item key="copy" icon="copy" title="Copy" />
        <Menu.Item key="tool" icon="tool" title="Config" />
        <Menu.Sub key="sub-other" icon="share" title="Other">
          <Menu.Item key="rating" icon="star" title="Rating" />
          <Menu.Item key="follow" icon="bell" title="Follow" />
        </Menu.Sub>
        <Menu.Item
          key="message"
          icon="message"
          title="Message"
        />
        <Menu.Item key="heart" icon="heart" title="Love" />
      </Menu.ItemGroup>
    </Menu>
  );
};

export default Demo;
`;
