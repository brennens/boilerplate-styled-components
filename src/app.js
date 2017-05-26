import React from 'react';
import ReactDOM from 'react-dom';
import ThemeWrapper from './theme/components/ThemeWrapper';

import Home from './components/home';
import './sass/main.scss';

ReactDOM.render(
  <ThemeWrapper>
    <Home />
  </ThemeWrapper>,
  document.querySelector('.bs-content')
);
