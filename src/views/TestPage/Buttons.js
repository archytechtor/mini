import React from 'react';
import {Button} from '@ui';
import {Flex, Divider} from 'antd';

const Buttons = () => (
  <Flex
    vertical={true}
    gap={0}
  >
    <Divider
      orientation='left'
      plain={true}
    >
      Buttons
    </Divider>
    <Flex gap={10}>
      <Button color={'red'}>red</Button>
      <Button color={'volcano'}>volcano</Button>
      <Button color={'orange'}>orange</Button>
      <Button color={'gold'}>gold</Button>
      <Button color={'yellow'}>yellow</Button>
      <Button color={'lime'}>lime</Button>
      <Button color={'green'}>green</Button>
      <Button color={'cyan'}>cyan</Button>
      <Button color={'blue'}>blue</Button>
      <Button color={'deepblue'}>deepblue</Button>
      <Button color={'purple'}>purple</Button>
      <Button color={'pink'}>pink</Button>
    </Flex>
  </Flex>
);

export default Buttons;