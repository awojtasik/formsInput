import React from 'react';
import { Dialog } from './Dialog';
import { Button } from '@chakra-ui/react';

export const ConfirmDialog = (props) => {
  return (
    <Dialog title={props.title}>
      {props.children}
      <hr />
      {/* <button>YES</button>
      <button>NO</button> */}
      <Button colorScheme="blue">Button</Button>
    </Dialog>
  );
};
