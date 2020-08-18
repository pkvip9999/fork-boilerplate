import React from 'react';
import { SpeedDial, Button } from '@/fork-ui/core';
import { CloudDownload, Coin, ColorSwatch } from '@@/fork-ui/src/components/Icon';

const SpeedDialDemo = ({ ...otherProps }) => {
  return (
    <SpeedDial {...otherProps} overlay={
      <React.Fragment>
        <SpeedDial.Button disabled onClick={() => console.log('Hi')} icon={<CloudDownload />} />
        <SpeedDial.Button primary onClick={() => console.log('Hello')} icon={<Coin />} />
        <SpeedDial.Button onClick={() => console.log('Chào')} icon={<ColorSwatch />} />
      </React.Fragment>
    }/>
  );
};

const Demo = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex">
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <SpeedDialDemo topLeft title="top-left">
          <Button className="m-2" style={{ width: '3em' }}>TL</Button>
        </SpeedDialDemo>
        <SpeedDialDemo top title="top">
          <Button className="m-2" style={{ width: '3em' }}>T</Button>
        </SpeedDialDemo>
        <SpeedDialDemo topRight title="top-right">
          <Button className="m-2" style={{ width: '3em' }}>TR</Button>
        </SpeedDialDemo>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
      </div>

      <div className="flex">
        <SpeedDialDemo leftTop title="left-top">
          <Button className="m-2" style={{ width: '3em' }}>LT</Button>
        </SpeedDialDemo>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <SpeedDialDemo rightTop title="right-top">
          <Button className="m-2" style={{ width: '3em' }}>RT</Button>
        </SpeedDialDemo>
      </div>

      <div className="flex">
        <SpeedDialDemo left title="left">
          <Button className="m-2" style={{ width: '3em' }}>L</Button>
        </SpeedDialDemo>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <SpeedDialDemo right title="right">
          <Button className="m-2" style={{ width: '3em' }}>R</Button>
        </SpeedDialDemo>
      </div>

      <div className="flex">
        <SpeedDialDemo leftBottom title="left-bottom">
          <Button className="m-2" style={{ width: '3em' }}>LB</Button>
        </SpeedDialDemo>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <SpeedDialDemo rightBottom title="right-bottom">
          <Button className="m-2" style={{ width: '3em' }}>RB</Button>
        </SpeedDialDemo>
      </div>

      <div className="flex">
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <SpeedDialDemo bottomLeft title="bottom-left">
          <Button className="m-2" style={{ width: '3em' }}>BL</Button>
        </SpeedDialDemo>
        <SpeedDialDemo bottom title="bottom">
          <Button className="m-2" style={{ width: '3em' }}>B</Button>
        </SpeedDialDemo>
        <SpeedDialDemo bottomRight title="bottom-right">
          <Button className="m-2" style={{ width: '3em' }}>BR</Button>
        </SpeedDialDemo>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
      </div>
    </div>
  );
};

export default Demo;
