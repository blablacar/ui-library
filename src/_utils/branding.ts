interface Color {
  [propName: string]: string
}

const palette: Color = {
  white: '#FFF',
  gray: '#DDD',
  lightGray: '#EDEDED',
  midnightGreen: '#054752',
  lightMidnightGreen: '#708C91',
  blue: '#00AFF5',
  darkBlue: '#008FC1',
  green: '#5DD167',
  orange: '#F78B00',
  yellow: '#FFCA0C',
  red: '#F53F5B',
  lightRed: '#FDD8DE',
}

type Font = {
  [key: string]: {
    size: string
    lineHeight: string
  }
}

type defaultBranding = {
  [key: string]: string
}

export const font: Font = {
  s: {
    size: '13px',
    lineHeight: '16px',
  },
  base: {
    size: '16px',
    lineHeight: '20px',
  },
  m: {
    size: '18px',
    lineHeight: '20px',
  },
  l: {
    size: '22px',
    lineHeight: '24px',
  },
  xl: {
    size: '30px',
    lineHeight: String(Math.floor((32 / 30) * 100) / 100),
  },
  xxl: {
    size: '82px',
    lineHeight: '82px',
  },
}

export const fontWeight: defaultBranding = {
  regular: '400',
  medium: '500',
}

export const space: defaultBranding = {
  none: '0',
  s: '4px',
  m: '8px',
  l: '16px',
  xl: '24px',
  xxl: '48px',
}

export const radius: defaultBranding = {
  none: '0',
  s: '4px',
  m: '8px',
  l: '16px',
  xl: '24px',
}

export const transition = {
  duration: {
    base: '200ms',
    fast: '500ms',
  },
  easing: {
    default: 'ease-in',
  },
  callbackDelay: 1000,
}

export const delay = {
  timeout: {
    base: '400ms',
  },
  interval: {
    base: '100ms',
  },
}

export const componentSizes = {
  timeWidth: '48px',
  buttonIconSize: '48px',
  bulletSize: '10px',
  bulletSizeSmall: '8px',
  bulletSizeMap: '18px',
  bulletSizeSearch: '18px',
  roadWidth: '4px',
  smallSectionWidth: '662px',
  largeSectionWidth: '1016px',
  modalTopPadding: '70px',
  searchOverlayWidth: '375px',
}

export const modalSize = {
  s: '400px',
  m: '662px',
  l: '928px',
}

export const shadow: defaultBranding = {
  default: '0 2px 4px rgba(0, 0, 0, .3)',
  icon: '0 0 2px rgba(0, 0, 0, .3)',
  card: '0 1pt 4pt rgba(0, 0, 0, 0.16), 0 2pt 8pt rgba(0, 0, 0, 0.08)',
  cardHover: '0 2pt 8pt rgba(0, 0, 0, 0.08), 0 2pt 16pt rgba(0, 0, 0, 0.08)',
  searchForm: '0 1pt 4pt rgba(0, 0, 0, 0.16), 0 2pt 8pt rgba(0, 0, 0, 0.08)',
}

export const inputBorderSize = {
  default: '1px',
  focus: '3px',
}

const smallBreakPointThreshold = '800px'
export const responsiveBreakpoints = {
  small: smallBreakPointThreshold,
  isMediaLarge: `min-width: ${smallBreakPointThreshold}`,
  isMediaSmall: `max-width: ${smallBreakPointThreshold}`,
}

export const color: Color = {
  primary: palette.blue,
  accent: palette.blue,
  primaryText: palette.midnightGreen,
  secondaryText: palette.lightMidnightGreen,
  fadedText: palette.gray,
  textWithBackground: palette.white,

  border: palette.gray,
  disabled: palette.lightGray,
  divider: palette.lightGray,

  icon: palette.lightMidnightGreen,
  iconHighlight: palette.midnightGreen,
  facebookBrand: '#4267B2',
  vkBrand: '#4680C2',

  link: palette.blue,
  defaultBackground: palette.white,
  lightBackground: palette.lightGray,
  inputBackground: palette.lightGray,
  pushBackground: palette.midnightGreen,
  warningBackground: palette.midnightGreen,
  successBackground: palette.green,
  inputBorder: palette.lightGray,
  inputBorderFocus: palette.blue,
  inputError: palette.lightRed,
  inputPlaceholder: palette.lightMidnightGreen,
  inputCaret: palette.blue,
  hover: palette.lightGray,

  success: palette.green,
  info: palette.blue,
  danger: palette.red,
  white: palette.white,

  proximityClose: palette.green,
  proximityMiddle: palette.yellow,
  proximityFar: palette.orange,
  proximityDisabled: palette.lightGray,

  priceLow: palette.green,
  priceMedium: palette.orange,
  priceHigh: palette.red,

  primaryActive: palette.darkBlue,
  secondaryActive: palette.gray,

  polylinePrimary: '#3D5C62',
  polylineStrokePrimary: palette.midnightGreen,
  polylineSecondary: palette.gray,
  polylineStrokeSecondary: palette.lightMidnightGreen,

  tapHighlight: 'rgba(221, 221, 221, .4)', // gray, 40%
}

export const pxToInteger = (size: string): number => parseInt(size.replace('px', ''), 10)

export default {
  color,
  font,
  fontWeight,
  space,
  radius,
  shadow,
}
