import React from 'react';
import { Anchor } from '@/rc-neumorphism/core';
import Codebox from '@/components/Codebox';

import Top from './demo/Top';
import Bottom from './demo/Bottom';

export default () => {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1">
         <Codebox className="mb-1" Component={ Top } />
         <Codebox className="mb-1" Component={ Bottom } />
      </div>
      <div className="pl-1" style={ { flexBasis: '200px' } }>
        <Anchor
          top={75}
          style={ {
            backgroundColor: 'var(--rc-color--300)',
            height: 'calc(100vh - 75px',
            borderRadius: '0.5rem',
          } }
        >
           <Anchor.Link key={`#${ Top.href}` } title={ Top.anchorTitle } />
           <Anchor.Link key={`#${ Bottom.href}` } title={ Bottom.anchorTitle } />
        </Anchor>
      </div>
    </div>
  );
};
