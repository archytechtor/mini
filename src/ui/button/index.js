import React from 'react';
import PropTypes from 'prop-types';
import {Button as AntdButton, ConfigProvider} from 'antd';

const colors = {
  red: {
    light: '#f8646c',
    main: '#f74c55',
    dark: '#f6333e'
  },
  volcano: {
    light: '#fb8760',
    main: '#fa7447',
    dark: '#fa612e'
  },
  orange: {
    light: '#fbae5b',
    main: '#faa242',
    dark: '#fa9529'
  },
  gold: {
    light: '#fbc55a',
    main: '#fabc41',
    dark: '#fab328'
  },
  yellow: {
    light: '#fced89',
    main: '#fbe970',
    dark: '#fbe557'
  },
  lime: {
    light: '#bce458',
    main: '#b3e042',
    dark: '#aadd2c'
  },
  green: {
    light: '#85d55e',
    main: '#76d04a',
    dark: '#66ca36'
  },
  cyan: {
    light: '#89e0e0',
    main: '#75dbdb',
    dark: '#61d5d5'
  },
  blue: {
    light: '#74bcff',
    main: '#5ab0ff',
    dark: '#41a3ff'
  },
  deepblue: {
    light: '#6d87f1',
    main: '#5674ef',
    dark: '#3e61ed'
  },
  purple: {
    light: '#aa81e3',
    main: '#9c6cde',
    dark: '#8e57da'
  },
  pink: {
    light: '#f16db5',
    main: '#ef56a9',
    dark: '#ed3e9d'
  },
  white: '#ffffff',
  black: '#000000'
};

const Button = ({children, color, ...rest}) => {
  return (
    <ConfigProvider theme={{
      components: {
        Button: {
          algorithm: false,
          colorPrimary: colors[color].main,
          colorPrimaryHover: colors[color].dark,
          colorPrimaryActive: colors[color].dark,
          colorTextLightSolid: color === 'yellow' ? colors.black : colors.white
        }
      }
    }}>
      <AntdButton
        type={'primary'}
        {...rest}
      >
        {children}
      </AntdButton>
    </ConfigProvider>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf([
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
  ])
};

Button.defaultProps = {
  color: 'deepblue'
};

export default Button;