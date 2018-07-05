import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  opacity: ${props => (props.loading ? 0.4 : 1)};
  pointer-events: ${props => (props.loading ? 'none' : 'visible')};
  padding: 10px 20px;
`

export const View = ({ children, loading }) => (
  <Wrapper loading={loading}>
    {children}
  </Wrapper>
)
