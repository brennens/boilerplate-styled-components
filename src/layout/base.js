import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';

import HeaderWrap from '../components/Header';
import Home from '../components/Home';
import FooterWrap from '../components/Footer';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;



class Base extends Component {
  render() {
    return (
      <Wrapper>
        <HeaderWrap />
        <Home />
        <FooterWrap />
      </Wrapper>
    );
  }
}

export default Base
