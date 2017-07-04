import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import theme from '../../theme'

const Footer = styled.footer`
  height: ${props => theme.config.footer};
`;


class FooterWrap extends Component {
  render() {
    return (
      <Footer>
        <span>By BS</span>
      </Footer>
    );
  }
}

export default FooterWrap
