import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router'
import {login, createTestnetAccount} from '../../actions/user'
import {Button, Input, View} from '../ui'
import {H1, P} from '../../styles'
import {DASHBOARD} from '../../routes'

class Login extends Component {
  state = {
    useTestnet: true,
    secretKey: 'SDK7SL625ZUELSLRMD3AEK5HVMNI3FLCW7NLQLT45A6GWTYDP6AVD4CE'
  }

  login = () => {
    const {secretKey, useTestnet} = this.state
    this.props.login(secretKey, useTestnet)
  }

  createTestnetAccount = () => {
    this.props.createTestnetAccount(this.state.useTestnet)
  }

  onChangeTestNet = (event) => {
    this.setState({
      useTestnet: event.target.checked
    })
  }

  onChangeKey = (event) => {
    this.setState({secretKey: event.target.value})
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.secretKey) {
      this.setState({
        secretKey: nextProps.secretKey
      })
    }
  }

  render () {
    const {useTestnet, secretKey} = this.state
    const {loggedIn, error, loading} = this.props

    if (loggedIn) {
      return <Redirect to={DASHBOARD} />
    }

    return (
      <View loading={loading}>
        <label>
          <span>Use Testnet ?</span>
          <Input type='checkbox' checked={useTestnet} onChange={this.onChangeTestNet} />
        </label>
        <H1>Login</H1>
        {error && (
          <P error>{error.message}</P>
        )}
        <P large>
          <Input value={secretKey} onChange={this.onChangeKey} />
          <Button onClick={this.login}>Go</Button>
        </P>
        {useTestnet && (
          <Button onClick={this.createTestnetAccount}>Create testnet account</Button>
        )}
      </View>
    )
  }
}

export default connect(({ui, user}) => ({
  loading: ui.get('loading'),
  loggedIn: user.get('loggedIn'),
  secretKey: user.get('secretKey'),
  error: ui.get('error')
}), {
  login,
  createTestnetAccount
})(Login)
