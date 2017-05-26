import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme'

const ThemeWrapper = (props) => {
  return (
    <ThemeProvider theme={theme.theme.winter}>
      {props.children}
    </ThemeProvider>
  );
}

export default ThemeWrapper;
