import React, {Component} from 'react';
import {Keypair} from 'stellar-sdk';
import server from '../../utils/stellar/server';
import createTestAccount from '../../utils/stellar/create-test-account';

class App extends Component {
  state = {
    useTestnet: true,
    secretKey: 'SDK7SL625ZUELSLRMD3AEK5HVMNI3FLCW7NLQLT45A6GWTYDP6AVD4CE',
    account: null,
    error: null,
    loading: false,
  }

  setServer(useTestnet) {
    server.set(useTestnet);
    this.setState({useTestnet});
  }

  async login() {
    const {secretKey} = this.state;

    if (!secretKey) {
      return;
    }

    this.setState({loading: true});

    let keypair = null;

    try {
      keypair = Keypair.fromSecret(secretKey);
    } catch (e) {}

    if (!keypair) {
      this.setState({error: new Error('Invalid key'), loading: false});
      return;
    }

    let account = null;
    try {
      account = await server.get().loadAccount(keypair.publicKey());
    } catch (e) {}

    if (!account) {
      this.setState({error: new Error('Account not found'), loading: false});
      return;
    }

    this.setState({account, error: null, loading: false});
  }

  async createTestAccount() {
    let keypair = null;

    this.setState({loading: true});

    try {
      keypair = await createTestAccount();
    } catch (e) {}

    if (!keypair) {
      this.setState({error: new Error('Failed to create test account')});
      return;
    }

    this.setState({secretKey: keypair.secret(), error: null, loading: false});
  }

  render() {
    const {useTestnet, secretKey, account, error, loading} = this.state;

    return (
      <div className="App" style={loading ? {opacity: 0.4, pointerEvents: 'none'} : {}}>
        <label>
          <span>Use Testnet ?</span>
          <input type="checkbox" checked={useTestnet} onChange={event => this.setServer(event.target.checked)}/>
        </label>
        <h1 className="App-title">Login</h1>
        {error && (
          <p style={{color: 'red'}}>{error.message}</p>
        )}
        {account ? (
          <div className="App-intro">
            <a href={`${server.url()}accounts/${account.id}`} target="_blank">View on Stellar</a>
            {account.balances
              .reverse()
              .map((b, i) => (
                <p key={i}>{b.balance} {b.asset_type === 'native' ? 'XLM' : b.asset_code}</p>
              ))}
            {/* <pre>{JSON.stringify(account, null, 2)}</pre> */}
          </div>
        ) : (
          <p className="App-intro">
            <input value={secretKey} onChange={event => this.setState({secretKey: event.target.value})}/>
            <button type="button" onClick={() => this.login()}>Go</button>
          </p>
        )}
        <button type="button" onClick={() => this.createTestAccount()}>Create test account</button>
      </div>
    );
  }
}

export default App;
