import React, { useState, useCallback } from 'react';
import { Button, Drawer } from '@/fork-ui/core';

const Demo = () => {
  const [open, setOpen] = useState();

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Drawer
        open={open}
        onClose={onClose}
        className="w-1/3"
        closable={false}
      >
        <Drawer.Header closable={false}>Drawer Title</Drawer.Header>
        <Drawer.Body>
          <Button onClick={onClose}>Close</Button>
        </Drawer.Body>
      </Drawer>
      <Button onClick={onOpen}>Open Drawer</Button>
    </div>
  );
};

export default Demo;
