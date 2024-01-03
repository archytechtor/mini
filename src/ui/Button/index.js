import React from 'react';
import PropTypes from 'prop-types';
import {Button as MuiButton} from '@mui/material';

const Button = ({children, ...props}) => (
  <MuiButton
    {...props}
    disableElevation={true}
    size={'small'}
    variant={'contained'}
    sx={
      {
        borderRadius: '2px',
        fontSize: '14px',
        fontWeight: 600,
        minWidth: 'max-content',
        width: 100,
        lineHeight: '22px'
      }
    }
  >
    {children}
  </MuiButton>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ])
};

export default Button;