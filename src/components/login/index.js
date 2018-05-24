import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login, createAccount} from '../../actions/user';
import server from '../../utils/stellar/server';
import {Button, Input, View} from '../ui';
import {H1, P} from '../../styles';

class Login extends Component {
  state = {
    useTestnet: true,
    secretKey: 'SDK7SL625ZUELSLRMD3AEK5HVMNI3FLCW7NLQLT45A6GWTYDP6AVD4CE',
  }

  login = () => {
    const {secretKey, useTestnet} = this.state;
    this.props.login(secretKey, useTestnet);
  }

  createAccount = () => {
    this.props.createAccount(this.state.useTestnet);
  }

  onChangeTestNet = (event) => {
    this.setState({
      useTestnet: event.target.checked
    });
  }

  onChangeKey = (event) => {
    this.setState({secretKey: event.target.value});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.secretKey) {
      this.setState({
        secretKey: nextProps.secretKey
      });
    }
  }

  render() {
    const {useTestnet, secretKey} = this.state;
    const {account, error, loading} = this.props;

    return (
      <View loading={loading}>
        {!account && <label>
          <span>Use Testnet ?</span>
          <Input type="checkbox" checked={useTestnet} onChange={this.onChangeTestNet}/>
        </label>}
        <H1>{account ? 'Dashboard' : 'Login'}</H1>
        {error && (
          <P error>{error.message}</P>
        )}
        {account ? (
          <div>
            <a href={`${server.url()}accounts/${account.id}`} target="_blank">View on Stellar</a>
            {account.balances
              .reverse()
              .map((b, i) => (
                <p key={i}>{b.balance} {b.asset_type === 'native' ? 'XLM' : b.asset_code}</p>
              ))}
            {/* <pre>{JSON.stringify(account, null, 2)}</pre> */}
          </div>
        ) : (
          <P large>
            <Input value={secretKey} onChange={this.onChangeKey}/>
            <Button onClick={this.login}>Go</Button>
          </P>
        )}
        <Button onClick={this.createAccount}>Create test account</Button>
      </View>
    );
  }
}

export default connect(({ui, user}) => ({
  loading: ui.get('loading'),
  account: user.get('account'),
  secretKey: user.get('secretKey'),
  error: ui.get('error'),
}), {
  login,
  createAccount
})(Login);
