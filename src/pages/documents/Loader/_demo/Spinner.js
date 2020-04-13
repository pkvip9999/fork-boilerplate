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
      <div className="flex-1">
        <Loader.Spinner color="red" />
      </div>
      <div className="flex-1">
        <Loader.Spinner />
      </div>
      <div className="flex-1">
        <Loader.Spinner size="3em" />
      </div>
    </div>
  );
};

export default Demo;

Demo.header = 'SPINNER';
Demo.href = 'loader-spinner';
Demo.code = `import React from 'react';
import { Loader } from '@/components';

const Demo = () => {
  return (
    <div
      className="flex w-full"
      style={{
        height: '100px',
      }}
    >
      <div className="flex-1">
        <Loader.Spinner color="red" />
      </div>
      <div className="flex-1">
        <Loader.Spinner />
      </div>
      <div className="flex-1">
        <Loader.Spinner size="3em" />
      </div>
    </div>
  );
};

export default Demo;
`;
