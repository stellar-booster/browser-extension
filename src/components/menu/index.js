import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {logout} from '../../actions/user'
import pushRouter from '../../actions/navigate'
import {Button} from '../ui'
import {DASHBOARD, TRANSFER} from '../../routes'

const Wrapper = styled.div`

`

class Menu extends Component {
  onTransfer = () => {
    this.props.pushRouter(TRANSFER)
  }

  onDashboard = () => {
    this.props.pushRouter(DASHBOARD)
  }

  onLogout = () => {
    this.props.logout()
  }

  render () {
    const {loggedIn, location} = this.props
    return (
      <Wrapper>
        {loggedIn && (location.pathname !== TRANSFER) && <Button onClick={this.onTransfer}>Transfer</Button>}
        {loggedIn && (location.pathname !== DASHBOARD) && <Button onClick={this.onDashboard}>Dashboard</Button>}
        {loggedIn && <Button onClick={this.onLogout}>Logout</Button>}
      </Wrapper>
    )
  }
}

export default connect(({user, router}) => ({
  loggedIn: user.get('loggedIn'),
  location: router.location
}), {
  pushRouter, logout
})(Menu)
