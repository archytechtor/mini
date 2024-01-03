import React from 'react';
import {Divider, Stack} from '@mui/material';
import Buttons from './Buttons';

const colors = {
  default: [
    'primary',
    'secondary',
    'error',
    'warning',
    'info',
    'success'
  ],
  custom: [
    'red',
    'volcano',
    'orange',
    'gold',
    'yellow',
    'lime',
    'green',
    'cyan',
    'blue',
    'deepblue',
    'purple',
    'pink'
  ],
  invert: [
    'red-invert',
    'volcano-invert',
    'orange-invert',
    'gold-invert',
    'yellow-invert',
    'lime-invert',
    'green-invert',
    'cyan-invert',
    'blue-invert',
    'deepblue-invert',
    'purple-invert',
    'pink-invert'
  ]
};

const TestPage = () => (
  <Stack spacing={2} p={2}>
    <Divider textAlign={'left'}>
      {'Buttons'}
    </Divider>
    <Buttons colors={colors.default} />
    <Buttons colors={colors.custom} />
    <Buttons colors={colors.invert} />
  </Stack>
);

export default TestPage;