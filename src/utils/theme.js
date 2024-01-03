import {createTheme} from '@mui/material/styles';

const colors = {
  redLight: '#f8646c',
  redMain: '#f74c55',
  redDark: '#f6333e',
  volcanoLight: '#fb8760',
  volcanoMain: '#fa7447',
  volcanoDark: '#fa612e',
  orangeLight: '#fbae5b',
  orangeMain: '#faa242',
  orangeDark: '#fa9529',
  goldLight: '#fbc55a',
  goldMain: '#fabc41',
  goldDark: '#fab328',
  yellowLight: '#fced89',
  yellowMain: '#fbe970',
  yellowDark: '#fbe557',
  limeLight: '#bce458',
  limeMain: '#b3e042',
  limeDark: '#aadd2c',
  greenLight: '#85d55e',
  greenMain: '#76d04a',
  greenDark: '#66ca36',
  cyanLight: '#89e0e0',
  cyanMain: '#75dbdb',
  cyanDark: '#61d5d5',
  blueLight: '#74bcff',
  blueMain: '#5ab0ff',
  blueDark: '#41a3ff',
  deepblueLight: '#6d87f1',
  deepblueMain: '#5674ef',
  deepblueDark: '#3e61ed',
  purpleLight: '#aa81e3',
  purpleMain: '#9c6cde',
  purpleDark: '#8e57da',
  pinkLight: '#f16db5',
  pinkMain: '#ef56a9',
  pinkDark: '#ed3e9d',

  white: '#ffffff',
  transparent: 'transparent',
  textAccent: '#c7cad4',
  textMain: '#a9acb7',
  textSecondary: '#a9acb7d9',
  textDisabled: '#a9acb7a6',

  bgMain: '#1e1f22',
  bgSecondary: '#2d2e33',
  bgTooltip: '#121212',

  likeWhite10: '#353639',
  likeWhite15: '#404043',
  likeWhite20: '#4b4c4e'
};

export default createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: colors.bgMain,
      paper: colors.likeWhite10
    },
    text: {
      primary: colors.textAccent,
      secondary: colors.textMain,
      disabled: colors.textDisabled
    },
    primary: {
      main: colors.deepblueMain,
      light: colors.deepblueLight,
      dark: colors.deepblueDark,
      contrastText: colors.bgTooltip
    },
    secondary: {
      main: colors.likeWhite15,
      light: colors.likeWhite20,
      dark: colors.likeWhite10,
      contrastText: colors.textMain
    },
    error: {
      main: colors.redMain,
      light: colors.redLight,
      dark: colors.redDark,
      contrastText: colors.bgTooltip
    },
    warning: {
      main: colors.goldMain,
      light: colors.goldLight,
      dark: colors.goldDark,
      contrastText: colors.bgTooltip
    },
    info: {
      main: colors.blueMain,
      light: colors.blueLight,
      dark: colors.blueDark,
      contrastText: colors.bgTooltip
    },
    success: {
      main: colors.greenMain,
      light: colors.greenLight,
      dark: colors.greenDark,
      contrastText: colors.bgTooltip
    },
    // custom colors
    red: {
      main: colors.redMain,
      light: colors.redLight,
      dark: colors.redDark,
      contrastText: colors.bgTooltip
    },
    'red-invert': {
      main: colors.likeWhite10,
      light: colors.likeWhite20,
      dark: colors.likeWhite15,
      contrastText: colors.redMain
    },
    volcano: {
      main: colors.volcanoMain,
      light: colors.volcanoLight,
      dark: colors.volcanoDark,
      contrastText: colors.bgTooltip
    },
    'volcano-invert': {
      main: colors.likeWhite15,
      light: colors.likeWhite20,
      dark: colors.likeWhite10,
      contrastText: colors.volcanoMain
    },
    orange: {
      main: colors.orangeMain,
      light: colors.orangeLight,
      dark: colors.orangeDark,
      contrastText: colors.bgTooltip
    },
    'orange-invert': {
      main: colors.likeWhite15,
      light: colors.likeWhite20,
      dark: colors.likeWhite10,
      contrastText: colors.orangeMain
    },
    gold: {
      main: colors.goldMain,
      light: colors.goldLight,
      dark: colors.goldDark,
      contrastText: colors.bgTooltip
    },
    'gold-invert': {
      main: colors.likeWhite15,
      light: colors.likeWhite20,
      dark: colors.likeWhite10,
      contrastText: colors.goldMain
    },
    yellow: {
      main: colors.yellowMain,
      light: colors.yellowLight,
      dark: colors.yellowDark,
      contrastText: colors.bgTooltip
    },
    'yellow-invert': {
      main: colors.likeWhite15,
      light: colors.likeWhite20,
      dark: colors.likeWhite10,
      contrastText: colors.yellowMain
    },
    lime: {
      main: colors.limeMain,
      light: colors.limeLight,
      dark: colors.limeDark,
      contrastText: colors.bgTooltip
    },
    'lime-invert': {
      main: colors.likeWhite15,
      light: colors.likeWhite20,
      dark: colors.likeWhite10,
      contrastText: colors.limeMain
    },
    green: {
      main: colors.greenMain,
      light: colors.greenLight,
      dark: colors.greenDark,
      contrastText: colors.bgTooltip
    },
    'green-invert': {
      main: colors.likeWhite15,
      light: colors.likeWhite20,
      dark: colors.likeWhite10,
      contrastText: colors.greenMain
    },
    cyan: {
      main: colors.cyanMain,
      light: colors.cyanLight,
      dark: colors.cyanDark,
      contrastText: colors.bgTooltip
    },
    'cyan-invert': {
      main: colors.likeWhite15,
      light: colors.likeWhite20,
      dark: colors.likeWhite10,
      contrastText: colors.cyanMain
    },
    blue: {
      main: colors.blueMain,
      light: colors.blueLight,
      dark: colors.blueDark,
      contrastText: colors.bgTooltip
    },
    'blue-invert': {
      main: colors.likeWhite15,
      light: colors.likeWhite20,
      dark: colors.likeWhite10,
      contrastText: colors.blueMain
    },
    deepblue: {
      main: colors.deepblueMain,
      light: colors.deepblueLight,
      dark: colors.deepblueDark,
      contrastText: colors.bgTooltip
    },
    'deepblue-invert': {
      main: colors.likeWhite15,
      light: colors.likeWhite20,
      dark: colors.likeWhite10,
      contrastText: colors.deepblueMain
    },
    purple: {
      main: colors.purpleMain,
      light: colors.purpleLight,
      dark: colors.purpleDark,
      contrastText: colors.bgTooltip
    },
    'purple-invert': {
      main: colors.likeWhite15,
      light: colors.likeWhite20,
      dark: colors.likeWhite10,
      contrastText: colors.purpleMain
    },
    pink: {
      main: colors.pinkMain,
      light: colors.pinkLight,
      dark: colors.pinkDark,
      contrastText: colors.bgTooltip
    },
    'pink-invert': {
      main: colors.likeWhite15,
      light: colors.likeWhite20,
      dark: colors.likeWhite10,
      contrastText: colors.pinkMain
    }
  },
  typography: {
    fontFamily: `'Montserrat', 'Roboto', sans-serif`,
    fontSize: 14
  },
  components: {
    MuiTouchRipple: {
      styleOverrides: {
        ripple: () => {
          return {
            backgroundColor: 'transparent',
            color: colors.white
          };
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          '&:-webkit-autofill': {
            '-webkit-box-shadow': 'inset 0 0 20px 20px #1e1f22',
            '-webkit-text-fill-color': colors.textMain
          }
        }
      }
    }
  }
});