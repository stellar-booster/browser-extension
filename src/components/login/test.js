import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createStore from '../../store'
import Login from '.'

describe('Login', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render((
      <Provider store={createStore({})}>
        <Login />
      </Provider>
    ), div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
