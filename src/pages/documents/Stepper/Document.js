import React from 'react';
import Codebox from '../../../others-component/Codebox';

import Basic from './demo/Basic';
import Vertical from './demo/Vertical';
import Static from './demo/Static';
import Semantic from './demo/Semantic';
import Complex from './demo/Complex';
import IconDemo from './demo/Icon';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" header="BASIC" href="stepper-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-2" header="VERTICAL" href="stepper-vertical" code={Vertical.code}>
          <Vertical />
        </Codebox>
        <Codebox className="mb-2" header="WITH ICON" href="stepper-icon" code={IconDemo.code}>
          <IconDemo />
        </Codebox>
      </div>
      <div className="w-1/2">
        <Codebox className="mb-2" header="COMPLEX" href="stepper-complex" code={Complex.code}>
          <Complex />
        </Codebox>
        <Codebox className="mb-2" header="STATIC" href="stepper-static" code={Static.code}>
          <Static />
        </Codebox>
        <Codebox className="mb-2" header="SEMANTIC PROPS" href="stepper-semantic-props" code={Semantic.code} description={Semantic.description}>
          <Semantic />
        </Codebox>
      </div>
    </div>
  );
};
