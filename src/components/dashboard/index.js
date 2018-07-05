import React, { Component } from 'react'
import { connect } from 'react-redux'
import server from '../../utils/stellar/server'
import { View } from '../ui'
import { H1, P } from '../../styles'

class Dashboard extends Component {
  render () {
    const { account, error, loading } = this.props

    return (
      <View loading={loading}>
        <H1>
Dashboard
        </H1>
        {error && (
          <P error>
            {error.message}
          </P>
        )}
        <div>
          <a href={`${server.url()}accounts/${account.id}`} target='_blank'>
View on Stellar
          </a>
          {account.balances
            .reverse()
            .map((b, i) => (
              <p key={i}>
                {b.balance}
                {' '}
                {b.asset_type === 'native' ? 'XLM' : b.asset_code}
              </p>
            ))}
          {/* <pre>{JSON.stringify(account, null, 2)}</pre> */}
        </div>
      </View>
    )
  }
}

export default connect(({ ui, user }) => ({
  loading: ui.get('loading'),
  account: user.get('account'),
  secretKey: user.get('secretKey'),
  error: ui.get('error')
}))(Dashboard)
