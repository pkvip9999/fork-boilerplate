import React from 'react';
import { Tabs } from '@/fork-ui/core';
import { DeviceDesktop, Message, Copy, Tool } from '@@/fork-ui/src/components/Icon';

const Description = ({ content }) => {
  return (
    <div
      className="neumorphism flex items-center justify-center"
      style={{ height: '10rem' }}
    >
      {content}
    </div>
  );
};

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Tabs>
        <Tabs.Item title="Tab One" key="tab-1" icon={<DeviceDesktop />}>
          <Description content="Description One" />
        </Tabs.Item>
        <Tabs.Item title="Tab Two" key="tab-2" iconRight={<Message />}>
          <Description content="Description Two" />
        </Tabs.Item>
        <Tabs.Item title="Tab Three" key="tab-3" icon={<Copy />}>
          <Description content="Description Three" />
        </Tabs.Item>
        <Tabs.Item title="Tab Four" key="tab-4" icon={<Tool />}>
          <Description content="Description Four" />
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default Demo;
