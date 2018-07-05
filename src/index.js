import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'

import App from './components/app'
import Routes from './routes'
import createStore from './store'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const history = createHistory()

ReactDOM.render(
  <Provider store={createStore({}, history)}>
    <App>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </App>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
