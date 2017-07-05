import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import theme from '../../theme';

const Header = styled.header`
  height: ${props => theme.config.header};
`;


class HeaderWrap extends Component {
  render() {
    return (
      <Header>
        <h1>Styled Components Boilerplate</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/form-elements'>Form Elements</Link>
          <Link to='/links'>Links</Link>
          <Link to='/buttons'>Buttons</Link>
        </nav>
      </Header>
    );
  }
}

export default HeaderWrap
