import React from 'react';
import { Badge, Icon } from '@/fork-ui/core';

const FancyBox = ({ size, circle }) => (
  <div
    style={{
      height: size,
      width: size,
      backgroundColor: 'var(--secondary-bg)',
      borderRadius: circle ? '100rem' : '0.5rem',
    }}
  />
);

const Demo = () => {
  return (
    <div className="flex">
      <Badge icon="message" className="mr-5">
        <FancyBox size="50px" />
      </Badge>
      <Badge
        icon={<Icon name="check" />}
        className="mr-5">
        <FancyBox size="50px"
      />
      </Badge>
      <Badge
        overlap
        bottomRight
        color="#0df316"
        icon={<Icon name="check" />}
        bottomRight
      >
        <FancyBox size="50px" circle />
      </Badge>
    </div>
  );
};

export default Demo;
