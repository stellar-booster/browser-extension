import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {P, H1} from '../../styles';
import {Input, Button} from '../ui';
import {transfer} from '../../actions/transfer';

const Wrapper = styled.div`
  opacity: ${props => props.loading ? 0.4 : 1};
  pointer-events: ${props => props.loading ? 'none' : 'visible'};
`;

class Transfer extends Component {
  state = {
    publicKey: '',
    amount: 0,
    memo: ''
  }

  onChangeField = (event) => {
    this.setState({
      [event.target.dataset.value]: event.target.value
    });
  }

  render() {
    const {publicKey, amount, memo} = this.state;
    const {loading, error, notify} = this.props;
    return (
      <Wrapper loading={loading}>
        <H1>Transfer Lumens</H1>
        {error && (
          <P error>{error.message}</P>
        )}
        {notify && (
          <P>{notify}</P>
        )}
        <P large>
          <Input value={publicKey} data-value="publicKey" onChange={this.onChangeField}/>
          <Input value={amount} data-value="amount" onChange={this.onChangeField}/>
          <Input value={memo} data-value="memo" onChange={this.onChangeField}/>
          <Button onClick={() => this.props.transfer(publicKey, amount, memo)}>Go</Button>
        </P>
      </Wrapper>
    );
  }
}

export default connect(({ui}) => ({
  loading: ui.get('loading'),
  error: ui.get('error'),
  notify: ui.get('notify'),
}), {
  transfer
})(Transfer);
