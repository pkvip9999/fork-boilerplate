import React, { useCallback } from 'react';
import { Collapse } from '@/fork-ui/core';

const Description = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: '10rem' }}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </div>
  );
};

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Collapse>
        <Collapse.Item
          title="Collapse One"
          key="panel-1"
          icon="messages"
        >
          <Description />
        </Collapse.Item>
        <Collapse.Item
          title="Collapse Two"
          key="panel-2"
          icon="device-desktop"
        >
          <Description />
        </Collapse.Item>
        <Collapse.Item
          title="Collapse Three"
          key="panel-3"
          icon="power"
        >
          <Description />
        </Collapse.Item>
      </Collapse>
    </div>
  );
};

export default Demo;
