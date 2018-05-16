import React from 'react';
import {connect} from 'react-redux';
import styled, {keyframes} from 'styled-components';
import logo from '../../assets/logo.svg';
import {H1, Header, textCenter} from '../../styles';
import pushRouter from '../../actions/navigate';

const Wrapper = styled.div`
  ${textCenter}
`;

const logoAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Logo = styled.img`
  animation: ${logoAnimation} infinite 20s linear;
  height: 80px;
`;

const App = (props) => (
  <Wrapper>
    <Header>
      <Logo src={logo} alt="logo" />
      <H1>StellarMask</H1>
      <button onClick={() => props.pushRouter('/transfer')} type="button">transfer</button>
      <button onClick={() => props.pushRouter('/')} type="button">login</button>
    </Header>
    {props.children}
  </Wrapper>
);

export default connect(({ui}) => ({
  loading: ui.get('loading'),
  error: ui.get('error'),
}), {
  pushRouter,
})(App);
