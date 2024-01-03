import React from 'react';
import PropTypes from 'prop-types';
import {Stack} from '@mui/material';
import {Delete, Send} from '@mui/icons-material';
import {Button} from '@ui';

const Buttons = ({colors}) => (
  <Stack
    direction={'row'}
    spacing={2}
    my={2}
    flexWrap={'wrap'}
    useFlexGap={true}
  >
    {
      colors.map((color) => (
        <Button
          key={color}
          color={color}
          startIcon={<Delete />}
          endIcon={<Send />}
        >
          {color}
        </Button>
      ))
    }
  </Stack>
);

Buttons.propTypes = {
  colors: PropTypes.array
};

export default Buttons;