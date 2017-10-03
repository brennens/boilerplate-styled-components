// ==============================
// APP STYLE CONSTANTS
// ==============================

import { injectGlobal } from 'styled-components'
import { darken, lighten } from 'polished'

const shade = 0.15
const bright = 0.3

const config = {
  header: '100px',
  footer: '50px',
  sidebar: '300px',
}

const color = {
  summerPink: '#e85a71',
  summerAqua: '#4ea1d3',
  summerPaleBlue: '#d8e9ef',
  summerMidnight: '#454552',
  springGreen: '#67D5B5',
  springPink: '#EE7785',
  springPurple: '#C89EC4',
  springBlue: '#84B1ED',
  springGreenDark: `${darken(shade, '#67D5B5')}`,
  springPinkDark: `${darken(shade, '#EE7785')}`,
  springPurpleDark: `${darken(shade, '#C89EC4')}`,
  springBlueDark: `${darken(shade, '#84B1ED')} `,
  springGreenLight: `${lighten(bright, '#67D5B5')}`,
  springPinkLight: `${lighten(bright, '#EE7785')}`,
  springPurpleLight: `${lighten(bright, '#C89EC4')}`,
  springBlueLight: `${lighten(bright, '#84B1ED')} `,
  fallYellow: '#FFBC42',
  fallPink: '#D81159',
  fallPurple: '#8F2D56',
  winterDusk: '#6d819c',
  winterBlue: '#47b8e0',
  winterGreen: '#55967e',
  winterMidnight: '263959',
}

const neutral = {
  white: '#FFFFFF',
  gray10: `${lighten(0.9, '#000000')}`,
  gray20: `${lighten(0.8, '#000000')}`,
  gray30: `${lighten(0.7, '#000000')}`,
  gray40: `${lighten(0.6, '#000000')}`,
  gray50: `${lighten(0.5, '#000000')}`,
  gray60: `${lighten(0.4, '#000000')}`,
  gray70: `${lighten(0.3, '#000000')}`,
  gray80: `${lighten(0.2, '#000000')}`,
  gray90: `${lighten(0.1, '#000000')}`,
  black: '#000000',
}

const theme = {
  summer: {
    primary: color.summerPink,
    secondary: color.summerAqua,
    tertiary: color.summerPaleBlue,
    quaternary: color.summerMidnight,
    neutral: neutral,
  },
  spring: {
    primary: color.springGreen,
    secondary: color.springPink,
    tertiary: color.springPurple,
    quaternary: color.springBlue,
    primaryDark: color.springGreenDark,
    secondaryDark: color.springPinkDark,
    tertiaryDark: color.springPurpleDark,
    quaternaryDark: color.springBlueDark,
    primaryLight: color.springGreenLight,
    secondaryLight: color.springPinkLight,
    tertiaryLight: color.springPurpleLight,
    quaternaryLight: color.springBlueLight,
    neutral: neutral,
  },
  winter: {
    primary: color.winterBlue,
    secondary: color.winterGreen,
    tertiary: color.winterDusk,
    quaternary: color.winterMidnight,
    neutral: neutral,
  },
  fall: {
    primary: color.fallYellow,
    secondary: color.fallPink,
    tertiary: color.fallPurple,
    quaternary: color.fall,
    neutral: neutral,
  },
}

injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 10px;
  }

  body {
    background: ${neutral.white};
    color: ${neutral.gray80};
    font-family: -apple-sytem,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  h1,h2,h3,h4,h5,h6{
    font-weight: normal;
  }
`

export default {
  config,
  color,
  neutral,
  theme,
}
