import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {textCenter} from '../../styles';
import Header from '../header';

const Wrapper = styled.div`
  ${textCenter}
  min-height: 700px;
  border: 1px solid black;
`;

class App extends Component {


  render() {
    const {children} = this.props;
    return (
      <Wrapper>
        <Header />
        {children}
      </Wrapper>
    );
  }
}

export default connect(({ui}) => ({
  loading: ui.get('loading'),
  error: ui.get('error'),
}))(App);
