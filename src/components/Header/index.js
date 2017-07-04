import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const Header = styled.header`
  height: ${props => theme.config.header};
`;


class HeaderWrap extends Component {
  render() {
    return (
      <Header>
        <h1>Styled Components Boilerplate</h1>
      </Header>
    );
  }
}

export default HeaderWrap
