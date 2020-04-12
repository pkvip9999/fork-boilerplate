import React from 'react';
import { Icon, Tooltip } from '@/components';
import list from '../../../../../rc-neumorphism/src/components/Icon/svg';

require('./Collection.scss');

const IconBox = ({ name }) => {
  return (
    <Tooltip title={name}>
      <div className="icon-box">
        <Icon name={name} />
      </div>
    </Tooltip>
  );
};

const Demo = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap">
        {Object.keys(list).map(key => (
          <IconBox name={key} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Demo;

Demo.header = 'COLLECTION';
Demo.href = 'icon-collection';
Demo.code = `import React from 'react';
import { Icon, Tooltip } from '@/components';
import list from '../../../../../rc-neumorphism/src/components/Icon/svg';

require('./Collection.scss');

const IconBox = ({ name }) => {
  return (
    <Tooltip title={name}>
      <div className="icon-box">
        <Icon name={name} />
      </div>
    </Tooltip>
  );
};

const Demo = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap">
        {Object.keys(list).map(key => (
          <IconBox name={key} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Demo;
`;