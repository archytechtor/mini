import {theme} from 'antd';

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

export default {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: colors.deepblueMain,
    colorInfo: colors.blueMain,
    colorPrimaryHover: colors.deepblueLight,
    colorPrimaryActive: colors.deepblueDark,
    colorPrimaryTextHover: colors.deepblueLight,
    colorPrimaryText: colors.deepblueMain,
    colorPrimaryTextActive: colors.deepblueDark,
    colorPrimaryBg: colors.likeWhite10,
    colorPrimaryBgHover: colors.likeWhite15,
    colorPrimaryBorder: colors.likeWhite10,
    colorPrimaryBorderHover: colors.likeWhite15,
    colorSuccess: colors.greenMain,
    colorSuccessHover: colors.greenLight,
    colorSuccessActive: colors.greenDark,
    colorSuccessTextHover: colors.greenLight,
    colorSuccessText: colors.greenMain,
    colorSuccessTextActive: colors.greenDark,
    colorSuccessBg: colors.likeWhite10,
    colorSuccessBgHover: colors.likeWhite15,
    colorSuccessBorder: colors.likeWhite10,
    colorSuccessBorderHover: colors.likeWhite15,
    colorWarning: colors.goldMain,
    colorWarningText: colors.goldMain,
    colorWarningTextHover: colors.goldLight,
    colorWarningHover: colors.goldLight,
    colorWarningActive: colors.goldDark,
    colorWarningTextActive: colors.goldDark,
    colorWarningBg: colors.likeWhite10,
    colorWarningBgHover: colors.likeWhite15,
    colorWarningBorder: colors.likeWhite10,
    colorWarningBorderHover: colors.likeWhite15,
    colorError: colors.redMain,
    colorErrorText: colors.redMain,
    colorErrorHover: colors.redLight,
    colorErrorTextHover: colors.redLight,
    colorErrorTextActive: colors.redDark,
    colorErrorActive: colors.redDark,
    colorErrorBg: colors.likeWhite10,
    colorErrorBgHover: colors.likeWhite15,
    colorErrorBorder: colors.likeWhite10,
    colorErrorBorderHover: colors.likeWhite15,
    colorInfoText: colors.blueMain,
    colorInfoTextHover: colors.blueLight,
    colorInfoHover: colors.blueLight,
    colorInfoActive: colors.blueDark,
    colorInfoTextActive: colors.blueDark,
    colorInfoBg: colors.likeWhite10,
    colorInfoBgHover: colors.likeWhite15,
    colorInfoBorder: colors.likeWhite10,
    colorInfoBorderHover: colors.likeWhite15,
    colorLink: colors.deepblueMain,
    colorLinkHover: colors.deepblueLight,
    colorLinkActive: colors.deepblueDark,
    colorTextBase: colors.textMain,
    colorBgBase: colors.bgMain,
    borderRadius: 2,
    borderRadiusSM: 2,
    borderRadiusXS: 2,
    wireframe: false,
    colorText: colors.textAccent,
    colorTextSecondary: colors.textMain,
    colorTextTertiary: colors.textSecondary,
    colorTextQuaternary: colors.textDisabled,
    colorBorder: colors.likeWhite10,
    colorBorderSecondary: colors.likeWhite15,
    colorBgContainer: colors.bgMain,
    colorBgElevated: colors.likeWhite10,
    colorBgLayout: colors.likeWhite15,
    colorBgSpotlight: colors.likeWhite20,
    colorBgMask: colors.transparent,
    boxShadow: 'none',
    boxShadowSecondary: 'none'
  },
  components: {
    Button: {
      algorithm: false,
      colorPrimary: colors.deepblueMain,
      colorLink: colors.deepblueMain,
      colorLinkActive: colors.deepblueDark,
      colorLinkHover: colors.deepblueLight,
      borderColorDisabled: colors.transparent,
      defaultBg: colors.bgMain,
      defaultBorderColor: colors.transparent,
      defaultColor: colors.white,
      groupBorderColor: colors.deepblueMain,
      textHoverBg: colors.likeWhite10,
      colorBgContainerDisabled: colors.likeWhite10,
      colorBgTextActive: colors.deepblueDark,
      colorBorder: colors.transparent,
      colorErrorBg: colors.bgMain,
      colorErrorBorderHover: colors.redLight,
      colorPrimaryBorder: colors.transparent,
      dangerShadow: 'none',
      defaultShadow: 'none',
      primaryShadow: 'none',
      colorText: colors.white,
      colorTextLightSolid: colors.white,
      defaultGhostBorderColor: colors.transparent,
      defaultGhostColor: colors.transparent
    },
    Typography: {
      algorithm: false,
      colorError: colors.redMain,
      colorErrorActive: colors.redDark,
      colorErrorHover: colors.redLight,
      colorLink: colors.deepblueMain,
      colorLinkActive: colors.deepblueDark,
      colorLinkHover: colors.deepblueLight,
      colorSuccess: colors.greenMain,
      colorWarning: colors.goldMain,
      colorText: colors.textMain,
      colorTextDescription: colors.textSecondary,
      colorTextDisabled: colors.textDisabled,
      colorTextHeading: colors.textAccent
    },
    Divider: {
      colorSplit: colors.likeWhite10,
      colorText: colors.textMain,
      colorTextHeading: colors.textAccent
    },
    Anchor: {
      colorPrimary: colors.deepblueMain,
      colorSplit: colors.likeWhite10,
      colorText: colors.textMain
    },
    Breadcrumb: {
      colorText: colors.textAccent
    },
    Cascader: {
      colorSplit: colors.transparent,
      optionSelectedBg: colors.deepblueMain,
      colorBgContainerDisabled: colors.likeWhite10
    },
    Switch: {
      colorTextQuaternary: colors.likeWhite10,
      colorTextTertiary: colors.likeWhite15
    },
    TreeSelect: {
      nodeSelectedBg: colors.deepblueMain
    },
    Upload: {
      colorFillAlter: colors.likeWhite10
    },
    Avatar: {
      colorTextPlaceholder: colors.likeWhite10
    },
    Tag: {

      red1: colors.likeWhite10,
      red3: colors.likeWhite10,
      red6: colors.redMain,
      red7: colors.redMain,

      volcano1: colors.likeWhite10,
      volcano3: colors.likeWhite10,
      volcano6: colors.volcanoMain,
      volcano7: colors.volcanoMain,

      orange1: colors.likeWhite10,
      orange3: colors.likeWhite10,
      orange6: colors.orangeMain,
      orange7: colors.orangeMain,

      gold1: colors.likeWhite10,
      gold3: colors.likeWhite10,
      gold6: colors.goldMain,
      gold7: colors.goldMain,

      yellow1: colors.likeWhite10,
      yellow3: colors.likeWhite10,
      yellow6: colors.yellowMain,
      yellow7: colors.yellowMain,

      lime1: colors.likeWhite10,
      lime3: colors.likeWhite10,
      lime6: colors.limeMain,
      lime7: colors.limeMain,

      green1: colors.likeWhite10,
      green3: colors.likeWhite10,
      green6: colors.greenMain,
      green7: colors.greenMain,

      cyan1: colors.likeWhite10,
      cyan3: colors.likeWhite10,
      cyan6: colors.cyanMain,
      cyan7: colors.cyanMain,

      blue1: colors.likeWhite10,
      blue3: colors.likeWhite10,
      blue6: colors.blueMain,
      blue7: colors.blueMain,

      geekblue1: colors.likeWhite10,
      geekblue3: colors.likeWhite10,
      geekblue6: colors.deepblueMain,
      geekblue7: colors.deepblueMain,

      purple1: colors.likeWhite10,
      purple3: colors.likeWhite10,
      purple6: colors.purpleMain,
      purple7: colors.purpleMain,

      pink1: colors.likeWhite10,
      pink3: colors.likeWhite10,
      pink6: colors.pinkMain,
      pink7: colors.pinkMain,

      magenta1: colors.likeWhite10,
      magenta3: colors.likeWhite10,
      magenta6: colors.pinkMain,
      magenta7: colors.pinkMain,
    },
    Tooltip: {
      colorBgSpotlight: colors.bgTooltip,
      colorText: colors.white,
      colorTextLightSolid: colors.white
    },
    Dropdown: {
      colorPrimary: colors.white,
      controlItemBgActive: colors.bgMain,
      controlItemBgActiveHover: colors.likeWhite10,
      controlItemBgActiveDisabled: colors.bgSecondary,
      controlItemBgActiveDisabledHover: colors.likeWhite10
    }
  }
};