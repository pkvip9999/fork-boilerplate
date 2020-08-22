import React from 'react';
import { Badge } from '@@/fork-ui/src/components/core';

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
      <Badge className="mr-5">
        <FancyBox size="50px" />
      </Badge>
      <Badge count={7} className="mr-5">
        <FancyBox size="50px" />
      </Badge>
      <Badge count={999} className="mr-5">
        <FancyBox size="50px" />
      </Badge>
      <Badge dot className="mr-5">
        <FancyBox size="50px" />
      </Badge>
      <Badge count={999} dot>
        <FancyBox size="50px" />
      </Badge>
    </div>
  );
};

export default Demo;
