import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createStore from '../../store'
import Transfer from '.'

describe('Transfer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render((
      <Provider store={createStore({})}>
        <Transfer />
      </Provider>
    ), div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
