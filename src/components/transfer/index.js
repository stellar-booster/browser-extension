import React, {Component} from 'react';
import styled from 'styled-components';
import {P, H1} from '../../styles';
import {Input, Button} from '../ui';

const Wrapper = styled.div``;

export default class Transfer extends Component {
  state = {
    publicKey: '',
    amount: 0
  }

  onChangeField = (event) => {
    this.setState({
      [event.target.dataset.value]: event.target.value
    });
  }

  render() {
    const {publicKey, amount} = this.state;
    return (
      <Wrapper>
        <H1>Transfer Lumens</H1>
        <P large>
          <Input value={publicKey} data-value="publicKey" onChange={this.onChangeField}/>
          <Input value={amount} data-value="amount" onChange={this.onChangeField}/>
          <Button onClick={this.login}>Go</Button>
        </P>
      </Wrapper>
    );
  }
}
