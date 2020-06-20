import React from 'react';
import { PureAlert } from '@/fork-ui/core';

const Demo = () => {
  return (
    <div className="w-full">
      <PureAlert
        info
        title="Info Title"
        className="mb-5"
      />
      <PureAlert
        error
        title="Error Title"
        className="mb-5"
      />
      <PureAlert
        success
        title="Success Title"
        className="mb-5"
      />
      <PureAlert
        warning
        title="Warning Title"
        className="mb-5"
      />
    </div>
  );
};

export default Demo;
