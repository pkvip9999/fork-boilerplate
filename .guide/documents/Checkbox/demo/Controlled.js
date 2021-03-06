import React, { useState, useCallback } from 'react';
import Wrapper from '@@/.guide/shared/Wrapper';
import { Checkbox } from '@@/fork-ui/src/components/core';

const Demo = () => {
  const [checked, setChecked] = useState(false);
  const onChange = useCallback(e => setChecked(e.target.checked), setChecked);

  return (
    <Wrapper>
      <Checkbox checked={checked} onChange={onChange} />
      <Checkbox checked={checked} onChange={onChange} />
    </Wrapper>
  );
};

export default Demo;
