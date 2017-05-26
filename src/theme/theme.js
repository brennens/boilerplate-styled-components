// ==============================
// APP STYLE CONSTANTS
// ==============================

// color
const color = {
  summerPink: '#e85a71',
  summerAqua: '#4ea1d3',
  summerPaleBlue: '#d8e9ef',
  summerMidnight: '#454552',
  springGreen: '#67D5B5',
  springPink: '#EE7785',
  springPurple: '#C89EC4',
  springBlue: '#84B1ED',
  fallYellow: '#FFBC42',
  fallPink: '#D81159',
  fallPurple: '#8F2D56',
  winterDusk: '#6d819c',
  winterBlue: '#47b8e0',
  winterGreen: '#55967e',
  winterMidnight: '263959',
};

const neutral = {
  white: '#FFFFFF',
  gray10: '#DCDCDC',
  gray20: '#D0D0D0',
  gray30: '#BEBEBE',
  gray40: '#A9A9A9',
  gray50: '#989898',
  gray60: '#808080',
  gray70: '#696969',
  gray80: '#585858',
  gray90: '#404040',
  black: '#000000',
};

const theme = {
  summer: {
    primary: color.summerPink,
    secondary: color.summerAqua,
    tertiary: color.summerPaleBlue,
    quaternary: color.summerMidnight,
  },
  spring: {
    primary: color.springGreen,
    secondary: color.springPink,
    tertiary: color.springPurple,
    quaternary: color.springBlue,
  },
  winter: {
    primary: color.winterBlue,
    secondary: color.winterGreen,
    tertiary: color.winterDusk,
    quaternary: color.winterMidnight,
  },
  fall: {
    primary: color.fallYellow,
    secondary: color.fallPink,
    tertiary: color.fallPurple,
    quaternary: color.fall,
  }
}

export default {
  color,
  neutral,
  theme,
};
