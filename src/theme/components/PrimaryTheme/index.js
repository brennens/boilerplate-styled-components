import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme'

const PrimaryTheme = (props) => {
  return (
    <ThemeProvider theme={theme.theme.dark}>
      {props.children}
    </ThemeProvider>
  );
}

export default PrimaryTheme;
