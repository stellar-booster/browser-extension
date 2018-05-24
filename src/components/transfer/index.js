import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {P, H1} from '../../styles';
import {Input, Button, View} from '../ui';
import {transfer} from '../../actions/transfer';

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  text-align: left;

  label {
    margin-bottom: 10px;
  }
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

  onTransfer = () => {
    const {publicKey, amount, memo} = this.state;
    this.props.transfer(publicKey, amount, memo);
  }

  render() {
    const {publicKey, amount, memo} = this.state;
    const {loading, error, notify} = this.props;
    return (
      <View loading={loading}>
        <H1>Transfer Lumens</H1>
        {error && (
          <P error>{error.message}</P>
        )}
        {notify && (
          <P>{notify}</P>
        )}
        <div>
          <InputBlock>
            <label>Stellar Public Key</label>
            <Input value={publicKey} data-value="publicKey" onChange={this.onChangeField}/>
          </InputBlock>
          <InputBlock>
            <label>Amount</label>
            <Input value={amount} data-value="amount" onChange={this.onChangeField}/>
          </InputBlock>
          <InputBlock>
            <label>Memo</label>
            <Input value={memo} data-value="memo" onChange={this.onChangeField}/>
          </InputBlock>
          <Button onClick={this.onTransfer}>Confirm</Button>
        </div>
      </View>
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
