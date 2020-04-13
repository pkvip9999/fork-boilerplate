import React from 'react';
import { Loader } from '@/components';

const Demo = () => {
  return (
    <div
      className="flex w-full"
      style={{
        height: '100px',
      }}
    >
      <div className="flex-1" style={{ marginBottom: '10px' }}>
        <Loader.Spinner color="red" />
      </div>
      <div className="flex-1" style={{ marginBottom: '10px' }}>
        <Loader.Spinner />
      </div>
      <div className="flex-1" style={{ marginBottom: '10px' }}>
        <Loader.Spinner size="5em" />
      </div>
    </div>
  );
};

Demo.code = `

`;

export default Demo;
