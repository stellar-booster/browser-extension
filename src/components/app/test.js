import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createStore from '../../store'
import App from '.'

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render((
      <Provider store={createStore({})}>
        <App />
      </Provider>
    ), div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
