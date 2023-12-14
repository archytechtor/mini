import React from 'react';
import {Button} from '@ui';
import {Flex, Divider, Dropdown} from 'antd';

const items = [
  {
    key: '1',
    label: '1st item'
  },
  {
    key: '2',
    label: '2nd item (disabled)',
    disabled: true
  },
  {
    key: '3',
    label: 'Group',
    type: 'group',
    children: [
      {
        key: '3-1',
        label: '3rd item'
      },
      {
        key: '3-2',
        label: '4th item'
      }
    ]
  },
  {
    type: 'divider'
  },
  {
    key: '4',
    label: 'Submenu',
    children: [
      {
        key: '4-1',
        label: '5th item'
      },
      {
        key: '4-2',
        label: '6th item'
      }
    ]
  },
  {
    key: '5',
    label: 'Danger item',
    danger: true
  }
];

const Dropdowns = () => {
  return (
    <Flex
      vertical={true}
      gap={0}
    >
      <Divider
        orientation='left'
        plain={true}
      >
        Dropdowns
      </Divider>
      <Flex gap={10}>
        <Dropdown menu={{items}}>
          <Button type={'link'}>
            Hoverable
          </Button>
        </Dropdown>
        <Dropdown
          menu={{items}}
          trigger={['click']}
        >
          <Button type={'link'}>
            Clickable
          </Button>
        </Dropdown>
        <Dropdown
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: ['2', '5']
          }}
          trigger={['click']}
        >
          <Button type={'link'}>
            Selectable
          </Button>
        </Dropdown>
      </Flex>
    </Flex>

  );
};

export default Dropdowns;