import React from 'react';
import ReactDOM from 'react-dom';
import ThemeWrapper from './theme/components/ThemeWrapper';

import Base from './layout/Base';
// import './sass/main.scss';


ReactDOM.render(
  <ThemeWrapper>
    <Base />
  </ThemeWrapper>,
  document.querySelector('.bs-content')
);
