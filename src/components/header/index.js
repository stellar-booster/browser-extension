import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import logo from '../../assets/logo.png'
import { H1 } from '../../styles'
import Menu from '../menu'

export const Header = styled.header`
  background-color: #222;
  min-height: 150px;
  padding: 20px;
  color: white;
`

const logoAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Logo = styled.img`
  animation: ${logoAnimation} infinite 10s linear;
  height: 80px;
`

class HeaderComponent extends Component {
  render () {
    return (
      <Header>
        <Logo src={logo} alt='logo' />
        <H1>
Stellar Booster
        </H1>
        <Menu />
      </Header>
    )
  }
}

export default connect((
  // { ui, user, router}
) => ({
  // loading: ui.get('loading'),
  // error: ui.get('error'),
  // loggedIn: user.get('loggedIn'),
  // location: router.location
}))(HeaderComponent)
