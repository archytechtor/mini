import React from 'react';
import {Flex, Divider, Tag} from 'antd';

const Tags = () => (
  <Flex
    vertical={true}
    gap={0}
  >
    <Divider
      orientation='left'
      plain={true}
    >
      Tags
    </Divider>
    <Flex gap={10}>
      <Tag color={'red'}>red</Tag>
      <Tag color={'volcano'}>volcano</Tag>
      <Tag color={'orange'}>orange</Tag>
      <Tag color={'gold'}>gold</Tag>
      <Tag color={'yellow'}>yellow</Tag>
      <Tag color={'lime'}>lime</Tag>
      <Tag color={'green'}>green</Tag>
      <Tag color={'cyan'}>cyan</Tag>
      <Tag color={'blue'}>blue</Tag>
      <Tag color={'geekblue'}>geekblue</Tag>
      <Tag color={'purple'}>purple</Tag>
      <Tag color={'pink'}>pink</Tag>
    </Flex>
  </Flex>
);

export default Tags;