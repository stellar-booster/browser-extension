import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'

const ButtonCSS = css`
  background-color: lightBlue;
  padding: 11px 20px;
  border: 0;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  font-size: 1.1rem;
  margin: 0 5px;
  min-width: 40px;
`

const WrapperA = styled.a`${ButtonCSS}`
const WrapperButton = styled.button`${ButtonCSS}`

export const Button = ({ children, ...props }) => (
  <Fragment>
    {!props.href && (
      <WrapperButton type='button' {...props}>
        {children}
      </WrapperButton>
    )}
    {props.href && (
      <WrapperA {...props}>
        {children}
      </WrapperA>
    )}
  </Fragment>
)
